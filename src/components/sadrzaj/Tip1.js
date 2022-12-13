
import PropTypes from 'prop-types';
import './f1.css';
function Tip1({tekst, naslov}) {
    return (
        <section className='sadrzaj-container align'>
            <h1 className='naslov'>{naslov}</h1>
            <div className='sadrzaj-tekst'>
                    <p>
                        {tekst}
                    </p>
                    
            </div>
        </section>
    );
  }

  Tip1.defaultProps = {
    tekst: 'ucitava se',
    naslov: "",
  }

  Tip1.propTypes = {
    tekst: PropTypes.string,
    naslov: PropTypes.string,
  }
  
  export default Tip1;