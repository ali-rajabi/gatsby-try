import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  {
    site {
      info: siteMetadata {
        author
        data
        description
        title
        person {
          age
          name
        }
      }
    }
  }
`

const Header = () => {
  const data = useStaticQuery(getData)
  const {
    title,
    person: { name },
  } = data.site.info
  return (
    <div>
      <h2>title : {title}</h2>
      <h2>name : {name}</h2>
    </div>
  )
}

export default Header
