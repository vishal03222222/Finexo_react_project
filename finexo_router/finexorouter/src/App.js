import logo from './logo.svg';

import './App.css'

import ServiceSection from './component/Service';
import AboutSection from './component/About';
import WhyChooseUs from './component/Why';
import TeamSection from './component/Team';
import ClientSection from './component/Cllient';
import InfoSection from './component/Info';
import FooterSection from './component/Footer';
import { Route, Routes } from 'react-router-dom';

import Login from './component/Login';
import HeroArea from './component/Herosection';
import Header from './component/Header';


function App() {
  return (
    <div className="App">
      
 
     
       
      <Routes>

        <Route path='/' element={<HeroArea/>} />
        <Route path='/about' element={<AboutSection />} />
        <Route path='/Services' element={<ServiceSection />} />
        <Route path='/Why' element={<WhyChooseUs />} />
        <Route path='/Team' element={<TeamSection />} />
        
        <Route path='/Login' element={<Login/>} />


      </Routes>
      <HeroArea/>
      <HeroArea/>
      <HeroArea/><HeroArea/><HeroArea/>
      
      
      <ServiceSection />
      <AboutSection />
      <WhyChooseUs />
      <TeamSection />
      <ClientSection />
      <InfoSection />
      <FooterSection />


    </div>
  );
}

export default App;
