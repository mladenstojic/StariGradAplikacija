import PropTypes from 'prop-types';

import './f1.css';


function Tip3({orjentacija,naslov, tekst, slika,nemaSlika}) {
  const sadrzajformat = {
    maxWidth: "1100px"
  }

  const tekstformat = {
    width: "100%",
    maxWidth: "unset"
  };
  const slikaformat = {
   display:"none"
  };

    return (
        <section  className='sadrzaj-container tip3 border' style={nemaSlika ? sadrzajformat : {flexDirection: orjentacija}}>
            <div style={nemaSlika ? tekstformat : {}} className='sadrzaj-tekst-wrapper tip3-tekst'>
                {naslov? <h1 className='naslov'>{naslov}</h1>:<></>}
                <div style={nemaSlika ? tekstformat : {}} className='sadrzaj-tekst tip3-tekst'>
                    <p>{tekst}</p><br/>

                </div>  
            </div>
            <img style={nemaSlika ? slikaformat : {}} src={slika} className='tip3-slika' alt='slika tvrdjave'/>
        </section>
    );
  }
  Tip3.defaultProps = {
    orjentacija: 'row',
    tekst: 'ucitava se',
    slika:'',
    nemaSlika: false
  }

  Tip3.propTypes = {
    orjentacija: PropTypes.string,
    tekst: PropTypes.string,
    slika: PropTypes.string,

  }

  export default Tip3;