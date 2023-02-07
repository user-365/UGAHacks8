import React,{Fragment,useState} from 'react';
import Navbar from '../Components/Navbar';
import bgVideo from "../assets/natureVid.mp4";
import Hero from '../Components/Hero';

const About = () => {
  const [ toggleTab, setToggleTab] = useState(1)
  const toggleState = (index) =>{setToggleTab(index)}
  
  return (
    <Fragment>
    <Navbar />
    <Hero bgVideo={bgVideo} primaryDesc="About Us" FAQs={true} />
    </Fragment>
  )
}

export default About