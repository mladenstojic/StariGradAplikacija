import {useState, useEffect} from 'react';
import Slika from '../sadrzaj/Slika.js'
import PropTypes from 'prop-types';
import Tip3 from '../sadrzaj/Tip3.js';
import Tip4 from '../sadrzaj/Tip4.js';
import Naslovna from '../naslovnaslika/Naslovna.js';
import NaslovnaSlika from '../../slike/369.jpg';
import PorodicnoStablo from '../../slike/porodicno-stablo.PNG'
import audioRs from '../../audio/MP3_srp/Vojinovici.mp3'
import audioEng from '../../audio/MP3-eng/VojinovicFamily_eng.mp3'
import audioGer from '../../audio/MP3-nem/Vojinovici_nem.mp3'
import audioRus from '../../audio/MP3-rus/Породица Војиновић.mp3'


function Porodicavojinovic({ tekst, nemaSlika, jezik}) {

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
            <Naslovna jezik={jezik} audioRs={audioRs} audioEng={audioEng} audioGer={audioGer} audioRus={audioRus} naslovnaSlika = {NaslovnaSlika} tekst = {istorijat}/>
            <article className='pozadina'>
            <Tip3 naslov ={istorijat.Naslov1} tekst = {istorijat.Tekst1} nemaSlika={nemaSlika}/>
            <Slika slika={PorodicnoStablo} usko = {true}/>
            <Tip3 tekst = {istorijat.Tekst2}  nemaSlika={nemaSlika}/>
            <Tip4 orjentacija = 'row-reverse' tekst={istorijat.Tekst3}  nemaSlika={nemaSlika}/>
            <Tip3 naslov ={istorijat.Naslov2} tekst = {istorijat.Tekst4} nemaSlika={nemaSlika}/>
            <Tip4 tekst = {istorijat.Tekst5}  nemaSlika={nemaSlika}/>
            <Tip3 tekst = {istorijat.Tekst6}  nemaSlika={nemaSlika}/>
            <Tip4 orjentacija = 'row-reverse' tekst={istorijat.Tekst7}  nemaSlika={nemaSlika}/>
            <Tip3 tekst = {istorijat.Tekst8}  nemaSlika={nemaSlika}/>
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

  Porodicavojinovic.defaultProps = {
    tekst: {},
    nemaSlika: false
  }

  Porodicavojinovic.propTypes = {
    tekst: PropTypes.object,
    nemaSlika: PropTypes.bool

  }
  
  export default Porodicavojinovic;