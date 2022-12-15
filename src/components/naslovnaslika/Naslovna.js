import Podmenu from './Podmenu.js'
import './naslovna.css';

function Naslovna({jezik, title, subtitle, buttonText, naslovnaSlika, audioRs, audioEng, audioGer, audioRus}) {
    return (

        <section  className='naslovna-container' style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(${naslovnaSlika})`}}>
            
            <div className='naslov-wrapper'>
            <h1 className='naslov'>{title}<br/>
                <span className='pnaslov'>{subtitle}</span><br/>
                {buttonText ? <a href='#igrica-container' className='obilazak'>{buttonText}</a>: ''}
            </h1>
                
            </div>
            <div className='naslovna-menu'><Podmenu jezik={jezik} audioRs={audioRs} audioEng={audioEng} audioGer={audioGer} audioRus={audioRus}/></div>
        </section>
    );
  }
  
  export default Naslovna;