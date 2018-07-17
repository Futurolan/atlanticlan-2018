import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import './styles.scss'
import NewsCard from 'components/NewsCard'
import PropTypes from 'prop-types'

function NewsList ({
  data: { loading, error, nodeQuery }, loadMoreNews
}) {
  if (error) {
    return <div className='ga-news-list has-bg-star'>
      <section className='section'>
        <div className='container'>
          <div className='notification is-danger'>Une erreur est survenue pendant le chargemet des actualités !!!</div>
        </div>
      </section>
    </div>
  }

  if (nodeQuery && nodeQuery.entities && nodeQuery.entities.length > 0) {
    return <div className='ga-news-list'>
      <div className='columns is-multiline is-6  is-variable'>
        {nodeQuery.entities.map((news, index) => (
          <div className='column is-one-third' key={news.nid}>
            <NewsCard
              nid={news.nid}
              created={news.created}
              title={news.title}
              imgMobileUrl={news.image.mobile.url}
              imgDesktopUrl={news.image.desktop.url}
              imgWidescreenUrl={news.image.widescreen.url}
              imgFullhdUrl={news.image.fullhd.url}
            />

          </div>
        ))}
      </div>
      <div className='has-text-centered'>
        <button className='v-button button is-primary' onClick={() => loadMoreNews()}>
          Charger plus d'actualités
        </button>
      </div>
    </div>
  }
  return <div className='ga-news-list has-bg-star'>
    <section className='section'>
      <div className='container'>
        <div className='notification'>Chargement des actualités en cours</div>
      </div>
    </section>
  </div>
}

export const news = gql`
query post($skip:Int!){
  nodeQuery(
  filter:{
    conditions:[
      {field:"field_news_editions",value:["${process.env.EDITION_ID}"]},
      {field:"type",value:["news"],operator:EQUAL},
      {field:"status",value:["1"]}
    ]},
  sort:[{field:"created",direction:DESC}],
  offset: $skip,
  limit:12) {
    entities {
      ... on NodeNews{
        nid,
        created,
        title,
        image:fieldNewsImage{
          mobile:derivative(style:CROP_2_1_720X360){
            url
          }
          desktop:derivative(style:CROP_2_1_288X144){
            url
          }
          widescreen:derivative(style:CROP_2_1_352X176){
            url
          }
          fullhd:derivative(style:CROP_2_1_416X208){
            url
          }
        }
      }
    }
  }
}
`

NewsList.propTypes = {
  data: PropTypes.object,
  loadMoreNews: PropTypes.func
}

export const allNewsQueryVars = {
  skip: 0
}

export default graphql(news, {
  options: {
    variables: allNewsQueryVars
  },
  props: ({ data }) => {
    return ({
      data,
      loadMoreNews: () => {
        return data.fetchMore({
          variables: {
            skip: data.nodeQuery.entities.length
          },
          updateQuery: (previousResult, { fetchMoreResult }) => {
            if (!fetchMoreResult) {
              return previousResult
            }

            return Object.assign({}, previousResult, {nodeQuery: {entities: [...previousResult.nodeQuery.entities, ...fetchMoreResult.nodeQuery.entities], __typename: 'EntityQueryResult'}})
          }
        })
      }
    })
  }
})(NewsList)
