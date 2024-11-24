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
import Login from './component/Login';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>

        <Route path='/' element={<HeroArea />} />

        <Route path='/about' element={<AboutSection />} />
        <Route path='/Service' element={<ServiceSection />} />
        <Route path='/Why' element={<WhyChooseUs />} />

        <Route path='/Team' element={<TeamSection />} />
        <Route path='/about' element={<ClientSection />} />
        <Route path='/about' element={<InfoSection />} />
        <Route path='/Login' element={<Login />} />


      </Routes>

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
