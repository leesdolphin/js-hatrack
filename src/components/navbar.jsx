import React from 'react'
import Radium from 'radium'
import { media } from '../styling.js'

const SUB_BAR_LOCATIONS = ['left', 'center', 'right']

const NavBar = Radium(React.createClass({

  propTypes: {
    items: React.PropTypes.shape({
      left: React.PropTypes.array,
      center: React.PropTypes.array,
      right: React.PropTypes.array
    })
  },
  render () {
    const subbars = []
    let hasPrev = false
    SUB_BAR_LOCATIONS.forEach((menuType) => {
      const menuItems = this.props.items[menuType]
      if (menuItems) {
        subbars.push(
          <NavSubBar hasPrev={hasPrev} items={menuItems} type={menuType} key={menuType} />
        )
        hasPrev = true
      }
    })
    if (subbars) {
      return (
        <div style={styles.iconBar}>
          <div className='container'>
            {subbars}
          </div>
        </div>
      )
    } else {
      return ''
    }
    // <ul className='left-menu'>
    //   <NavBarItem octicon='search' disabled>
    //     Build again
    //   </NavBarItem>
    // </ul>
    // <ul className='right-menu'>
    //   <NavBarItem octicon='link'>
    //     Permalink
    //   </NavBarItem>
    //   <NavBarItem octicon='sign-out' disabled>
    //     Sign out
    //   </NavBarItem>
    // </ul>
  }
}))

const NavSubBar = Radium(React.createClass({
  propTypes: {
    items: React.PropTypes.array,
    hasPrev: React.PropTypes.bool,
    type: React.PropTypes.string
  },
  render () {
    const navitems = []
    this.props.items.forEach((navitem_data, idx) => {
      navitems.push(<NavBarItem {...navitem_data} key={idx} />)
    })
    const barStyles = [
      styles.subBar.base,
      styles.subBar.type[this.props.type]
    ]
    return (
      <div style={barStyles}>{navitems}</div>)
  }
}))

const NavBarItem = React.createClass({
  propTypes: {
    content: React.PropTypes.node,
    disabled: React.PropTypes.bool,
    octicon: React.PropTypes.string,
    link: React.PropTypes.string
  },
  render: function () {
    let octicon = ''
    if (this.props.octicon) {
      const octiconClass = `octicon octicon-${this.props.octicon}`
      octicon = (
        <span className={octiconClass}></span>
      )
    }
    return (
      <li>
        <button disabled={this.props.disabled}>
          {octicon}
          {this.props.content}
        </button>
      </li>
    )
  }
})

const styles = {
  iconBar: {
    display: 'block',
    borderTop: '1px solid #eee',
    borderBottom: '1px solid #eee',
    marginBottom: '25px'
  },
  subBar: {
    base: {
      listStyle: 'none',
      marginBottom: 0
    },
    hasPrev: {
      true: {

      },
      false: {

      }
    },
    type: {
      left: {
        [media.phone]: { float: 'left' }
      },
      right: {
        [media.phone]: { float: 'right' }
      }
    }
  }
}

export { NavBar }
