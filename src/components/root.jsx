/* eslint-env es6*/
import React from 'react'
import { StyleRoot } from 'radium'

import { ChooseRepositoryForm } from './choose-repo.jsx'
import { Header } from './header.jsx'

const ContributorDisplay = <div />

const Main = React.createClass({
  getInitialState () {
    return {
      'displayContributors': false,
      'repo': ''
    }
  },
  onUserInput (new_state_data) {
    const new_state = new_state_data
    for (const key of Object.keys(this.state)) {
      if (!new_state.hasOwnProperty(key)) {
        new_state[key] = this.state[key]
      }
    }
    this.setState(new_state)
  },
  render () {
    let content
    if (this.state.displayContributors) {
      content = <ContributorDisplay repo={this.state.repo} />
    } else {
      content = <ChooseRepositoryForm
        repo={this.state.repo}
        onUserInput={this.onUserInput} />
    }
    return <StyleRoot>
      <Header
        repo={this.state.repo}/>
      {content}
    </StyleRoot>
  }
})

export { Main }
