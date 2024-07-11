import os
import sys
import json
from transformers import BertTokenizer, BertForSequenceClassification
import torch

# 環境変数を設定してシンボリックリンク警告を無効にする
os.environ['HF_HUB_DISABLE_SYMLINKS_WARNING'] = '1'

# 詳細な感情分析モデルとTokenizerの準備
model_name = 'nlptown/bert-base-multilingual-uncased-sentiment'  # 感情分析に特化したモデルを指定
tokenizer = BertTokenizer.from_pretrained(model_name)
model = BertForSequenceClassification.from_pretrained(model_name)

# メイン関数
def main():
    if len(sys.argv) > 1:
        speech_text = sys.argv[1]

        # テキストの前処理
        inputs = tokenizer(speech_text, return_tensors="pt", padding=True, truncation=True)

        # BERTモデルでの感情分析
        with torch.no_grad():
            outputs = model(**inputs)

        # 結果の取得
        logits = outputs.logits
        predicted_label = torch.argmax(logits, dim=1).item()

        # 感情ラベルの対応関係
        emotion_labels = ["Super Negative", "Negative", "Neutral", "Positive", "Super Positive"]
        predicted_emotion = emotion_labels[predicted_label]

        result = {
            "text": speech_text,
            "voltage": predicted_label,
            "classification": predicted_emotion
        }
        print(json.dumps(result))

    else:
        print("No speech text provided.")

if __name__ == "__main__":
    main()