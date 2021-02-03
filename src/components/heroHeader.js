import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
            }
          }
        }
      }
    `}
    render={data => (
      <div className="hero-header">
        <div className="desc">
          <div className="headline">{data.site.siteMetadata.home.title}</div>
          <div 
            className="primary-content" 
            dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.home.description}}
          />
          <Link to='/contact' className="button -primary">Get in touch &rarr;</Link>
        </div>
        <div className="avatar">
          <img className="round-image" src="/assets/logo.jpg" />
        </div>
      </div>
    )}
  />
)