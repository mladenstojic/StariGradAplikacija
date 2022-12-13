import {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Scroll from './components/Scroll.js'
import Pocetna from './components/pocetna/Pocetna.js'
import Navigation from './components/navigation/Navigation.js';
import Oprojektu from './components/oprojektu/Oprojektu.js';
import Footer from './components/footer/Footer.js';
import Istorijat from './components/istorijat/Istorijat.js';
import Galerija from './components/galerija/Galerija.js';



function App() {

  const [jezik, setJezik] = useState('RS');


  const odaberi = (drzava) => {
    setJezik(drzava); 
  }


  const Fetch = async (jezik, strana) => {
    const rezultat = await fetch(`http://localhost:5000/${strana}/${jezik}`);
    const data = await rezultat.json();
    return data;
  }


  return (
    <Router> 
      <Navigation odaberi = {odaberi} jezik = {jezik} tekst = {Fetch(jezik,'navigacija')}/>
      <Scroll/>
      <Routes>
          
          <Route path='/' element={<Pocetna tekst = {Fetch(jezik,'pocetna')}/> }/> 
          <Route path='/istorijat/otvrdjavi' element={<Istorijat jezik ={jezik} tekst = {Fetch(jezik,'otvrdjavi')}/>} />
          <Route path='/istorijat/porodicavojinovic'  element={<Istorijat jezik ={jezik} nemaSlika = {true} tekst = {Fetch(jezik,'porodicavojinovic')}/>} />
          <Route path='/istorijat/nikola-altomanovic' element={<Istorijat jezik ={jezik} nemaSlika = {true} tekst = {Fetch(jezik,'nikolaaltomanovic')} />} />
          <Route path='/oprojektu' element={<Oprojektu tekst={Fetch(jezik,'oprojektu')} />} />
          <Route path='/galerija' element={<Galerija/>} />
          
        </Routes>
        <Footer tekst = {Fetch(jezik,'grbjezici')}/>           
    </Router>  
  );
}

export default App;
