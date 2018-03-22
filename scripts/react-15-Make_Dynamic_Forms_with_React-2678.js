class NameForm extends React.Component {
  state = {error: this.props.getErrorMessage('')}
  handleChange = e => {
    const {value} = e.target
    this.setState({
      error: this.props.getErrorMessage(value)
    })
  }
  handleSubmit = e => {
    e.preventDefault()
    const value = this.inputNode.value,
    error = this.props.getErrorMessage(
      value
    )
    if (error) {
      alert(`Error: ${error}`)
    }else {
      alert(`${value}`)
    }
  }
  render() {
    const {error} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
      <label>Name:
      <input name='username' ref={node => this.inputNode = node}
      onChange={this.handleChange}
      />
      </label>
      <br/>
      {error ? <div style={{
        backgroundColor: '#f00',
        color: '#fff',
        padding: 5
      }}>{error}</div> : null}
      <button type='submit'
      disabled={Boolean(error)}>
      Submit
      </button>
      </form>
    )
  }
}
ReactDOM.render(
  <NameForm
  getErrorMessage={value =>{
    if (value.length < 3) {
      return `Value must be at least 3 characters`
    }
    if (!value.includes('s')) {
      return `Value need had "s"`
    }
    return null
  }}
  />,
  document.querySelector('#root')
)
