import React from 'react'

import Layout from 'components/Layout'
import NewsContent from 'components/NewsContent'
import PropTypes from 'prop-types'
import '../styles/styles.scss'

class NewsPage extends React.Component {
  static getInitialProps ({ query: { nid } }) {
    return { nid: nid }
  }

  render () {
    const { nid } = this.props
    return (
      <Layout name='news-single-page has-bg-star'>
        <section className='section'>
          <div className='container'>
            <NewsContent nid={nid} />
          </div>
        </section>
      </Layout>
    )
  }
}
NewsPage.propTypes = {
  nid: PropTypes.string
}

export default NewsPage
