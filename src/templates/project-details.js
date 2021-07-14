import React from "react"
import Layout from "../components/layout"
import * as styles from "../styles/project-details.module.css"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function ProjectDetails ({ data }) {

  return (
    <Layout>
      <div className={styles.details}>
        <h2>{data.project.frontmatter.title}</h2>
        <h3>stack</h3>
        <div className={styles.featured}>
          <GatsbyImage alt={data.project.frontmatter.title}
                       image={getImage(data.project.frontmatter.featuredImg)} />
        </div>
        <div className={styles.html}
             dangerouslySetInnerHTML={{ __html: data.project.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
query projectDetail ($slug : String ) {
  project: markdownRemark(frontmatter: {slug: {eq: $slug}}) {
    html
    frontmatter {
      title
      featuredImg {
        childImageSharp {
        gatsbyImageData(
        placeholder: BLURRED
        transformOptions: {cropFocus: CENTER}        
       )
        }
      }
    }
  }
  }`