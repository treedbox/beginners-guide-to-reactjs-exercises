const rootEl = document.querySelector('#root'),
Tick = () => {
  const time = new Date().toLocaleTimeString(),
  el = <div><input value={time} /><input value={time} /></div>

  ReactDOM.render(el, rootEl)
}
Tick()
setInterval(Tick, 1000)

/*
const rootEl = document.querySelector('#root'),
Tick = () => {
  const time = new Date().toLocaleTimeString(),
  el = <div>It is {time}</div>

  ReactDOM.render(el, rootEl)
}
Tick()
setInterval(Tick, 1000)

//update only children[1] instead of all the element div
  <div>It is 10:25:39 PM</div>


Examle:
const rootEl = document.querySelector('#root'),
Tick = () => {
  const time = new Date().toLocaleTimeString(),
  el = <input value={time} />

  ReactDOM.render(el, rootEl)
}
Tick()
setInterval(Tick, 1000)

if you focus on the input, the focus remains the same input


with two inputs:
const rootEl = document.querySelector('#root'),
Tick = () => {
  const time = new Date().toLocaleTimeString(),
  el = <div><input value={time} /><input value={time} /></div>

  ReactDOM.render(el, rootEl)
}
Tick()
setInterval(Tick, 1000)

the focus remains the same input


//if update the element div, you will loose the focus on any input
const rootEl = document.querySelector('#root'),
Tick = () => {
  const time = new Date().toLocaleTimeString(),
  el = `<div><input value="${time}" /><input value="${time}" /></div>`

  rootEl.innerHTML = el
}
Tick()
setInterval(Tick, 1000)


*/
