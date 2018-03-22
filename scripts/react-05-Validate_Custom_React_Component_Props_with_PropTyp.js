const SayHello = props => (
  <div>
    Hello {props.firstName} {props.lastName || 'unknown'}
  </div>
)
//with Package prop-types
SayHello.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
}

ReactDOM.render(
  <SayHello firstName={true} />,
  document.querySelector('#root')
)

/*
const SayHello = props => (
  <div>
  Hello {props.firstName} {props.lastName}
  </div>
),
PropTypes = {
  string(props, propName, componentName) {
    if (typeof props[propName] !== 'string') {
      return new Error(`Waited a string but you pass a ${typeof props[propName]} for ${propName} in ${componentName}`)
    }
  }
}

SayHello.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string
}

ReactDOM.render(
  <SayHello firstName={true} />,
  document.querySelector('#root')
)
Warning: Failed prop type: Waited a string but you pass a boolean for firstName in SayHello in SayHello
warning: Failed prop type: Waited a string but you pass a undefined for lastName in SayHello in SayHello

*/
