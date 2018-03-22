const state = {eventCount: 0, username: ''},
renderApp = el => ReactDOM.render(
  <App />,
  document.querySelector(el)
),
setState = newState => {
  Object.assign(state, newState)
  renderApp('#root')
},
increment = () => setState({ eventCount: state.eventCount + 1 }),
updateUSername = e => {
  console.log(`e:`, e)
  console.log(`e.nativeEvent:`, e.nativeEvent)
  setState({username: e.target.value})
},
App = () => (
  <div>
  <p>
  There have been {state.eventCount} events
  </p>
  <p>
  <button onClick={increment}>Click me
  </button>
  </p>
  <p>
  You Typed: {state.username}
  </p>
  <p>
  <input onChange={updateUSername}/>
  </p>
  </div>
)

setState({
  eventCount: 10,
  username: 'Treedbox'
})
renderApp('#root')


/*
React use a proxy to Synthesis the event: e
Proxy {dispatchConfig: {…}, _targetInst: FiberNode, isDefaultPrevented: ƒ, isPropagationStopped: ƒ, _dispatchListeners: ƒ, …}
[[Handler]]: Object
set: ƒ (target, prop, value)
__proto__: Object
[[Target]]: SyntheticEvent
[[IsRevoked]]: false


to get the native event use e.nativeEvent
//:InputEvent {isTrusted: true, data: "a", isComposing: false, inputType: "insertText", dataTransfer: null, …}
bubbles : true
cancelBubble : false
cancelable : false
composed : true
currentTarget : null
data : "a"
dataTransfer : null
defaultPrevented : false
detail : 0
eventPhase : 0
inputType : "insertText"
isComposing : false
isTrusted : true
path : (8) [input, p, div, div#root, body, html, document, Window]
returnValue : true
sourceCapabilities : null
srcElement : input
target : input
timeStamp : 4993
type : "input"
view : null
which : 0
__proto__ : InputEvent
*/
