import { useRef, useState } from 'react';

export default function Home() {
	const [feedbacks, setFeedbacks] = useState();
	const emailRef = useRef();
	const feedbackRef = useRef();

	function submitHandler(event) {
		event.preventDefault();

		const enteredBody = {
			email: emailRef.current.value,
			feedback: feedbackRef.current.value,
		};

		fetch('api/feedback', {
			method: 'POST',
			body: JSON.stringify(enteredBody),
			headers: { 'Content-Type': 'application/json' },
		})
			.then((res) => res.json())
			.then((data) => console.log(data));
	}

	function getFeedback() {
		fetch('api/feedback')
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setFeedbacks(data.feedback);
			});
	}

	return (
		<div>
			<h1>HomePage</h1>
			<form onSubmit={submitHandler}>
				<div>
					<label htmlFor="email">Your email </label>
					<input type="email" ref={emailRef} id="email" />
				</div>
				<hr />
				<div>
					<label htmlFor="feedback">Your feedback</label>
					<textarea rows="5" ref={feedbackRef} id="feedback" />
				</div>
				<hr />
				<button>Send Feedback </button>
			</form>
			<hr />
			<button onClick={getFeedback}>Get Feedback </button>
			<ul>
				{feedbacks &&
					feedbacks.map((i) => (
						<li key={i.id}>
							<p>{i.feedback}</p>
							<p>{i.email}</p>
						</li>
					))}
			</ul>
		</div>
	);
}
