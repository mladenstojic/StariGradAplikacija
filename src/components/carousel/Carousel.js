import {useState, useEffect} from 'react';
import './carousel.css';
import CarouselDugme from './CarouselDugme.js';
import Lista from './Lista.js'
import Dimuse from '../../slike/dimuse_logo_white.png'
import { Link } from 'react-router-dom';

function Carousel({tekst, dugme}) {

    const[elementIndex, setElementIndex] = useState(1);

    const sledeciElement = () => {
       if(elementIndex !== Lista.length)
       {
            setElementIndex(elementIndex + 1);
       }
       else if (elementIndex ===Lista.length)
       {
            setElementIndex(1)
       }
    }
    
    const prethodniElement = () => {
        if(elementIndex !== 1)
       {
            setElementIndex(elementIndex - 1);
       }
       else if (elementIndex === 1)
       {
            setElementIndex(Lista.length);
       }
    }

    const tackaPom = index => {
        setElementIndex(index)
    }

    useEffect(()=>{
        const interval = setInterval(()=>{
            sledeciElement();        
        }, 10000);
        return () => clearInterval(interval);
    });

    return (


        <section className='carousel-container'>
                
                {Lista.map((element, index) => {
                return (
                        <div
                        key={element.id}
                        className={elementIndex === index + 1 ? "carousel-element active-anim" : "carousel-element"}>
                            {element.tip === "video" ? 
                            <video autoPlay loop muted className='carousel-element-slika video' src={element.slika} /> : 
                            <div className='carousel-element-slika' style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(${element.slika})`}}></div>
                            }                      
                        </div>
                    )
                 })}
           
                <CarouselDugme promeni={sledeciElement} strelica = {"desna"}/>
                <CarouselDugme promeni={prethodniElement} strelica = {"leva"}/>
                <div className='dot-container'>
                {Array.from({length: Lista.length}).map((item, index) => (
                    
                    <div key={index}
                    onClick={() => tackaPom(index + 1)}
                    className={elementIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}

                </div>
                    <div className='carousel-naslov-wrapper'>
                        <img className='dimuseLogo' src={Dimuse} alt={Dimuse}/>
                        <span className='dimuse-naslov'>{tekst.dimuse}</span>
                        <h1 className='carousel-naslov'>{tekst.tekstPrekoNaslovneSlikenaslov}</h1>
                        <span className='carousel-podnaslov'>{tekst.tekstPrekoNaslovneSlikepodnaslov}</span>
                        <a href='http://localhost:3006' className='obilazak'>{tekst.dugmeNaNaslovnojSlici}</a>
                    </div>
                    <div className='naslovna-menu pocetna'></div>
                
        </section>
    );
  }
  
  export default Carousel;