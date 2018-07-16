import React from 'react'
import { graphql } from 'react-apollo'
import Link from 'next/link'
import gql from 'graphql-tag'
import './styles.scss'
import NewsCard from 'components/NewsCard'
import PropTypes from 'prop-types'

function HomeNewsList ({
  data: { loading, error, nodeQuery }
}) {
  if (error) return <div>Error Loading Post</div>

  if (nodeQuery && nodeQuery.entities && nodeQuery.entities.length) {
    return <div className='ga-home-news-list'>
      <div className='level'>
        <div className='level-left'>
          <div className='level-item'>
            <h2 className='title '>Nos actualités</h2>
          </div>
        </div>
        <div className='level-right'>
          <div className='level-item'>
            <Link href='/news' ><a className='button is-primary is-medium'>Voir plus</a></Link>

          </div>
        </div>
      </div>

      <div className='columns is-6 is-variable'>
        {nodeQuery.entities.map((news) => (
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
    </div>
  }
  return <div>Loading...</div>
}

export const news = gql`
{
  nodeQuery(filter:{
  conditions:[
    {field:"field_news_editions",value:["${process.env.EDITION_ID}"]},
    {field:"type",value:["news"],operator:EQUAL}
  ]},
  sort:[{field:"created",direction:DESC}],
  limit:3) {
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
HomeNewsList.propTypes = {
  data: PropTypes.object
}

export default graphql(news)(HomeNewsList)
