// el = React.createElement('h1', {
//   className: 'container',
//   children: ['Hello World', 'Goodbye World']
// })

const rootEl = document.querySelector('#root'),
content = ['Google', 'Facebook'], //use with interpolation {content}
className = ['container otherclass'],
//not allowed withou babel
// el = <h1 className={className + 'test'}>{(() => content)()}</h1>
//create an external object propst to fill element
props = {
  className: 'container',
  children: ['Google','Facebook']
},
//spread operator to spread content
el = <h1 className='myclass1' {...props} className='myclass2'/>
//container otherclasstest
ReactDOM.render(el, rootEl)

console.log(`el:`, el)
/*
interpolation
//allow exit JSX and enter JS, and close JS and entener JSX
  //any JS that you want can be used
content = ['Google', 'Facebook'], //use with interpolation {content}
el = <h1 className="container">{content}</h1>
//render:
GoogleFacebook
//el object contains 2 childs:
props:
  children:(2) ["Google", "Facebook"]
  className:"container"

function
//Anonymous function auto executable
el = <h1 className="container">{(() => content)()}</h1>

//using external variables
content = ['Google', 'Facebook'], //use with interpolation {content}
className = 'container',
//not allowed withou babel
el = <h1 className={className}>{(() => content)()}</h1>

content = ['Google', 'Facebook'], //use with interpolation {content}
className = ['container otherclass'],
//not allowed withou babel
el = <h1 className={className + 'test'}>{(() => content)()}</h1>
//container otherclasstest

spread operator-----
props = {
  className: 'container',
  children: ['Google','Facebook']
},
//spread operator to spread content
el = <h1 {...props}/>

//spread override properties
el = <h1 className='myclass' {...props}/>
//render:
  <h1 class="container">GoogleFacebook</h1>
//but if i make ir after spread
el = <h1 {...props} className='myclass'/>
//className from props will be replaced render:
<div id="root"><h1 class="myclass">GoogleFacebook</h1></div>

//you can declare as many times yu want, its not cause error
el = <h1 className='myclass1' {...props} className='myclass2'/>

//children also override
el = <h1 {...props}>text2</h1>
//render:
<h1 class="container">text2</h1>





//lines will not make an array:
el = <h1 className="container">Hello World
Goodbye World
</h1>

props:
  children: "Hello World Goodbye World"
  className: "container"
*/

/*
ERROR
corresponding JSX closing tag for <h1>
make sure de end of the tag is the same
<h1 className="container">Hello World</div>
change to
<h1 className="container">Hello World</h1>

Warning: Invalid DOM property `class`. Did you mean `className`?
<h1 class="container">Hello World</h1>
change to
<h1 className="container">Hello World</h1>

//comments inside de JSX is not allowed
el = <h1 className="container">Hello World //first child




*/
