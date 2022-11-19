import { useRef } from 'react';

export default function Home() {
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
		}).then(res=>res.json()).then(data=>console.log(data))
	}

	return (
		<div>
			<h1>HomePage</h1>
			<form onSubmit={submitHandler}>
				<div>
					<label htmlFor="email">Your email </label>
					<input type="email" ref={emailRef} id="email" />
				</div>

				<div>
					<label htmlFor="feedback">Your feedback</label>
					<textarea rows="5" ref={feedbackRef} id="feedback" />
				</div>
				<button>Send Feedback </button>
			</form>
		</div>
	);
}
