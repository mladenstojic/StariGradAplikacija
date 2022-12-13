import { FaChevronLeft, FaChevronRight} from "react-icons/fa";
import './galerija.css'


const Modul = ({selektovanaSlika, listanjeDesno,listanjeLevo, setSelektovanaSlika}) => {
   
   const klikni = (e) => {
    
    if(e.target.classList.contains("dismiss")) {
        setSelektovanaSlika(null)
    }
   }
    return (
        <>
    <div className="overlay dismiss" onClick={klikni}>
            <img src={selektovanaSlika} alt="slika"/>
            <span className="dismiss" onClick={klikni} size={30}>X</span>
            
        </div>
            <button onClick={listanjeLevo} style={{position:"fixed"}} className='carousel-element-btn leva'>
                <FaChevronLeft size={42}/>
            </button>
            <button onClick={listanjeDesno} style={{position:"fixed"}} className='carousel-element-btn desna'>
                <FaChevronRight size={42}/>
            </button>
            
        </>
        
        )
    
}
export default Modul