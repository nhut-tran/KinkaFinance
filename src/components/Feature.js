import React from "react";
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    contentfulIntroBlock {
      introductionText {
          id
          description
          title
      }
      introductionIcon {
        gatsbyImage(height: 97, width: 97, layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
`
const Feature = () => {
    const data = useStaticQuery(query);

    const image = getImage(data.contentfulIntroBlock.introductionIcon)
    return (
        <main className="feature">
            <h1 className="heading-1">High Quality Output, <br /> Awesome Service</h1>
            <div className="feature_boxes">
                {data.contentfulIntroBlock.introductionText.map((text) => {
                    return (

                        <div key={text.id} className="feature_box">
                            <GatsbyImage className="check_icon" image={image} alt="check" />
                            <h2>{text.title}</h2>
                            <p>{text.description}</p>
                        </div>

                    )
                })}
            </div>
        </main>
    )
}

export default Feature;