
import PropTypes from 'prop-types';
import './f1.css';
function Tip4({tekst, naslov, nemaSlika}) {
  const sadrzajformat = {
    maxWidth: "1100px"
    
  }

    return (
        <section className='sadrzaj-container tip4-tekst align' style={nemaSlika ? sadrzajformat : {}}>
              
              {naslov? <h1 className='naslov'>{naslov}</h1>:<></>}
            <div className='sadrzaj-tekst tip4-tekst' >
                    <p>
                        {tekst}
                    </p>
                    
            </div>
        </section>
    );
  }

  Tip4.defaultProps = {
    tekst: 'ucitava se',
    naslov: '',
  }

  Tip4.propTypes = {
    tekst: PropTypes.string,
    naslov: PropTypes.string,
  }
  
  export default Tip4;