import React from 'react'

const ChooseRepositoryForm = React.createClass({
  propTypes: {
    onUserInput: React.PropTypes.func.isRequired,
    repo: React.PropTypes.string
  },
  render: function () {
    return (
      <div>
        <RepositoryNameField
          repo={this.props.repo}
          onUserInput={this.props.onUserInput} />
        <RepositoryButton repo={this.props.repo} />
      </div>
    )
  }
})

var RepositoryButton = React.createClass({
  render: function () {
    return (
      <div className='row'>
        Nope {this.props.repo}
      </div>
    )
  }
})

const RepositoryNameField = React.createClass({
  propTypes: {
    onUserInput: React.PropTypes.func.isRequired,
    repo: React.PropTypes.string
  },
  handleChange: function () {
    this.props.onUserInput({
      repo: this.refs.repo.value
    })
  },
  render: function () {
    return (
      <div className='row'>
        <div className='twelve columns'>
          <label htmlFor='repo'>Repository</label>
          <input className='u-full-width'
            ref='repo'
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
