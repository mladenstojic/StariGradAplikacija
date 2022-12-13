import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import './oprojektu.css';
import AkademijaLogo from '../../slike/akademija-logo-crni.png';
import ProjekatLogo from '../../slike/dimuse_logo.jpg';
import grbGrad from '../../slike/uzice-grb.png';
import grbSrbija from '../../slike/srbija-grb.png';
import video from '../../oprojektu/video2.mp4';
function Oprojektu({tekst}) {

    const [projekatTekst, setProjekatTekst] = useState([]);
    useEffect(()=> {
        const getTekst = async()=>{
        const izvuciTekst = await tekst
        setProjekatTekst(izvuciTekst)
        }

        getTekst()
    },[tekst])

    return (
       <>
        <div className='nav-line'></div>
        <div className='about-container'>
            
            <div className='about-wrapper'>
            <h1 className='naslov about-naslov'>{projekatTekst.naslov}</h1>
                <ul className='about-lista'>
                    <li className='about-lista-element'> {projekatTekst.nazivprojekta}</li>
                    <img className='about-image' src={ProjekatLogo} alt='logo projekta'/>
                    <li className='about-lista-element'><h4>{projekatTekst.dimsue}</h4></li><br/><br/>
                    <li className='about-lista-element'>{projekatTekst.nosilacprojekta}</li>
                    <img className='about-image' src={AkademijaLogo} alt='logo akademije'/>
                    <li className='about-lista-element'><h4>{projekatTekst.akademija}</h4></li><br/><br/>
                    <li className='about-lista-element'> {projekatTekst.koordinator}</li>
                    <li className='about-lista-element'> <h4>{projekatTekst.koordinator1}</h4></li><br/><br/>
                    <li className='about-lista-element'>{projekatTekst.finansiranje}
                        <ul className='about-podlista grbovi'>
                            <div className='grb'>
                                <img className='about-image' src={grbSrbija} alt='grb srbije'/>
                                <li style={{textAlign:"center"}} className='about-lista-element'><strong>{projekatTekst.finansiranje1}</strong></li>
                            </div>
                            
                            <div className='grb'>
                                <img className='about-image' src={grbGrad} alt='grb grada'/>
                                <li style={{textAlign:"center"}} className='about-lista-element'><strong>{projekatTekst.finansiranje2}</strong></li>
                            </div>
                        </ul>
                    </li><br/>
                    <li className='about-lista-element'><h4>{projekatTekst.prijavanaNaKonkurs}</h4></li>
                    <li className='about-lista-element'><h4>{projekatTekst.rezultati}</h4></li>
                    <li className='about-lista-element'><h4>{projekatTekst.rangiranje}</h4></li>
                    <li className='about-lista-element'><h4>{projekatTekst.poeni}</h4></li>
                    <li className='about-lista-element'><h4>{projekatTekst.implementacija}</h4></li>
                    <br/><br/>
                    <li className='about-lista-element'><h4>{projekatTekst.projektniTim}</h4>
                        <ol className='about-podlista'>
                        <li className='about-lista-element'>{projekatTekst.projektniTim1}</li>
                        <li className='about-lista-element'>{projekatTekst.projektniTim2}</li>
                        <li className='about-lista-element'>{projekatTekst.projektniTim3}</li>
                        <li className='about-lista-element'>{projekatTekst.projektniTim4}</li>
                        <li className='about-lista-element'>{projekatTekst.projektniTim5}</li>
                        <li className='about-lista-element'>{projekatTekst.projektniTim6}</li>
                        <li className='about-lista-element'>{projekatTekst.projektniTim7}</li>
                        <li className='about-lista-element'>{projekatTekst.projektniTim8}</li>
                        <li className='about-lista-element'>{projekatTekst.projektniTim9}</li>
                        <li className='about-lista-element'>{projekatTekst.projektniTim10}</li>
                        <li className='about-lista-element'>{projekatTekst.projektniTim11}</li>
                        <li className='about-lista-element'>{projekatTekst.projektniTim12}</li>
                        <li className='about-lista-element'>{projekatTekst.projektniTim13}</li>
                        </ol>
                    </li>
                </ul><br/><br/>
                <p style={{textAlign:"justify"}}>{projekatTekst.promocija1}</p>
                <br/><br/>
                <div className='about-podlista grbovi'>
                    <img style={{margin:"10px auto", maxWidth:"300px"}} src={require('../../oprojektu/promocija1.jpeg') }alt="promocija1"/>
                    <img style={{margin:"10px auto", maxWidth:"300px"}} src={require('../../oprojektu/promocija3.jpeg')} alt="promocija2"/>
                </div><br/>
                <p style={{textAlign:"justify"}}>{projekatTekst.promocija2}</p>
                <br/><br/>
                <video width={'100%'} controls className='onama-video' src={video} /> 
                <br/><br/>
                <div className='about-podlista grbovi'>
                    <img style={{margin:"10px auto", maxWidth:"300px"}} src={require('../../oprojektu/promocija4.JPG')}alt="promocija3"/>
                    <img style={{margin:"10px auto", maxWidth:"300px"}} src={require('../../oprojektu/promocija5.JPG')} alt="promocija4"/>
                    <img style={{margin:"10px auto", maxWidth:"300px"}} src={require('../../oprojektu/promocija6.JPG')}alt="promocija5"/>
                    <img style={{margin:"10px auto", maxWidth:"300px"}} src={require('../../oprojektu/plakat.jpg')} alt="promocija6"/>
                    <img style={{margin:"10px auto", maxWidth:"300px"}} src={require('../../oprojektu/promocija7.JPG')} alt="promocija7"/>
                    <img style={{margin:"10px auto", maxWidth:"300px"}} src={require('../../oprojektu/promocija8.JPG')} alt="promocija8"/>
                </div>
            </div>
        </div>
        
       </>
       
    );
  }

  Oprojektu.defaultProps = {
    tekst: 'ucitava se',
  }

  Oprojektu.propTypes = {
    tekst: PropTypes.object,
  }
  
  export default Oprojektu;