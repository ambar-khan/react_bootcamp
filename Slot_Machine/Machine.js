/* eslint-disable indent */
class Machine extends React.Component {
	render() {
		return (
			<div>
				<p>{this.props.s1}{this.props.s2}{this.props.s3}</p>
				<p>{this.props.text}</p>
			</div>
		);
	}
}
