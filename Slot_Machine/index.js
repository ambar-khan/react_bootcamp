/* eslint-disable indent */
class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Slot Machines!</h1>
				<Machine
					s1="🍊"
					s2="🍇"
					s3="🍒"
					text="You lose!"
				/>
				<Machine
					s1="🍇"
					s2="🍇"
					s3="🍇"
					text="You win!"
				/>
				<Machine
					s1="🍊"
					s2="🍇"
					s3="🍊"
					text="You lose!"
				/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
