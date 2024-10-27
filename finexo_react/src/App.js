import logo from './logo.svg';
import './App.css';
import HeroArea from './component/Herosection';
import ServiceSection from './component/Service';
import AboutSection from './component/About';
import WhyChooseUs from './component/Why';
import TeamSection from './component/Team';
import ClientSection from './component/Cllient';
import InfoSection from './component/Info';
import FooterSection from './component/Footer';

function App() {
  return (
    <div className="App">
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
