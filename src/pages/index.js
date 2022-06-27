import React from "react"
import Calculator from "../components/Calculator"
import Intro from "../components/Intro"
import Footer from "../components/Footer"
import HeaderSection from "../components/HeaderSection"
import Layout from "../components/Layout"



export default function Home() {


  return <Layout>
    <HeaderSection />
    <Intro />
    <Calculator />
    <Footer />
  </Layout>


}
