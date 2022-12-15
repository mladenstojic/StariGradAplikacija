import {useState} from "react";
import { useTranslation } from "react-i18next";
import './galerija.css';
import GalerijaLista from './GalerijaLista.js';
import Modul from './Modul.js'

function Galerija() {
    const { t } = useTranslation();

    const [selektovanaSlika,setSelektovanaSlika] = useState(null);
    const [imageIndex,setImageIndex] = useState(null);
    
    const klikNaSliku = (item, index) => {
        setImageIndex(index);
        setSelektovanaSlika(item.slika);
    };


    const listanjeDesno = () => {
        
        if(imageIndex + 1 >= GalerijaLista.length){
            setImageIndex(0);
            const narednaSlika = GalerijaLista[0].slika;
            setSelektovanaSlika(narednaSlika)
            return;
        }
        const naredniIndex = imageIndex + 1;
        const narednaSlika = GalerijaLista.filter((item)=>{
            return GalerijaLista.indexOf(item)===naredniIndex;
        });
        const novaSlika = narednaSlika[0].slika;
        setSelektovanaSlika(novaSlika);
        setImageIndex(naredniIndex);
    }


    const listanjeLevo = () => {

        if (imageIndex === 0) {
            setImageIndex(GalerijaLista.length - 1);
          const prethodnaSlika = GalerijaLista[GalerijaLista.length - 1].slika;
          setSelektovanaSlika(prethodnaSlika);
          return;
        }
        const prethodniIndex = imageIndex - 1;
        const prethodnaSlika = GalerijaLista.filter((item) => {
          return GalerijaLista.indexOf(item) === prethodniIndex;
        });
        
        const novaSlika = prethodnaSlika[0].slika;
        setSelektovanaSlika(novaSlika);
        setImageIndex(prethodniIndex);
      };

      const portret = GalerijaLista.filter((item) => {
        return item.tip === "portret";
      });

      const landscape = GalerijaLista.filter((item) => {
        return item.tip === "landscape";
      });



    return (
        <>
            <div className='nav-line'></div>
            <section className='galerija-container'>
                <h1 className="naslov">{t('gallery')}</h1>
                <div className="galerija-wrapper">
                {landscape.map((item, index) => {
                    return (
                            <div key={index} className="galerija-slika-wrapper">
                                <img src={item.slika} alt={item.tekst} onClick={() => klikNaSliku(item,index)}/>
                                <h3 className="slika-tekst">{item.tekst}<br/><br/> {item.src ? <a href={`${item.src}`}>{item.izvor}</a> : <span>{item.izvor}</span>} </h3>               
                            </div>
                        )
                    }
                )}
                {portret.map((item, index) => {
                    return (
                            <div key={index} className="galerija-slika-wrapper">
                                <img src={item.slika} alt={item.tekst} onClick={() => klikNaSliku(item,index)}/>
                                <h3 className="slika-tekst">{item.tekst}<br/><br/> {item.src ? <a href={`${item.src}`}>{item.izvor}</a> : <span>{item.izvor}</span>}</h3>                
                            </div>
                        )
                    }
                )}
                    {selektovanaSlika && <Modul listanjeLevo={listanjeLevo}  selektovanaSlika={selektovanaSlika} listanjeDesno={listanjeDesno} setSelektovanaSlika={setSelektovanaSlika} /> }
                </div>
            </section>
        </>
        
    );
  }
  
  export default Galerija;