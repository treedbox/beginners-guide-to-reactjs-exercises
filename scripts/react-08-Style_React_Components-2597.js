const Box = ({style, size, className = '', ...rest}) => {
  const sizeClassName = size ? `box--${size}` : ''
  return <div
  className={`container another-class ${className} ${sizeClassName}`.trim()}
  style={{paddingLeft: 20, ...style}}
  {...rest}
  />
},
el = (
  <div>
  <Box
  size='small'
  style={{backgroundColor: '#fd0'}}>Small Box</Box>
  </div>
)
ReactDOM.render(el, document.querySelector('#root'))

/*
properties in camelCase as the JS style.backgroundColor

const el = (
<div style={{paddingLeft: '20px'}}>box</div>
)
ReactDOM.render(el, document.querySelector('#root'))
//:<div style="padding-left: 20px;">box</div>


same as pure number
const el = (
<div style={{paddingLeft: 20}}>box</div>
)
ReactDOM.render(el, document.querySelector('#root'))
//:<div style="padding-left: 20px;">box</div>


spread operator
//can't be class instead className
const className = 'container another-class',
props = {
className,
style: {
paddingLeft: 20,
border: 1,
borderStyle: 'dotted'
}
},
el = (
<div {...props}>box</div>
)
ReactDOM.render(el, document.querySelector('#root'))
//:<div class="container another-class" style="padding-left: 20px; border: 1px dotted;">box</div>


const Box = props => <div
className='container another-class'
style={{paddingLeft: 20}}
{...props}
/>,
el = (
<div>
<Box style={{backgroundColor: '#fd0'}}>Small Box</Box>
</div>
)
ReactDOM.render(el, document.querySelector('#root'))
//:<div class="container another-class" style="background-color: rgb(255, 221, 0);">Small Box</div>
we lost the paddingLeft

//pass an object that receive style and spread ...style into style: property
const Box = ({style, ...rest}) => <div
className='container another-class'
style={{paddingLeft: 20, ...style}}
{...rest}
/>,
el = (
<div>
<Box style={{backgroundColor: '#fd0'}}>Small Box</Box>
</div>
)
ReactDOM.render(el, document.querySelector('#root'))
//now its fine, we have backgroundColor and paddingLeft


//class
const Box = ({style, className = '', ...rest}) => <div
className={`container another-class ${className}`}
style={{paddingLeft: 20, ...style}}
{...rest}
/>,
el = (
<div>
<Box style={{backgroundColor: '#fd0'}}>Small Box</Box>
</div>
)
ReactDOM.render(el, document.querySelector('#root'))
//:<div class="container another-class " style="padding-left: 20px; background-color: rgb(255, 221, 0);">Small Box</div>

//to avoid this empty space class="container another-class ", use trim()
const Box = ({style, className = '', ...rest}) => <div
className={`container another-class ${className}`.trim()}
style={{paddingLeft: 20, ...style}}
{...rest}
/>,
el = (
<div>
<Box style={{backgroundColor: '#fd0'}}>Small Box</Box>
</div>
)
ReactDOM.render(el, document.querySelector('#root'))
//:<div class="container another-class" style="padding-left: 20px; background-color: rgb(255, 221, 0);">Small Box</div>


//custom class, pass size string ('small', 'medium')
const Box = ({style, size, className = '', ...rest}) => {
  const sizeClassName = size ? `box--${size}` : ''
  return <div
  className={`container another-class ${className} ${sizeClassName}`.trim()}
  style={{paddingLeft: 20, ...style}}
  {...rest}
  />
},
el = (
  <div>
  <Box
  size='small'
  style={{backgroundColor: '#fd0'}}>Small Box</Box>
  </div>
)
ReactDOM.render(el, document.querySelector('#root'))
//;<div class="container another-class  box--small" style="padding-left: 20px; background-color: rgb(255, 221, 0);">Small Box</div>
*/
