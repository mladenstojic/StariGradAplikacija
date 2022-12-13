import {useState, useEffect} from 'react';
import './naslovna.css';


function Podmenu({jezik, audioRs, audioEng, audioGer, audioRus}) {
    const[audio, setAudio] = useState()    

    useEffect(()=> {
        const getAudio = async()=>{
          
            if(jezik==="RS"){
                setAudio(audioRs)
            }else if(jezik==="GB")
            {
                setAudio(audioEng)
            }else if(jezik==="DE")
            {
                setAudio(audioGer)
            }else if(jezik==="RU")
            {
                setAudio(audioRus)
            }
        }
    
        getAudio()
      },[jezik])

    return (
        <div className='sec-nav'>
            <audio controls src={audio}/>
        </div>
    );
  }
  

  export default Podmenu;