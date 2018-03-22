class NameForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    console.log(`{target: e.target}:`, {target: e.target})
    console.log(`{target: e.target[0].value}:`, {target: e.target[0].value})
    console.log(`{target: e.target.elements.username.value}:`, {target: e.target.elements.username.value})
    console.log(`this.inputNode.value:`, this.inputNode.value)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <label>Name:
      <input name='username' ref={node => this.inputNode = node}/>
      </label>
      <button type='submit'>Submit
      </button>
      </form>
    )
  }
}
ReactDOM.render(
  <NameForm/>,
  document.querySelector('#root')
)
