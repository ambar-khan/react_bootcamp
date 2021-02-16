class Hello extends React.Component {
  render() {
    let bangs = "!".repeat(this.props.bangs)
    return (
      <div>
        Hi {this.props.to} from {this.props.from}{bangs}
      </div>
    );
  }
}