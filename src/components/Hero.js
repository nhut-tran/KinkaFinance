import React from "react";
import { Link, graphql, useStaticQuery } from 'gatsby'

const query = graphql`
  {
    contentfulHero {
      button
      title
      description
    }
  }
`

const Hero = () => {

    const { contentfulHero: { title, button, description } } = useStaticQuery(query);

    return (
        <div className="hero">
            <div className="hero-text">
                <h1 className="heading-1-light">{title}</h1>
                <p>{description}</p>
                <Link className="hero_button" to="/" />
                <Link className="button-header" to="/">{button}</Link>
            </div>

        </div>
    )
}

export default Hero;