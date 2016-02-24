import React from 'react'

import { ChooseRepositoryForm } from './choose-repo.jsx'

var ContributorDisplay = <div />

var Main = React.createClass({
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
      return <ChooseRepositoryForm repo={this.state.repo} />
    }
  }
})

export { Main }
