import React from 'react'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import '../styles/styles.scss'
import config from '../config/config'

class RecrutementPage extends React.Component {
  render () {
    const formUrl = 'https://goo.gl/forms/84pHQfSp50RcuUel2'
    return (
      <Layout name='recrutement-page has-bg-star'>
        <div className='section'>
          <Meta title={config.recruit.title} description={config.recruit.description} />
          <div className='container has-text-centered'>
            <div className='content'>
              <p>
                <a className='button is-primary' target='_blank' href={formUrl}>Voir le formulaire dans un nouvel onglet</a>
              </p>
              <iframe frameBorder='0' height='1750' src={formUrl} width='100%'>Chargement en cours...</iframe>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default RecrutementPage
