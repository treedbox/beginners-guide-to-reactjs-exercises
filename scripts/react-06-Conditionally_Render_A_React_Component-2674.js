const Message = ({message}) => React.createElement(
  'div',
  null,
  message ? message : 'No message'
)

ReactDOM.render(
  <Message message={null} />,
  document.querySelector('#root')
)

/*
const Message = ({message}) => <div>{message ? message : 'No message'}</div>

ReactDOM.render(
  <Message message={null} />,
  document.querySelector('#root')
)
No message

//same as-------
const Message = ({message}) => React.createElement(
  'div',
  null,
  message ? message : 'No message'
)

ReactDOM.render(
  <Message message={null} />,
  document.querySelector('#root')
)

No message

*/
