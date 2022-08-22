import './element.css';
import { BsCaretRightFill } from "react-icons/bs";

function Textbox_close1(props) {
    return(
        <div className='closebox'>
            <span className='close_right' onClick={()=>{
                props.changeClick(true);
            }}><BsCaretRightFill/></span>
            <span>&#123;</span>
            <span style={{color:'#FD971F', fontSize:'18px'}}>...</span>
            <span>&#125;</span>
        </div>
    );
}

export default Textbox_close1;