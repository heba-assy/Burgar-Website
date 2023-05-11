import React, { useState } from 'react';
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './HeroElements';
import Navbar from '../Navbar';
import Sidebar from "../Sidebar";


function Hero() {
 const [isOpen, setIsOpen] = useState(false);

   const toggle = () => {
     setIsOpen(!isOpen)
   }

  return (
    <HeroContainer>
      <Navbar toggle={toggle}/>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <HeroContent>
        <HeroItems>
            <HeroH1>Greatest Burger ever</HeroH1>
            <HeroP>Ready in 60 Seconds</HeroP>
            <HeroBtn>Order Now</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero;