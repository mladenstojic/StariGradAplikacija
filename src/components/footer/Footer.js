import {useState, useEffect} from 'react';
import { FaRegCopyright} from "react-icons/fa";
import './footer.css';
import GrbSrbije from '../../slike/srbija-grb.png';
import GrbGrada from '../../slike/uzice-grb.png';
import LogoAkademije from  '../../slike/akademija-logo.png';
import Dimuse from '../../slike/dimuse_logo_white.png'

function Footer({tekst}) {

    
    const [footerTekst, setFooterTekst] = useState([]);
    useEffect(()=> {
        const getTekst = async()=>{
        const izvuciTekst = await tekst
        setFooterTekst(izvuciTekst)
        }

        getTekst()
    },[tekst])

    return (
        <>
            <section className='footer-container mapa-wrapper'>
                <div className='footer-element-wrapper'>
                    <form>
                        <input className='form-input-field' placeholder='име'/>
                        <input className='form-input-field' placeholder='email'/>
                        <textarea className='form-text-area' placeholder='порука...'/>
                        <button className='form-button'>ПОШАЉИ</button>
                    </form> 
                </div>
                <div className='footer-element-wrapper mapa'>
                <iframe className='mapa' title='mapa' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4068.917448845321!2d19.827266194963762!3d43.852530518751976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4759d335037add3d%3A0xe658d6968fc644d3!2z0KHRgNC_0YHQutCwINGC0LLRgNGS0LDQstCwINCh0YLQsNGA0Lgg0LPRgNCw0LQ!5e0!3m2!1ssr!2srs!4v1670294091746!5m2!1ssr!2srs" width="" height="" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                </div>
            </section>
            <section className='footer-container'>
                <div className='footer-element-wrapper grb'><a href='https://www.kultura.gov.rs/'><img className='grb-slika' src={GrbSrbije} alt='grb srbije'/></a><p className='grb-tekst'>{footerTekst.grbSrbije}</p></div>
                <div className='footer-element-wrapper grb'><a href='https://uzice.rs/'><img className='grb-slika' src={GrbGrada} alt='grb grada'/></a><p className='grb-tekst'>{footerTekst.grbGrada}</p></div>
                <div className='footer-element-wrapper grb'><a href='https://akademijazs.edu.rs/'><img className='grb-slika' src={LogoAkademije} alt='logo akademije'/></a><p className='grb-tekst'>{footerTekst.logoAkademije}</p></div>
                <div className='footer-element-wrapper grb'><img className='grb-slika' src={Dimuse} alt='logo dimuse'/><p className='grb-tekst'>{footerTekst.logoDimuse}</p></div>
                <p style={{textAlign:"center",flexBasis: "100%", color:"white"}}><FaRegCopyright/> {footerTekst.logoAkademije} </p>
            </section>
        </>
    );
  }
  
  export default Footer;