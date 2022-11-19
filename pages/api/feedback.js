export default function handler(req, res) {
	if (req.method === 'POST') {
		const email = req.body.email;
    const feedback = req.body.feedback;
    
		const newFeedback = {
			id: new Date().toISOString,
			email: email,
			feedback: feedback,
    };
    
	}

	res.status(200).json({ message: 'This works just fine!' });
}
