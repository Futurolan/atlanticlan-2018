import React from 'react'

import ActiveLink from '../ActiveLink'

import './styles.scss'

class Footer extends React.Component {
  render () {
    return (
      <footer className='footer ga-footer has-background-dark has-text-white'>
        <div className='container'>
          <div className='content has-text-centered'>
            <ActiveLink className='has-text-white' label='Contacts' path='/contacts' />
            <span> - </span>
            <ActiveLink className='has-text-white' label='Mentions Légales ' path='/mentions-legales' />
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
