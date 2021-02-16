class App extends React.Component {
	render() {
		return (
			<div>
				<Hello
					to="Ringo"
					from="Paul"
					bangs={4}
					img="https://www.theweedpatchstore.com/images/D/hello-farmhouse-wood-sign-L.jpg"
				/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
