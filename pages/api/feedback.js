import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
	const feedbackFile = path.join(process.cwd(), 'data', 'feedback.json');
	const oldData = fs.readFileSync(feedbackFile);
	const data = JSON.parse(oldData);

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
