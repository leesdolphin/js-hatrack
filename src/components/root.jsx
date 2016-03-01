import React from 'react'

import { ChooseRepositoryForm } from './choose-repo.jsx'

var ContributorDisplay = <div />

var Main = React.createClass({
  onUserInput: function (changes) {
    this.state['repo'] = changes['repo']
  }
  getInitialState: function () {
    return {
      'displayContributors': false,
      'repo': ''
    }
  },
  render: function () {
    if (this.state.displayContributors) {
      return <ContributorDisplay repo={this.state.repo} />
    } else {
      return <ChooseRepositoryForm repo={this.state.repo} onUserInput={this.onUserInput} />
    }
  }
})

export { Main }
