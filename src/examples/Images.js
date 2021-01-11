import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import img from "../images/animal2.jpg"
import Image from "gatsby-image"

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "animal1.jpg" }) {
      childImageSharp {
        fixed(width: 200, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "animal2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const Images = () => {
  const data = useStaticQuery(getImages)
  return (
    <section className="images">
      <article className="single-image">
        <h2>basic image</h2>
        <img src={img} width="100%" alt="dog" />
        <h3>content</h3>
      </article>
      <article className="single-image">
        <h2>fixed image / blur</h2>
        <Image fixed={data.fixed.childImageSharp.fixed} />
        <h3>content</h3>
      </article>
      <article className="single-image">
        <h2>fluid image / svg</h2>
        <Image fluid={data.fluid.childImageSharp.fluid} />
        <h3>content</h3>
      </article>
    </section>
  )
}

export default Images
