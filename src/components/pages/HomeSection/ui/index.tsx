import React from 'react'
import BanerHome from "../ui/BanerHome";
import AboutUs from "../ui/AboutUs";
import ServicesTechnologies from "../ui/Services_Technologies";
import Slogan from "../ui/Slogan";
import Whychoose from "../ui/Whychoose";
import Terminal from "../ui/Terminal";
const HomeSection = () => {
  return (
    <>
    <BanerHome />
    <AboutUs />
     <ServicesTechnologies />
    {/* <Slogan /> */}
    <Whychoose />    
  </>
  )
}

export default HomeSection