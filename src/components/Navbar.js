import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

export default function Navbar () {

  const data = useStaticQuery(graphql`
query site {
  site {
    id
    siteMetadata {
      title
      description
      copyright
    }
  }
}`)
  const { title } = data.site.siteMetadata

  return (
    <nav>
      <h1>{title}</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Portfolio Projects</Link>
      </div>
    </nav>
  )
}