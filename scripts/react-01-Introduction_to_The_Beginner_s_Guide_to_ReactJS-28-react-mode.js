// const rootEl = document.querySelector('#root'),
// el = document.createElement('h1')
//
// el.textContent = 'Hello World'
// el.className = 'container'
//
// rootEl.appendChild(el)

const rootEl = document.querySelector('#root'),
/*
el = React.createElement('h1', {
  className: 'container'
},
'Hello World',
'Goodbye World'
)
*/

/*
render:
<h1 class="container">
"Hello World"
"Goodbye World"
</h1>
*/
//same as
el = React.createElement('h1', {
  className: 'container',
  children: ['Hello World', 'Goodbye World']
})
//React.createElement('element', {className: 'name', children: ['text', 'text2']})
//you can put children outside the object description:
//React.createElement('element', {className: 'name'},'text',text2)

ReactDOM.render(el, rootEl)

console.log(`el:`, el)
/*
{$$typeof: Symbol(react.element), type: "h1", key: null, ref: null, props: {…}, …}
$$typeof: Symbol(react.element)
key: null
props: children: Array(2)
0: "Hello World"
1: "Goodbye World"
length: 2
__proto__: Array(0)
className: "container"
__proto__: Object
ref: null
type: "h1"
_owner: null
_store: {validated: false}
_self: null
_source: null
__proto__: Object
*/
