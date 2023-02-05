import React,{Fragment,useState} from 'react';
import Navbar from '../Components/Navbar';
import bgVideo from "../assets/natureVid.mp4";
import Hero from '../Components/Hero';

const About = () => {
  const [ toggleTab, setToggleTab] = useState(1)
  const toggleState = (index) =>{setToggleTab(index)}
  const description="A Carbon Footprint is the amount of Carbon Dioxide (CO2) released due to consumption of fossil fuels by an invidiual or organization. Now imagine a world, where we could minimize Carbon Footprinting as much as possible. Our web app, EcoTrip,  "

  return (
    <Fragment>
    <Navbar />
    <Hero bgVideo={bgVideo} primaryDesc="About Us" paragraph={description}/>
    </Fragment>
  )
}

export default About