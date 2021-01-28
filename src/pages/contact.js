import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const ContactPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Contact — {site.siteMetadata.title}</title>
        <meta name="description" content={"Contact page of " + site.siteMetadata.description} />
      </Helmet>
      <div className="two-grids -contact">
        <div className="post-thumbnail" style={{marginBottom: 0}}>
          <h1 className="post-title">Drop me an email</h1>
          <p>daniele.orlando@gmail.com</p>
        </div>
        <div className="post-thumbnail-primary" style={{marginBottom: 0}}>
          <h1 className="post-title">Social &amp; more</h1>
          <p><a style={{color: `#FFF`}} href="https://twitter.com/DanOrlando22" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter}/></a>&nbsp;&nbsp;&nbsp;<a style={{color: `#FFF`}} href="https://github.com/danieleorlando" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub}/></a>&nbsp;&nbsp;&nbsp;<a style={{color: `#FFF`}} href="https://www.linkedin.com/in/daniele-orlando-2b491014" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin}/></a></p>
        </div>
      </div>
    </Layout>
  )
}
export default ContactPage
export const pageQuery = graphql`
  query ContactPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`