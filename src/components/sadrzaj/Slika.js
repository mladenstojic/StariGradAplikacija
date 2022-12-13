
import PropTypes from 'prop-types';
import './f1.css';
function Slika({slika,usko}) {
    return (
        <section className='sadrzaj-container' style={usko?{padding: '0',maxWidth: '1100px'}:{padding: '0',maxWidth: '1300px'}}>
            <img className='sadrzaj-container-slika' src={slika} alt={slika}/>
        </section>
    );
  }

  Slika.defaultProps = {
    slika: "",
  }

  Slika.propTypes = {
    slika: PropTypes.string
  }
  
  export default Slika;