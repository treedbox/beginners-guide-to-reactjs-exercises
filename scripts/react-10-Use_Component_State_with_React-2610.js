class StopWatch extends React.Component {
  state = {lapse: 0, running: false}

  handlerRunClick = () => {
    this.setState(state => {
      if (state.running) {
        clearInterval(this.timer)
      } else {
        const startTime = Date.now() - this.state.lapse
        this.timer = setInterval(() => {
          this.setState({
            lapse: Date.now() - startTime
          })
        })
      }
      return {running: !state.running}
    }
  )
}
handlerCleaarClick = () => {
  clearInterval(this.timer)
  this.setState({lapse: 0, running: false})
}
//every component has a render method
render(){
  const {lapse, running} = this.state
  return (
    <div>
    <p>
    {lapse}ms
    </p>
    <button onClick={this.handlerRunClick}>
    {running ? 'Stop' : 'Start'}
    </button>
    <button onClick={this.handlerCleaarClick}>
    Clear
    </button>
    </div>
  )
}
}

const el = <StopWatch/>
ReactDOM.render(
  el,
  document.querySelector('#root')
)
