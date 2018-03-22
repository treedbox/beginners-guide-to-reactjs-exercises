class StopWatch extends React.Component {
  state = {lapse: 0, running: false}

  handleRunClick = () => {
    this.setState(state => {
      if (state.running) {
        clearInterval(this.timer)
      } else {
        const startTime = Date.now() - this.state.lapse
        this.timer = setInterval(() => {
          this.setState({
            lapse: Date.now() - startTime
          }, () => console.log(this.state.lapse))
        })
      }
      return {running: !state.running}
    }
  )
}
handleClearClick = () => {
  clearInterval(this.timer)
  this.setState({lapse: 0, running: false})
}
//call this function when you remove the component to stop memory leak
componentWillUnmount() {
  clearInterval(this.timer)
}
//every component has a render method
render() {
  const {lapse, running} = this.state
  return (
    <div>
    <p>
    {lapse}ms
    </p>
    <button onClick={this.handleRunClick}>
    {running ? 'Stop' : 'Start'}
    </button>
    <button onClick={this.handleClearClick}>
    Clear
    </button>
    </div>
  )
}
}
const rootEl = document.querySelector('#root'),
el = <StopWatch/>,
removeClick = e => {
  /*
  //you can clearInterval here to stop memory leaks
  clearInterval(StopWatch.timer)

  or use clearInterval on componentWillUnmount inside the component
  componentWillUnmount() {
  clearInterval(this.timer)
}

*/
if (show) {
  ReactDOM.render(
    el,
    rootEl
  )
  show = false
  e.target.textContent = 'Unmount'
}else {
  ReactDOM.unmountComponentAtNode(rootEl)
  show = true
  e.target.textContent = 'Render'
}
},
btn = <button onClick={removeClick}>Render</button>

let show = true

ReactDOM.render(
  btn,
  document.querySelector('#action')
)
