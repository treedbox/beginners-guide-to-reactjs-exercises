const SayHello = props => (
  <div>
  Hello {props.firstName} {props.lastName}
  </div>
),
PropTypes = {
  string(props, propName, componentName){
    if (typeof props[propName] !== 'string') {
      return new Error(`Should pass a string for ${propName} in ${componentName},
        but you pass a ${typeof props[propName]}.`)
    }
  }
}

SayHello.prototype = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
}

ReactDOM.render(
  <SayHello firstName={true}/>,
  document.querySelector('#root')
)

console.log(`SayHello({firstName: 'joni'}):`, SayHello({firstName: 'joni'}))
