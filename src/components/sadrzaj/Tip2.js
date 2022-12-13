import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import './f1.css';


function Tip2({orjentacija,naslov, tekst, slika, lokacija, dugme}) {
    return (
        <section className='sadrzaj-container tip2' style={{flexDirection: orjentacija}}>
            <div className='sadrzaj-tekst-wrapper'>
                <h1 className='naslov'>{naslov}</h1>
                <div className='sadrzaj-tekst'>
                    <p>
                    {tekst}
                    </p>
                </div>
                <div className='sadrzaj-dugme-container'>
                    
                </div>   
                <Link to={lokacija} className='sadrzaj-dugme'>{dugme}</Link>  
            </div>
            <img src={slika} className='sadrzaj-slika' alt='slika tvrdjave'/>
        </section>
    );
  }
  Tip2.defaultProps = {
    orjentacija: 'row',
    tekst: 'ucitava se',
  }

  Tip2.propTypes = {
    orjentacija: PropTypes.string,
    tekst: PropTypes.string,
    slika: PropTypes.string,
  }

  export default Tip2;