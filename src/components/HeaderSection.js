import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  {
    contentfulHero {
      heroImage {
        description
        filename
        publicUrl
      }
    }
  }
`
const HeaderSection = () => {
    const { contentfulHero: { heroImage: { publicUrl } } } = useStaticQuery(query)

    return (
        <section style={{ backgroundImage: `url(${publicUrl})` }} className="header-section">
            <Header />
            <Hero />
        </section>
    )
}

export default HeaderSection;