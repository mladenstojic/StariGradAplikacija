import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import '../naslovnaslika/naslovna.css';
import './istorijat.css';
import Tip3 from '../sadrzaj/Tip3.js';
import Tip4 from '../sadrzaj/Tip4.js';
import Naslovna from '../naslovnaslika/Naslovna.js';
import NaslovnaSlika from '../../slike/naslovna.jpg';
import Slika from '../sadrzaj/Slika.js'
import Slika1 from '../../slike/260.jpg';
import Slika2 from '../../slike/217.jpg';
import Slika3 from '../../slike/skica1.png';
import Slika4 from '../../slike/skica3.png';
import Slika5 from '../../slike/skica4.png';
import Slika6 from '../../slike/334.jpg';
import audioRs from '../../audio/MP3_srp/Stari_grad.mp3'
import audioEng from '../../audio/MP3-eng/OldTown_eng.mp3'
import audioGer from '../../audio/MP3-nem/StariGrad_nem.mp3'
import audioRus from '../../audio/MP3-rus/Стари град.mp3'


function Otvrdjavi({tekst,jezik}) {

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
            <Naslovna jezik={jezik} audioRs={audioRs} audioEng={audioEng} audioGer={audioGer} audioRus={audioRus} naslovnaSlika={NaslovnaSlika} tekst = {istorijat}/>
            <article className='pozadina'>
            <Tip3 slika={Slika1} naslov ={istorijat.Naslov1} tekst = {istorijat.Tekst1}/>
            <Tip4 tekst = {istorijat.Tekst2} />
            <Tip3 slika={Slika2} orjentacija = 'row-reverse' tekst={istorijat.Tekst3}/>
            <Tip4 naslov ={istorijat.Naslov2} tekst = {istorijat.Tekst4}/>
            <Tip3 slika={Slika3} tekst = {istorijat.Tekst5}/>
            <Slika slika={Slika6}/>
            <Tip3 slika={Slika4} orjentacija = 'row-reverse'tekst = {istorijat.Tekst6}/>
            <Tip4 tekst={istorijat.Tekst7}/>
            <Tip3 slika={Slika5} tekst = {istorijat.Tekst8}/>
            <ol className='izvor'>{istorijat.literatura}
              <li>{istorijat.literatura1}</li>
              <li>{istorijat.literatura2}</li>
              <li>{istorijat.literatura3}</li>
              <li>{istorijat.literatura4}</li>
              <li>{istorijat.literatura5}</li>
            </ol>
        </article>
        </>
    );
  }

  Otvrdjavi.defaultProps = {
    tekst: {}
  }

  Otvrdjavi.propTypes = {
    tekst: PropTypes.object

  }
  
  export default Otvrdjavi;