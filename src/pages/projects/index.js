import React from "react"
import Layout from "../../components/layout"
import * as styles from "../../styles/projects.module.css"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Projects ({ data }) {
  //console.log(data.allMarkdownRemark.nodes)
  const projects = data.projects.nodes

  const contact = data.contact.siteMetadata.contact;


  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
        <div className={styles.projects}>
          {
            projects.map(project =>
                           <Link key={project.id} to={"/project/" +
                           project.frontmatter.slug}>
                             <GatsbyImage alt={project.frontmatter.title} image={getImage(project.frontmatter.thumb)} />
                             <h3>{project.frontmatter.title}</h3>
                             <p>{project.frontmatter.stack}</p>
                           </Link>
            )
          }
        </div>
        <p>Like what you see? Email me at {contact} for a quote!</p>
      </div>
    </Layout>
  )
}

export const query = graphql`query Projectspage {
  projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
   nodes {
      frontmatter {
        title
        stack
        slug
        thumb {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              transformOptions: {cropFocus: CENTER}
              #aspectRatio: 0.7
             )
          }
        }
      }
   }
  }
  contact : site {
    siteMetadata {
      contact      
    }
  }
}
`