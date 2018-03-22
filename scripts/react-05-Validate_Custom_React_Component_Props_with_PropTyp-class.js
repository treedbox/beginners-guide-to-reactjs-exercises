class SayHello extends React.Component {
  //with Package prop-types
  static propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired
  }
  render(){
    const {firstName, lastName} = this.props
    return (
      <div>
        Hello {firstName} {lastName}
      </div>
    )
  }
}


ReactDOM.render(
  <SayHello firstName={true} />,
  document.querySelector('#root')
)

/*
  prop-types validation is gone in production:
  react.production.min.js
  react-dom.production.min.js

  because it slow things down a bit for production
  but is good for development

  npm babel-plugin-transform-react-remove-prop-types
  remove unnecessary React propTypes from the production build



*/
