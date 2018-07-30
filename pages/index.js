import React from 'react'

import Layout from 'components/Layout'
import Hero from 'components/Hero'
import HomeNewsList from 'components/HomeNewsList'
import HomeInfoBlocks from 'components/HomeInfo'
import Meta from 'components/Meta'
import '../styles/styles.scss'

class HomePage extends React.Component {
  render () {
    return (
      <Layout name='home-page'>
        <div>
          <Meta title='Accueil' />
          <Hero title={'Atlantic LAN'} subtitle={'Edition 2018 '} imgUrl={'/static/img/bg-orange-area.jpg'} />
          <HomeInfoBlocks />
          <HomeNewsList />
        </div>
      </Layout>
    )
  }
}

export default HomePage
