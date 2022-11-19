import path from 'path';
import fs from 'fs';
export function filePath() {
	return path.join(process.cwd(), 'data', 'feedback.json');
}

export function extractFeedback(path) {
	const oldData = fs.readFileSync(path);
	const data = JSON.parse(oldData);
	return data;
}
