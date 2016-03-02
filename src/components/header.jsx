import React from 'react'
import Radium from 'radium'
import { NavBar } from './navbar.jsx'
import GoLink from '../../node_modules/react-icons/lib/go/link'
import GoSearch from '../../node_modules/react-icons/lib/go/search'
import GoSignOut from '../../node_modules/react-icons/lib/go/sign-out'

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
    const iconProps = {
      width: '1.5em',
      height: '1.5em',
      style: {
        verticalAlign: `-${0.1875 * 1.5}em`
      }
    }
    const items = {
      left: [
        {
          disabled: true,
          content: <span><GoSearch {...iconProps} /> Build again</span>
        }
      ],
      right: [
        {
          link: '#',
          content: <span><GoLink {...iconProps} /> Permalink</span>
        },
        {
          octicon: 'sign-out',
          disabled: true,
          content: <span><GoSignOut {...iconProps} /> Sign Out</span>
        }
      ]
    }
    return (
      <NavBar items={items} />
    )
  }
})
const styles = {
}

export { Header, HeaderTitleBox, HeaderTitle, HeaderNavBar }
