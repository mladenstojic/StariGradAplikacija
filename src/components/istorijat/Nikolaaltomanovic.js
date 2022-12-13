import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import '../naslovnaslika/naslovna.css';
import './istorijat.css';
import Tip3 from '../sadrzaj/Tip3.js';
import Tip4 from '../sadrzaj/Tip4.js';
import Naslovna from '../naslovnaslika/Naslovna.js';
import NaslovnaSlika from '../../slike/369.jpg';
import audioRs from '../../audio/MP3_srp/NAltomanovic.mp3'
import audioEng from '../../audio/MP3-eng/NAltmanovic_eng.mp3'
import audioGer from '../../audio/MP3-nem/NAltomanovic_nem.mp3'
import audioRus from '../../audio/MP3-rus/Никола Алтомановић.mp3'




function Nikolaaltomanovic({ tekst, nemaSlika, jezik}) {

  const [istorijat, setIstorijat] = useState([]);
  useEffect(()=> {
    const getTekst = async()=>{
      const izvuciTekst = await tekst
      setIstorijat(izvuciTekst);
  
    }
    getTekst()
  },[tekst])
    return (
    
        <>
        <Naslovna jezik={jezik} audioRs={audioRs} audioEng={audioEng} audioGer={audioGer} audioRus={audioRus} tekst = {istorijat} naslovnaSlika = {NaslovnaSlika}/>
        <article className='pozadina'>
        <Tip3 naslov={istorijat.Naslov1} tekst = {istorijat.Tekst1} nemaSlika={nemaSlika}/>
        <Tip4 tekst = {istorijat.Tekst2}  nemaSlika={nemaSlika}/>
        <Tip3 tekst={istorijat.Tekst3}  nemaSlika={nemaSlika}/>
        <Tip4 tekst = {istorijat.Tekst4} nemaSlika={nemaSlika}/>
        <Tip3 tekst = {istorijat.Tekst5}  nemaSlika={nemaSlika}/>
        <Tip4 tekst = {istorijat.Tekst6}  nemaSlika={nemaSlika}/>
        <Tip3 naslov={istorijat.Naslov2} tekst={istorijat.Tekst7}  nemaSlika={nemaSlika}/>
        <Tip4 tekst = {istorijat.Tekst8}  nemaSlika={nemaSlika}/>
        <Tip3 tekst={istorijat.Tekst9}  nemaSlika={nemaSlika}/>
        <Tip4 tekst = {istorijat.Tekst10}  nemaSlika={nemaSlika}/>
        <Tip3 tekst={istorijat.Tekst11}  nemaSlika={nemaSlika}/>
        <Tip4 tekst = {istorijat.Tekst12}  nemaSlika={nemaSlika}/>
        <Tip3 tekst={istorijat.Tekst13}  nemaSlika={nemaSlika}/>
        <Tip4 tekst = {istorijat.Tekst14}  nemaSlika={nemaSlika}/>
        <Tip3 naslov={istorijat.Naslov3} tekst={istorijat.Tekst15}  nemaSlika={nemaSlika}/>
        <Tip4 tekst = {istorijat.Tekst16}  nemaSlika={nemaSlika}/>
        <Tip3 tekst={istorijat.Tekst17}  nemaSlika={nemaSlika}/>
        <Tip4 tekst = {istorijat.Tekst18}  nemaSlika={nemaSlika}/>
        <Tip3 tekst={istorijat.Tekst19}  nemaSlika={nemaSlika}/>
        <Tip4 tekst = {istorijat.Tekst20}  nemaSlika={nemaSlika}/>
        <Tip3 tekst={istorijat.Tekst21}  nemaSlika={nemaSlika}/>
        <Tip4 tekst = {istorijat.Tekst22}  nemaSlika={nemaSlika}/>
        <Tip3 tekst={istorijat.Tekst23}  nemaSlika={nemaSlika}/>
        <ol className='izvor'>{istorijat.literatura}
              <li>{istorijat.literatura1}</li>
              <li>{istorijat.literatura2}</li>
              <li>{istorijat.literatura3}</li>
              <li>{istorijat.literatura4}</li>
              <li>{istorijat.literatura5}</li>
              <li>{istorijat.literatura6}</li>
              <li>{istorijat.literatura7}</li>
              <li>{istorijat.literatura8}</li>
            </ol>
        </article>
        </>
    );
  }

  Nikolaaltomanovic.defaultProps = {
    tekst: {},
    nemaSlika: false
  }

  Nikolaaltomanovic.propTypes = {
    tekst: PropTypes.object,
    nemaSlika: PropTypes.bool

  }
  
  export default Nikolaaltomanovic;