import React from 'react'
import './styles.scss'

const HomeInfo = () => (
  <div className='ga-home-info'>
    <div className='columns is-variable is-8 is-centered'>
      <div className='column is-one-quarter'>
        <h3 className='title has-text-weight-bold'>Nouvelle édition</h3>
        <p className='content'>
            La Gamers Assembly 2018 est de retour du 31 mars au 2 avril 2018 au Parc des Expositions de Poitiers !
        </p>
      </div>
      <div className='column is-one-quarter'>
        <h3 className='title has-text-weight-bold'>Inscriptions</h3>
        <p className='content'>
            Les inscriptions pour la Gamers Assembly 2018 ouvriront le <b>22 décembre 2017 à 20h</b>
        </p>
      </div>
      <div className='column is-one-quarter'>
        <h3 className='title has-text-weight-bold'>Réseaux sociaux</h3>
        <p className='content'>
            Rejoignez-nous !<br />
            Twitter : <a href=''>@GamersAssembly</a><br />
            Facebook : <a href=''>Gamers Assembly</a>
        </p>
      </div>
    </div>
  </div>
)

export default HomeInfo
