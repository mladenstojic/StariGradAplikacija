import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import '../naslovnaslika/naslovna.css';
import './istorijat.css';
import Otvrdjavi from './Otvrdjavi.js'
import Porodicavojinovic from './Porodicavojinovic.js';
import Nikolaaltomanovic from './Nikolaaltomanovic.js';


function Istorijat({tekst, jezik}) {

  const [istorijat, setIstorijat] = useState([]);

  useEffect(()=> {
    const getTekst = async()=>{
      const izvuciTekst = await tekst
      setIstorijat(izvuciTekst);
    }

    getTekst()
  },[tekst])
  if(istorijat.tip === 'otvrdjavi'){
    return (<Otvrdjavi jezik={jezik} tekst={istorijat}/>)
  }
  if(istorijat.tip === 'porodicavojinovic')
  {
    return(<Porodicavojinovic jezik={jezik}  tekst={istorijat} nemaSlika ={true}/>)
  }
  if(istorijat.tip === 'nikolaaltomanovic')
  {
    return(<Nikolaaltomanovic jezik={jezik}  tekst={istorijat} nemaSlika ={true}/>)
  }

 }

  Istorijat.defaultProps = {
    tekst: {},
    
  }

  Istorijat.propTypes = {
    tekst: PropTypes.object,
  }
  
  export default Istorijat;