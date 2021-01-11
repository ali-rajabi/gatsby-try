import React from "react"
import Layout from "../components/Layout"
import styles from "../components/blog.module.css"

const blog = () => {
  return (
    <Layout>
      <h1>this is blog</h1>
      <p className={styles.text}>
        Lorem ipsum dolo r, sit amet consectetur adipisicing elit. Voluptate
        maxime praesentium quaerat soluta facere ducimus saepe id assumenda quos
        quo ipsa fuga, obcaecati velit deserunt suscipit veritatis. Libero, est
        quisquam?
      </p>
    </Layout>
  )
}

export default blog
