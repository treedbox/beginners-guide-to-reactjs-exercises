class App extends React.Component {
  static allItems = [
    {id: 'a', value: 'apple'},
    {id: 'o', value: 'orange'},
    {id: 'g', value: 'grape'},
    {id: 'p', value: 'pear'}
  ]
  state = {items: []}
  addItem = () => {
    this.setState(({items}) => ({
      items: [
        ...items,
        App.allItems.find(
          i => !items.includes(i)
        )
      ]
    }))
  }
  removeItem = item => {
    this.setState(({items}) => ({
      items: items.filter(i => i !== item)
    }))
  }
  handleChange = (item, v) => {
    console.log(`item:`, item)
    console.log(`v:`, v)
    this.setState(({items}) => ({
      items: items.map((e, i) => {
        if (e === item) {
          return {id: e.id, value: v}
        }
        return e
      }).sort((a, b) => {
        return a.value > b.value
      })
    })
  )

  }
  render() {
    const {items} = this.state
    return (
      <div>
      <button
      disabled={
        items.length >= App.allItems.length
      }
      onClick={this.addItem}
      > +
      </button>
      {items.map((e, i) => (
        <div key={e.id}>
        <button
        onClick={() => this.removeItem(e)}
        >
        -
        </button>
        {e.value} : <input onChange={el => this.handleChange(e, el.target.value)}
        />
        </div>
      ))}
      </div>
    )
  }
}
ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)
