import React from 'react'
import HeroSection from "./components/HeroSection";
import LandScapeServices from './components/LandScapeServices';
import ProfessionalSection from './components/ProfessionalSection';
import ProfessionalServiceSection from './components/ProfessionalServiceSection';
import Products from './components/Products';
import SubcribeSection from './components/SubcribeSection';
const Home = () => {
  return (
    <div>
      <HeroSection />
      <LandScapeServices />
      <ProfessionalSection />
      <ProfessionalServiceSection />
      <Products />
      <SubcribeSection />
    </div>
  )
}

export default Home