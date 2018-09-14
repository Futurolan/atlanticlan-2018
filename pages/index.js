import React from 'react'

import Layout from 'components/Layout'
import Hero from 'components/Hero'
import HomeNewsList from 'components/HomeNewsList'
import HomeInfoBlocks from 'components/HomeInfo/index'
import Meta from 'components/Meta'
import config from '../config/config'
import '../styles/styles.scss'

class HomePage extends React.Component {
  render () {
    return (
      <Layout name='home-page'>
        <div>
          <Meta title='Accueil' />
          <Hero title={config.home.hero.title} subtitle={config.home.hero.subtitle} imgUrl={config.home.hero.background} />
          <HomeInfoBlocks />
          <HomeNewsList />
        </div>
      </Layout>
    )
  }
}

export default HomePage
