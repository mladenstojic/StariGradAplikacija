import './languageselector.css';
import ReactCountryFlag from "react-country-flag";
import {useEffect,useRef,useState} from 'react';

import { FaChevronDown, FaChevronUp,FaFacebookF } from "react-icons/fa";

function Languageselector({odaberi, jezik}) {


  const [isActive, setIsActive] = useState(false);


  


  const prikazi = () => {

    setIsActive(current => !current);
  };


const jezici = [

  { 
    id: 'RS',
    jezik: 'СР',
  },
  { 
    id: 'GB',
    jezik: 'GB',
  },
  { 
    id: 'DE',
    jezik: 'DE',
  },
  { 
    id: 'RU',
    jezik: 'RU',
  },

];

const referenca = useRef();

  
  useEffect(() => {
    document.addEventListener("mousedown", zatvoriIzvan);  
  }, []);


  function zatvori(){
    setIsActive(false);
  };

  const zatvoriIzvan = (e) => {
    if(!referenca.current.contains(e.target))
    setIsActive(false);
  };

  const obabranJezik = jezici.find(obj => {
    return obj.id === jezik;
  });

    return (
        <div ref={referenca} className="language-container">
        
            <a className='facebook' href='https://www.facebook.com/profile.php?id=100085277840506&mibextid=LQQJ4d'><FaFacebookF size={28}/></a>
            <div onClick={prikazi} className="language-selected"><ReactCountryFlag countryCode={jezik} svg style={{width: '1.25em', height: '1.25em', }} title={jezik}/> {obabranJezik.jezik} {isActive ? <FaChevronUp/> :  <FaChevronDown/>}</div>
            <div className='language-option-wrapper' style={{display: isActive ? 'block' : 'none'}}>
          
            {jezici.map((lang) => {
              return <div key={lang.id} onClick={() => 
                {odaberi(lang.id); zatvori()}} className="language-option"><ReactCountryFlag countryCode={lang.id} svg style={{width: '1.25em', height: '1.25em', }} title={lang.jezik}/> {lang.jezik}</div>;
            })}

            </div>   
        </div>
    );
  }
  
  export default Languageselector;