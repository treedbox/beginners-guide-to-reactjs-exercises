class App extends React.Component {
  static allItems = [
    {id: 'a', value: 'apple'},
    {id: 'o', value: 'orange'},
    {id: 'g', value: 'grape'},
    {id: 'p', value: 'pear'}
  ]

  render() {
    return (
      <div>
      {App.allItems.map(item => (
        <div key={item.id}>{item.value}</div>
      ))}
      </div>
    )
  }
}
ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)

/*
without key:
render() {
return (
<div>
{App.allItems.map(item => (
<div>{item.value}</div>
))}
</div>
)
}
Warning: Each child in an array or iterator should have a unique "key" prop.
add key to the element:
<div>{item.value}</div>
change to:
<div key={item.id}>{item.value}</div>


*/
