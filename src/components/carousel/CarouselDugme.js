import './carousel.css';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function CarouselDugme({strelica, promeni}) {

    return (
        <div>
            <button onClick={promeni} className={strelica ==="leva"? 'carousel-element-btn leva':'carousel-element-btn desna'}>
                {strelica ==="leva" ? <FaChevronLeft size={42}/>:<FaChevronRight size={42}/>}
            </button>
        </div>
    );
  }
  
  export default CarouselDugme;