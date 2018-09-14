import React from 'react'

import Layout from 'components/Layout'
import TournamentContent from 'components/TournamentContent'
import PropTypes from 'prop-types'
import '../styles/styles.scss'

class TournamentPage extends React.Component {
  static getInitialProps ({ query: { nid } }) {
    return { nid: nid }
  }

  render () {
    const { nid } = this.props
    return (
      <Layout name='news-single-page has-bg-star'>
        <section className='section'>
          <div className='container'>
            <TournamentContent nid={nid} />
          </div>
        </section>
      </Layout>
    )
  }
}

TournamentPage.propTypes = {
  nid: PropTypes.string
}

export default TournamentPage
