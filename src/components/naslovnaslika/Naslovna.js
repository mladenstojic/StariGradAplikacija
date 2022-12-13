import Podmenu from './Podmenu.js'
import './naslovna.css';

function Naslovna({jezik, tekst, dugme, naslovnaSlika, audioRs, audioEng, audioGer, audioRus}) {


    return (

        <section  className='naslovna-container' style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(${naslovnaSlika})`}}>
            
            <div className='naslov-wrapper'>
            <h1 className='naslov'>{tekst.tekstPrekoNaslovneSlikenaslov}<br/>
                <span className='pnaslov'>{tekst.tekstPrekoNaslovneSlikepodnaslov}</span><br/>
                {dugme ? <a href='#igrica-container' className='obilazak'>{tekst.dugmeNaNaslovnojSlici}</a>: ''}
            </h1>
                
            </div>
            <div className='naslovna-menu'><Podmenu jezik={jezik} audioRs={audioRs} audioEng={audioEng} audioGer={audioGer} audioRus={audioRus}/></div>
        </section>
    );
  }
  
  export default Naslovna;