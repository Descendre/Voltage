import { NextRequest, NextResponse } from 'next/server';
import { spawn } from 'child_process';

const runPythonScript = async (speechText: string): Promise<string> => {
	const pythonScriptPath = 'src/python/main.py';

	return new Promise((resolve, reject) => {
		const pythonProcess = spawn('python3', [pythonScriptPath, speechText], {
			env: {
				...process.env,
				PYTHONIOENCODING: 'utf-8',
			},
		});

		let dataOutput = '';
		pythonProcess.stdout.on('data', (data) => {
			dataOutput += data.toString();
		});

		pythonProcess.stderr.on('data', (data) => {
			console.error(`Python stderr: ${data}`);
		});

		pythonProcess.on('close', (code) => {
			if (code === 0) {
				resolve(dataOutput.trim());
			} else {
				reject(new Error(`Python process exited with code ${code}`));
			}
		});
	});
};

export const GET = async (
	req: NextRequest,
	{ params }: { params: { speechText: string } }
) => {
	const speechText = params.speechText;

	const result = await runPythonScript(speechText);

	return NextResponse.json(result);
};
