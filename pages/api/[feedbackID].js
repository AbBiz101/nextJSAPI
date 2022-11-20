import { filePath, extractFeedback } from './../../utils/helper';

export default function handler(req, res) {
    const feedbackFile = filePath();
    
	const data = extractFeedback(feedbackFile);
	const feedbackID = req.query.feedbackID;
    const selectedFeedback = data.find((feedback) => feedback.id === feedbackID);
    
	res.status(200).json({ feedback: selectedFeedback });
}
