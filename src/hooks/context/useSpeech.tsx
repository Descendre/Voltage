'use client';
import { useContext, useState } from 'react';
import { Context } from '@/provider';
import {
	EmotionResponese,
	ExtendedWindow,
	HandleGenerateEmotionalPlayList2Props,
	HandleGenerateEmotionalPlayListProps,
	RelatedArtistsResponse,
	SpeechRecognition,
	SpeechRecognitionEvent,
	SpotifyRecommendationResponse,
	TopArtistsResponse,
	TopTracksResponse,
	UseSpeechProps,
} from '@/interfaces';
import { axiosFetch } from '@/libs';
import { getRandomIndex, getRandomRelatedArtistIds } from '@/utils';

export const useSpeech = (): UseSpeechProps => {
	const [processText, setProcessText] = useState<string>('');

	const context = useContext(Context);
	if (!context) {
		throw new Error('Context is not provided');
	}

	const [recognition, setRecognition] = useState<SpeechRecognition | null>(
		null
	);
	const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

	const { transcript, setTranscript, emotion, setEmotion, spotifyToken } =
		context;

	const handleStartRecognition = async (): Promise<void> => {
		const SpeechRecognition =
			(window as ExtendedWindow).SpeechRecognition ||
			(window as ExtendedWindow).webkitSpeechRecognition;
		if (!SpeechRecognition) {
			console.error('Speech recognition not supported');
			return;
		}

		const recognition = new SpeechRecognition();
		recognition.lang = 'ja-JP';
		recognition.interimResults = false;
		recognition.maxAlternatives = 1;

		recognition.onresult = async (event: SpeechRecognitionEvent) => {
			setProcessText('感情ボルテージを測定中...');
			const speechResult = event.results[0][0]?.transcript || '';
			const response = await axiosFetch.get<EmotionResponese>(
				`/api/emotion/${speechResult}`
			);
			let { text, voltage, classification } = response;
			const trackEnergy = getTrackEnergy(voltage);
			setTranscript(speechResult);
			setProcessText('プレイリストを構成中...');
			await handleGenerateEmotionalPlayList({
				trackEnergy: trackEnergy,
				offset: 0,
				limit: 5,
			}); // 指定した範囲のトップトラックを元におすすめを返す
			await handleGenerateEmotionalPlayList({
				trackEnergy: trackEnergy,
				offset: 5,
				limit: 5,
			});
			await handleGenerateEmotionalPlayList2({ trackEnergy: trackEnergy }); // ランダムなトップアーティストのランダムな関連アーティストを元におすすめを返す
			await handleGenerateEmotionalPlayList2({ trackEnergy: trackEnergy });
			setProcessText('');
		};

		recognition.onaudiostart = () => {
			setIsSpeaking(true);
			setProcessText('音声を認識中...');
		};

		recognition.onaudioend = () => {
			setIsSpeaking(false);
			setProcessText('音声認識を終了');
		};

		setRecognition(recognition);
		recognition.start();
	};

	const handleStopRecognition = (): void => {
		if (recognition) {
			recognition.abort();
		}
	};

	const handleGenerateEmotionalPlayList = async ({
		trackEnergy,
		offset,
		limit,
	}: HandleGenerateEmotionalPlayListProps): Promise<SpotifyRecommendationResponse | null> => {
		if (!spotifyToken) return null;

		// 自分のアカウントのトップトラック5件を取得
		const topTrackResponse = await axiosFetch.post<TopTracksResponse>(
			`/api/track/top`,
			{
				offSet: offset,
				limit: limit,
			},
			{
				Authorization: `Bearer ${spotifyToken.access_token}`,
			}
		);
		const topTrackIds = topTrackResponse.items
			.map((track) => track.id)
			.join(',');

		// トップトラック5件のIDを元におすすめトラック10件を検索
		const RecommendationTrackResponse =
			await axiosFetch.post<SpotifyRecommendationResponse>(
				`/api/track/recommendations/seedTracks`,
				{
					seedTracks: topTrackIds,
					limit: 10,
					trackEnergy: trackEnergy,
				},
				{
					Authorization: `Bearer ${spotifyToken.access_token}`,
				}
			);
		console.log(RecommendationTrackResponse);
		return RecommendationTrackResponse;
	};

	const handleGenerateEmotionalPlayList2 = async ({
		trackEnergy,
	}: HandleGenerateEmotionalPlayList2Props): Promise<SpotifyRecommendationResponse | null> => {
		if (!spotifyToken) return null;

		// 自分のアカウントのトップアーティストを取得
		const topArtistResponse = await axiosFetch.get<TopArtistsResponse>(
			`/api/artist/top`,
			{
				Authorization: `Bearer ${spotifyToken.access_token}`,
			}
		);

		// トップアーティストのうちランダムなIDを一つ取得
		const randomTopArtistIndex = getRandomIndex(topArtistResponse.items.length);
		const randomTopArtistId = topArtistResponse.items[randomTopArtistIndex].id;

		// ランダムなトップアーティストのIDから関連アーティストを取得
		const relatedArtistResponse = await axiosFetch.get<RelatedArtistsResponse>(
			`/api/artist/related/${randomTopArtistId}`,
			{
				Authorization: `Bearer ${spotifyToken.access_token}`,
			}
		);

		// 5件のランダムなトップアーティストのIDを取得する
		const randomTopArtistIds = getRandomRelatedArtistIds(
			relatedArtistResponse,
			5
		);

		// 関連アーティスト5件のIDを元におすすめトラック10件を検索
		const RecommendationTrackResponse =
			await axiosFetch.post<SpotifyRecommendationResponse>(
				`/api/track/recommendations/seedArtists`,
				{
					seedArtists: randomTopArtistIds,
					limit: 10,
					trackEnergy: trackEnergy,
				},
				{
					Authorization: `Bearer ${spotifyToken.access_token}`,
				}
			);
		console.log(RecommendationTrackResponse);
		return RecommendationTrackResponse;
	};

	const getTrackEnergy = (voltage: number) => {
		switch (voltage) {
			case 0:
				return {
					target_energy: 0,
					target_valence: 0,
				};
			case 1:
				return {
					target_energy: 0.25,
					target_valence: 0.25,
				};
			case 2:
				return {
					target_energy: 0.5,
					target_valence: 0.5,
				};
			case 3:
				return {
					target_energy: 0.75,
					target_valence: 0.75,
				};
			case 4:
				return {
					target_energy: 1,
					target_valence: 1,
				};
			default:
				return {
					target_energy: 0.5,
					target_valence: 0.5,
				};
		}
	};

	return {
		recognition,
		setRecognition,
		isSpeaking,
		setIsSpeaking,
		transcript,
		setTranscript,
		emotion,
		setEmotion,
		handleStartRecognition,
		handleStopRecognition,
		processText,
		setProcessText,
	};
};
