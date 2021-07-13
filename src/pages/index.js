import React from "react"
import Layout from "../components/layout"
import * as styles from "../styles/home.module.css"
import Link from "gatsby-link"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Home ({data}) {
  const image = data
  console.log(image)
   return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Manchester.</p>
          <Link className={styles.btn} to="/projects">My Protfolio
            Projects</Link>
        </div>
        <GatsbyImage image={getImage(data.image)} alt="dfd"  />
        {/*<img src="banner.png" alt="site banner" style={{ maxWidth: "100%" }} />*/}
      </section>
    </Layout>

  )
}
//
export const query = graphql`
query Banner {
  image: file {
    childImageSharp {
      gatsbyImageData(
        placeholder: BLURRED
        transformOptions: {cropFocus: CENTER}
        #aspectRatio: 0.7
       )
    }
  }
}
`
