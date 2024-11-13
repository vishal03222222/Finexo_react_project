import logo from './logo.svg';
import './App.css'
import HeroArea from './component/Herosection';
import ServiceSection from './component/Service';
import AboutSection from './component/About';
import WhyChooseUs from './component/Why';
import TeamSection from './component/Team';
import ClientSection from './component/Cllient';
import InfoSection from './component/Info';
import FooterSection from './component/Footer';
import { Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import CryptoLogin from './component/Login';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' />
        <Route path='/about' element={<AboutSection/>}/>
        <Route path='/services' element={<ServiceSection/>}/>
        <Route path='/why' element={<WhyChooseUs/>}/>
        <Route path='/team' element={<TeamSection/>}/>
        <Route path='/login' element={<CryptoLogin/>}/>

      </Routes>
      <HeroArea/>
      
      
      
      <ServiceSection/>
      <AboutSection/>
      <WhyChooseUs/>
      <TeamSection/>
      <ClientSection/>
      <InfoSection/>
      <FooterSection/>
    </div>
  );
}

export default App;
