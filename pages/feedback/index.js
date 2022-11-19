import React from 'react';
import { filePath, extractFeedback } from './../../utils/helper';

export default function FeedbackPage(props) {
	return (
		<ul>
			{props.feedbacks.map((i) => (
				<li key={i.id}>
					<p>{i.feedback}</p>
					<p>{i.email}</p>
				</li>
			))}
		</ul>
	);
}

export async function getStaticProps() {
	const feedbackFile = filePath();
	const data = extractFeedback(feedbackFile);
	return {
		props: {
			feedbacks: data,
		},
	};
}
