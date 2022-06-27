import React from "react";
import { Link, graphql, useStaticQuery } from 'gatsby';
import "../assets/css/hero.css"

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
        <h1 className="heading-1-light hero-title">{title}</h1>
        <p className="hero-text-description">{description}</p>
        <Link className="hero_button" to="/" />
        <Link className="button button-hero" to="/">{button}</Link>
      </div>

    </div>
  )
}

export default Hero;