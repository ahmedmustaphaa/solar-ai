import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar/Navbar';
import { Route, Routes } from 'react-router';
import Home from './pages/home/Home';

import Menu from  './pages/menu/Menu'
import GreenEnergy from './pages/menu/Menu';
import About from './pages/about/About';
import Services from './pages/services/Services';
import Hero from './pages/hero/Hero';
import SolarGuide from './pages/solarGiude/SolarGuide';
import ContactUs from './pages/contact/Contact';
import FaultDetection from './pages/faultDetection/FaultDetection';
import Slider from './pages/slider/Slider';
import Footer from './pages/foooter/Footer';
import EnergyPrediction from './pages/energypreiction/EnergyPrediction';
import Dashboard from './pages/dataanalysisdashpoard/DataAnalysisDashpoard';
import PredictiveMaintenance from './pages/predictive/Predictivemantance';


function App() {
  return (
    <div >
    <Routes>
    <Route path='/' element={<div><Navbar/>
    <Home/>
    <Hero/>
    <GreenEnergy/>
    <SolarGuide/>
    <Services/>
    <About/>
    <ContactUs/>
  
    <Footer/>
    </div>
  
  }
    ></Route>
    <Route path='/soltain' element={<div><Navbar/> <GreenEnergy/> <Footer/></div>}></Route>
    <Route path='/guide' element={<div><Navbar/> <SolarGuide/> <Footer/></div>}></Route>
    <Route path='/contact' element={<div><Navbar/> <ContactUs/> <Footer/></div>}></Route>
    <Route path='/energy-predection' element={<div><Navbar/> <EnergyPrediction/> <Footer/></div>}></Route>
    <Route path='/data-analysis-dashpoard' element={<div><Navbar/> <Dashboard/> <Footer/></div>}></Route>
    <Route path='/predictive-mentance' element={<div><Navbar/> <PredictiveMaintenance/> <Footer/></div>}></Route>
    <Route path="/services" element={
   <div>
   <Navbar/>
   <Services/>
   <Footer/>
   </div>

      
    }></Route>

    <Route path='/about'  element={
      <div>
      <Navbar/>
   <About/>
   <Footer/>
      </div>
    }></Route>

    <Route path='/fault-detection' element={
        <div>
        <Navbar/>

        <FaultDetection/>
        <Footer/>
        </div>

    }></Route>
    </Routes>
   
  
    </div>
  );
}

export default App;
