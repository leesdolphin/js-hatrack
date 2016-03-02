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
    let isFirstSubBar = true
    SUB_BAR_LOCATIONS.forEach((menuType) => {
      const menuItems = this.props.items[menuType]
      if (menuItems) {
        subbars.push(
          <NavSubBar
            isFirstSubBar={isFirstSubBar}
            items={menuItems}
            type={menuType}
            key={menuType} />
        )
        isFirstSubBar = false
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
    isFirstSubBar: React.PropTypes.bool,
    type: React.PropTypes.string
  },
  render () {
    const navitems = []
    let firstItem = this.props.isFirstSubBar
    this.props.items.forEach((navitem_data, idx) => {
      navitems.push(<NavBarItem {...navitem_data} isFirstItem={firstItem} key={idx} />)
      firstItem = false
    })
    const barStyles = [
      styles.subBar.base,
      styles.subBar.type[this.props.type]
    ]
    return (
      <div style={barStyles}>{navitems}</div>)
  }
}))

const NavBarItem = Radium(React.createClass({
  propTypes: {
    content: React.PropTypes.node,
    disabled: React.PropTypes.bool,
    isFirstItem: React.PropTypes.bool,
    link: React.PropTypes.string
  },
  render: function () {
    const actionStyle = [
      styles.action.base,
      styles.action.disabled[this.props.disabled]
    ]
    const itemStyle = [
      styles.item.base,
      styles.item.firstItem[this.props.isFirstItem]
    ]
    let itemContent
    if (this.props.link) {
      itemContent = (
        <a href={this.props.link} style={actionStyle}>
          {this.props.content}
        </a>
      )
    } else {
      itemContent = (
        <button disabled={this.props.disabled} style={actionStyle}>
          {this.props.content}
        </button>
      )
    }
    return (
      <div style={itemStyle}>
        {itemContent}
      </div>
    )
  }
}))

const styles = {
  iconBar: {
    display: 'block',
    borderTop: '1px solid #eee',
    borderBottom: '1px solid #eee',
    marginBottom: '2rem'
  },
  subBar: {
    base: {
      marginBottom: 0,
      [media.phone]: {
        borderRight: '1px solid #eee'
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
  },
  item: {
    base: {
      borderTop: '1px solid #eee',
      margin: 0,
      padding: 0,
      display: 'block',
      [media.phone]: {
        borderTop: '0px',
        borderLeft: '1px solid #eee',
        display: 'inline-block'
      }
    },
    firstItem: {
      true: {
        borderTop: '0px'
      }
    }
  },
  action: {
    base: {
      display: 'inline-block',
      padding: '1rem',
      margin: '0',
      borderRadius: '0',
      borderWidth: '0',
      height: 'auto',
      width: '100%',
      color: '#555',
      cursor: 'pointer',
      textDecoration: 'none',
      textAlign: 'center',
      fontSize: '1.1rem',
      fontWeight: '600',
      lineHeight: '1',
      letterSpacing: '.1rem',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      backgroundColor: 'transparent',
      boxSizing: 'border-box'
    },
    disabled: {
      true: {
        color: '#999',
        cursor: 'inherit'
      }
    }
  }
}

export { NavBar }
