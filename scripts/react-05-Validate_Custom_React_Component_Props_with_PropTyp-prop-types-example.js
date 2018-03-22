const PropTypes = {
  string(props, propName, componentName) {
    if (typeof props[propName] !== 'string') {
      return new Error(`Waited a string but you pass a ${typeof props[propName]} for ${propName} in ${componentName}`)
    }
  }
}
