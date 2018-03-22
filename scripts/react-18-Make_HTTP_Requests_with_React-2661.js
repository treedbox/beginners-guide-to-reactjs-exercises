const rootEl = document.querySelector('#root')

class UserCompany extends React.Component {
  state = {company: undefined, loaded: false}
  componentDidCatch(error, info) {
  // Display fallback UI
  this.setState({ hasError: true });
  // You can also log the error to an error reporting service
  logErrorToMyService(error, info);
}

  componentDidMount() {
    axios({
      url: 'https://api.github.com/graphql',
      method: 'post',
      data: {
        query: `{
          user(login: "${this.props.username}"){
            company
          }
        }`
      },
      headers: {
        Authorization: `bearer 88d4147bfa6699aeea94b7081afaf02c666d70e4`
      }
    }).then(response => {
      console.log(`response.data.data.user:`,response.data.data.user)
      console.log(`response:`,response)
      this.setState({
        loaded: true,
        company: response.data.data.user.company
      })
    }, error => {
      this.setState({
        error,
        loaded: true
      })
    })
  }

  render() {
    return this.state.error ? this.state.loaded
    ? this.state.company || 'Unknown'
    : '...'
  }
}

const username = 'kentcdodds',
el = (
  <div>
  <div>
  {`@${username} works at `}
    <UserCompany username={username}/>
  </div>
</div>
)

ReactDOM.render(
  el,
  rootEl
)

/*
  github > settings > Developer Settings > Personal Access Tokens > Generate new Token:
  Token description: user Company
  check: user > read:user
  copy Token

  Kent works at @paypal
*/
