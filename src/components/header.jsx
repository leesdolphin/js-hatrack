import React from 'react'
import Radium from 'radium'
import { NavBar } from './navbar.jsx'

const Header = Radium(React.createClass({
  propTypes: {
    repo: React.PropTypes.string
  },
  render: function () {
    return (
      <div>
        <HeaderTitleBox repo={this.props.repo} />
        <HeaderNavBar repo={this.props.repo}/>
      </div>
    )
  }
}))

const HeaderTitleBox = Radium(React.createClass({
  propTypes: {
    repo: React.PropTypes.string
  },
  styles: {
    headerRoot: {
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      backgroundImage: 'url(\'../img/header.png\')',
      height: '300px'
    },
    titleContainer: {
      position: 'relative',
      width: '100%',
      maxWidth: '960px',
      margin: '0 auto',
      padding: '0 20px',
      boxSizing: 'border-box'
    }
  },
  render: function () {
    return (
      <div style={this.styles.headerRoot} >
        <div className='container' style={this.styles.titleContainer}>
          <HeaderTitle repo={this.props.repo} />
        </div>
      </div>
    )
  }
}))

const HeaderTitle = React.createClass({
  propTypes: {
    repo: React.PropTypes.string
  },
  style: {
    color: 'white',
    paddingTop: '100px',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  render: function () {
    if (this.props.repo) {
      return (
        <h1 style={this.style}>
          Let's build a hat rack for{' '}
          <a href='https://github.com/{this.props.repo}'>{this.props.repo}</a>
        </h1>
      )
    } else {
      return <h1 style={this.style}>Let's build a hat rack</h1>
    }
  }
})

const HeaderNavBar = React.createClass({
  propTypes: {
    repo: React.PropTypes.string
  },
  render: function () {
    const items = {
      left: [
        {
          octicon: 'search',
          disabled: true,
          content: 'Build again'
        }
      ],
      right: [
        {
          octicon: 'link',
          disabled: false,
          content: 'Permalink',
          link: '#'
        },
        {
          octicon: 'sign-out',
          disabled: true,
          content: 'Sign out'
        }
      ]
    }
    return (
      <NavBar items={items} />
    )
  }
})
// var x = (<div className='slim-icon-bar'>
//   <div className='container'>
//     <ul className='left-menu'>
//       <NavMenuItem octicon='search' disabled>
//         Build again
//       </NavMenuItem>
//     </ul>
//     <ul className='right-menu'>
//       <NavMenuItem octicon='link'>
//         Permalink
//       </NavMenuItem>
//       <NavMenuItem octicon='sign-out' disabled>
//         Sign out
//       </NavMenuItem>
//     </ul>
//   </div>
// </div>)

module.exports = { Header, HeaderTitleBox, HeaderTitle, HeaderNavBar }
