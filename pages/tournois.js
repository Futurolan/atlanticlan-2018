import React from 'react'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import '../styles/styles.scss'

class TournoisPage extends React.Component {
  render () {
    return (
      <Layout name='tournois-page has-bg-star'>
        <div className='section'>
          <Meta title='Tournois' />
          <div className='container'>
            <h1 className='title'>Tournois</h1>
            //TODO la liste des tournois
          </div>
        </div>
      </Layout>
    )
  }
}

export default TournoisPage
