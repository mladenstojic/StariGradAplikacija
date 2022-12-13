import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Tip1 from '../sadrzaj/Tip1.js';
import Tip2 from '../sadrzaj/Tip2.js';
import Igrica from '../igrica/Igrica.js';
import StariGrad from '../../slike/naslovna.jpg';
import GrbVojinovica from '../../slike/Grb-Vojinovica.png';
import Nikola from '../../slike/nikola.jpg';
import Carousel from '../carousel/Carousel.js'


function Pocetna({tekst}) {

    const [pocetnaTekst, setPocetnaTekst] = useState([]);

  useEffect(()=> {
    const getTekst = async()=>{
      const izvuciTekst = await tekst
      setPocetnaTekst(izvuciTekst);
    }

    getTekst()
  },[tekst])
    return (
    
        <>  
            <Carousel tekst = {pocetnaTekst} dugme={true}/>
            <article className='pocetna-strana'>

            <Tip1 naslov={pocetnaTekst.Naslov1} tekst={pocetnaTekst.Tekst1}/>
            <Igrica/>
            <Tip2 dugme={pocetnaTekst.Dugme} tekst={pocetnaTekst.Tekst3} naslov={pocetnaTekst.Naslov3}  slika={Nikola} lokacija='/istorijat/nikola-altomanovic'/>
            <Tip2 dugme={pocetnaTekst.Dugme} orjentacija='row-reverse' tekst={pocetnaTekst.Tekst2} naslov={pocetnaTekst.Naslov2} slika={StariGrad}  lokacija ='/istorijat/otvrdjavi'/>
            <Tip2 dugme={pocetnaTekst.Dugme} tekst={pocetnaTekst.Tekst4} slika={GrbVojinovica} naslov={pocetnaTekst.Naslov4}  lokacija='/istorijat/porodicavojinovic'/>
            
            </article>
        </>
    );
  }

  Pocetna.defaultProps = {
    tekst:{}
  }

  Pocetna.propTypes = {
    tekst: PropTypes.object,
  }
  
  export default Pocetna;