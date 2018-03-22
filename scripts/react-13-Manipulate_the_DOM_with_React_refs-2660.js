class Tilt extends React.Component {
  componentDidMount() {
    console.log(this.rootNode)
    VanillaTilt.init(this.rootNode, {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': .5
    })
  }
  render(){
    return (
      <div ref={node => (this.rootNode = node)}
      className='tilt-root'>
      <div className='tilt-child'>
      <div {...this.props}/>
      </div>
      </div>
    )
  }
}

const el = (
  <div className='totally-centered'>
  <Tilt>
  <div className='totally-centered'>
  vanilla-tilt.js
  </div>
  </Tilt>
  </div>
)

ReactDOM.render(
  el,
  document.querySelector('#root')
)
