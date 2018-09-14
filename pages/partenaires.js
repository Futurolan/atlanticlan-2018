import React from 'react'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import PartnerList from 'components/PartnerList'
import '../styles/styles.scss'
import config from '../config/config'

class PartenairesPage extends React.Component {
  render () {
    return (
      <Layout name='partenaires-page has-bg-star'>
        <div className='section'>
          <Meta title={config.partners.title} description={config.partners.description} />
          <div className='container has-text-centered'>
            <h1 className='title title-line'><span>Partenaires</span></h1>
            <PartnerList />
          </div>
        </div>
      </Layout>
    )
  }
}

export default PartenairesPage
