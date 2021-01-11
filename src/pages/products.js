import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styles from "../components/products.module.css"
import Image from "gatsby-image"
import { Link } from "gatsby"

const ComponentName = ({ data }) => {
  const { nodes: products } = data.allContentfulProduct
  return (
    <Layout>
      <section className={styles.page}>
        <h1>Hello from profucts</h1>
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <Image fluid={product.image.fluid} alt={product.title} />
              <h3>
                {product.title} <span>${product.price}</span>
              </h3>
              <Link to={`/products/${product.slug}`}>more details</Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        id
        title
        price
        slug
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default ComponentName
