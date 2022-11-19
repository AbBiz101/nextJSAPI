import fs from 'fs';
import { filePath, extractFeedback } from './../../utils/helper';

export default function handler(req, res) {
	const feedbackFile = filePath();
	const data = extractFeedback(feedbackFile);

	if (req.method === 'POST') {
		const email = req.body.email;
		const feedback = req.body.feedback;
		const newFeedback = {
			id: new Date().toISOString(),
			email: email,
			feedback: feedback,
		};
		data.push(newFeedback);
		fs.writeFileSync(feedbackFile, JSON.stringify(data));

		res
			.status(200)
			.json({ message: 'Feedback added successfully!', feedback: newFeedback });
	}

	res.status(200).json({ feedback: data });
}
