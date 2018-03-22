class Counter extends React.Component {
  state = {count: 0}
  handleClick= () => this.setState(({count}) => ({
    count: count + 1
  }))
  render() {
    return (
      <button
      onClick={this.handleClick}
      >
      {this.state.count}
      </button>
    )
  }
}

const el = <Counter/>

ReactDOM.render(
  el,
  document.querySelector('#root')
)
