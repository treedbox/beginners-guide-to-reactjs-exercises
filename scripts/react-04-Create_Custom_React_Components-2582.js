const rootEl = document.querySelector('#root'),
Message = props => <div>{props.children}</div>,
el = (
  <div className="container">
    {React.createElement(Message, {children: 'message 1'})}
    {Message({children: 'message 2'})}
    <Message children="message 3"/>
    <Message>message 4</Message>
    <Message>message 5
    <Message>message 6</Message>
    </Message>
  </div>
)
//<div class="container"><div>message 1</div><div>message 2</div><div>message 3</div><div>message 4</div><div>message 5<div>message 6</div></div></div>
ReactDOM.render(el, rootEl)
console.log(`el:`, el)

/*
props = {
  className: 'foo',
  children: ['Google', 'Facebook']
},
divText = <div {...props}/>,
el = (
  <div>
  {divText}
  {divText}
  </div>
)
//render:
<div id="root">
  <div>
    <div class="foo">GoogleFacebook</div>
    <div class="foo">GoogleFacebook</div>
  </div>
</div>



function
pass parameter
message = props => <div>{props.msg}</div>,
el = (
  <div className="container">
    {message({msg: 'message 1'})}
    {message({msg: 'message 2'})}
  </div>
)
//render:
<div class="container"><div>message 1</div><div>message 2</div></div>



ERROR:
react don't catch this error:
message = props => <div>{props.msg}<div/>,
change to:
  message = props => <div>{props.msg}</div>,

react will try to validate commented code:
babel.min.js:27 Uncaught SyntaxError: http://localhost/js/react/react-basics/scripts/react-03-Use_JSX_with_React-2576.js: Unexpected token (16:11)
  14 | /*
  15 | props = {
> 16 |   className: 'foo',
     |            ^
  17 |   children: ['Google', 'Facebook']
  18 | },
  19 | divText = <div {...props}/>,
    at r.l.raise (babel.min.js:27)
    at r.c.unexpected (babel.min.js:27)
    at r.c.expect (babel.min.js:27)
    at r.E.jsxParseExpressionContainer (babel.min.js:28)
    at r.E.jsxParseElementAt (babel.min.js:28)
    at r.E.jsxParseElement (babel.min.js:28)
    at r.parseExprAtom (babel.min.js:28)
    at r.m.parseExprSubscripts (babel.min.js:26)
    at r.m.parseMaybeUnary (babel.min.js:26)
    at r.m.parseExprOps (babel.min.js:26)

//
//with React.createElement JSX
message = props => <div>{props.msg}</div>,
el = (
  <div className="container">
    {React.createElement(message, {msg: 'message 1'})}
    {message({msg: 'message 2'})}
  </div>
)
//<div class="container"><div>message 1</div><div>message 2</div></div>




//capitalize your component to be rendered as JSX
Message = props => <div>{props.msg}</div>,
el = (
  <div className="container">
    {React.createElement(Message, {msg: 'message 1'})}
    {Message({msg: 'message 2'})}
    <Message msg="message 2"/>
  </div>
)
//<div class="container"><div>message 1</div><div>message 2</div><div>message 2</div></div>



//Parameter as children
Message = props => <div>{props.children}</div>,
el = (
  <div className="container">
    {React.createElement(Message, {children: 'message 1'})}
    {Message({children: 'message 2'})}
    <Message children="message 2"/>
  </div>
)
//<div class="container"><div>message 1</div><div>message 2</div><div>message 2</div></div>


//using MEssage as JSX with sintax pure as HTML
Message = props => <div>{props.children}</div>,
el = (
  <div className="container">
    {React.createElement(Message, {children: 'message 1'})}
    {Message({children: 'message 2'})}
    <Message children="message 3"/>
    <Message>message 4</Message>
  </div>
)
//<div class="container"><div>message 1</div><div>message 2</div><div>message 3</div><div>message 4</div></div>

//we can put a component inside another another/same component
Message = props => <div>{props.children}</div>,
el = (
  <div className="container">
    {React.createElement(Message, {children: 'message 1'})}
    {Message({children: 'message 2'})}
    <Message children="message 3"/>
    <Message>message 4</Message>
    <Message>message 5
    <Message>message 6</Message>
    </Message>
  </div>
)
//<div class="container"><div>message 1</div><div>message 2</div><div>message 3</div><div>message 4</div><div>message 5<div>message 6</div></div></div>
*/
