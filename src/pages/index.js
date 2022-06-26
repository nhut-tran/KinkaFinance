import React from "react"
import Calculator from "../components/Calculator"
import Feature from "../components/Feature"
import Footer from "../components/Footer"
import HeaderSection from "../components/HeaderSection"
import Layout from "../components/Layout"



export default function Home() {


  return <Layout>
    <HeaderSection />
    <Feature />
    <Calculator />
    <Footer />
  </Layout>


}
