import React from 'react'

var ChooseRepositoryForm = React.createClass({
  render: function () {
    return (
      <div>
        <RepositoryNameField repo={this.props.repo} />
      </div>

    )
  }
})

var RepositoryNameField = React.createClass({
  handleChange: function() {
    this.props.onUserInput(
      this.refs.filterTextInput.value,
      this.refs.inStockOnlyInput.checked
    );
  },
  render: function () {
    return (
      <div className='row'>
        <div className='twelve columns'>
          <label htmlFor='repo'>Repository</label>
          <input className='u-full-width'
            name='repo'
            defaultValue='LABHR/octohatrack'
            value={this.props.repo}
            onChange={this.handleChange}
            type='text' />
        </div>
      </div>
    )
  }
})

export { ChooseRepositoryForm, RepositoryNameField }
