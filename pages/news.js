import React from 'react'
import {withReduxSaga} from 'configureStore'

import Layout from 'components/Layout'

class NewsPage extends React.Component {
  render () {
    return (
      <Layout name='news-page'>
        <div>
          <h1 className='title'>Actualités</h1>
          <p className='content'>
          Ici les news
        </p>
        </div>
      </Layout>
    )
  }
}

export default withReduxSaga(NewsPage)
