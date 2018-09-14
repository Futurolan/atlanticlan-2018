import React from 'react'
import Layout from 'components/Layout'
import NewsList from 'components/NewsList'
import Meta from 'components/Meta'
import '../styles/styles.scss'
import config from '../config/config'
class NewsPage extends React.Component {
  render () {
    return (
      <Layout name='news-page has-bg-star'>
        <div className='section'>
          <Meta title={config.news.title} description={config.news.description} />
          <div className='container'>
            <h1 className='title title-line has-text-centered'><span>Actualités</span></h1>
            <NewsList />
          </div>
        </div>
      </Layout>
    )
  }
}

export default NewsPage
