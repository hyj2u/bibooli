import './banner.css';
import { BiChevronRight } from "react-icons/bi";
import './tab.css';
import './section.css';


function Banner() {
    return(
        <div className='banner'>
            <button onClick={()=>{
                var open_btn = document.querySelector('.tab_wrap')
                var section = document.querySelector('.section')
                open_btn.setAttribute('id', 'play_open')
                section.setAttribute('id', 'play_down')
            }}><BiChevronRight/></button>
        </div>
    );
}

export default Banner;