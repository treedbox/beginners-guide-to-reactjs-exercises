class MyFancyForm extends React.Component {
  static avaliableOptions = [
    'apple', 'grape', 'cherry', 'orange', 'pear', 'peach'
  ]
  state = {multiline: '', commaSeparated: '', multiSelect: []}
  handleCommaSeparatedChange = e => {
    const {value} = e.target,
    allVals = value.split(', ')
    .map(v => v.trim())
    .filter(Boolean)

    console.log(`handleCommaSeparatedChange`)
    console.log(`e.target.value:`, e.target.value)

    this.setState({
      commaSeparated: value,
      multiline: allVals.join('\n'),
      multiSelect: allVals.filter(v => MyFancyForm.avaliableOptions.includes(v))
    })
  }
  handleMultilineChange = e => {
    console.log(`handleMultilineChange`)
    const {value} = e.target,
    allVals = value.split('\n')
    .map(v => v.trim())
    .filter(Boolean)

    this.setState({
      multiline: value,
      commaSeparated: allVals.join(', '),
      multiSelect: allVals.filter(v => MyFancyForm.avaliableOptions.includes(v))
    })
  }
  handleMultiSelectChange = e => {
    console.log(`handleMultiSelectChange`)
    console.log(`{target: e.target}:`, {target: e.target})
    console.log(`{target: e.target.selectedOptions}:`, {target: e.target.selectedOptions})
    const allVals = Array.from(e.target.selectedOptions).map(o => o.value)

    this.setState({
      multiSelect: allVals,
      multiline: allVals.join('\n'),
      commaSeparated: allVals.join(', ')
    })
  }
  render = () => {
    const {commaSeparated, multiline, multiSelect} = this.state
    return <form>
    <div>
    <label>Comma Separated values:<br/>
    <input onChange={this.handleCommaSeparatedChange}
    value={commaSeparated}
    />
    </label>
    </div>
    <div>
    <label>Multiline values:<br/>
    <textarea rows={MyFancyForm.avaliableOptions.length}
    onChange={this.handleMultilineChange}
    value={multiline}
    />
    </label>
    </div>
    <div>
    <label>MultiSelect values:<br/>
    <br/>
    <select multiple size={MyFancyForm.avaliableOptions.length}
    onChange={this.handleMultiSelectChange}
    value={multiSelect}
    >
    {MyFancyForm.avaliableOptions.map(
      optionValue => (
        <option key={optionValue} value={optionValue}>
        {optionValue}
        </option>
      )
    )}
    </select>
    </label>
    </div>
    </form>
  }
}
ReactDOM.render(
  <MyFancyForm/>,
  document.querySelector('#root')
)
