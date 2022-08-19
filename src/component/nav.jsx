import './nav.css';
import { useState, useRef } from 'react';

function Nav(props) {
    var marker = useRef(null);
    let [navLst, changeNavLst] = useState(props.list);
    let [color, changeColor] = useState(props.state);
    return(
        <div>
            <div className='marker' ref={marker} style={{left:'0', width:props.width}}></div>
            <div className='nav'>
                {
                    navLst.map(function(a, i){
                        return(
                        <span key={i} onClick={(e)=>{
                            console.log(e.target.offsetLeft);
                            console.log(e.target.offsetWidth);
                            marker.current.style.width = e.target.offsetWidth+'px';
                            marker.current.style.left = e.target.offsetLeft+'px';
                            var newArr = [false, false, false];
                            newArr[i] = true
                            changeColor(newArr); 
                            props.changeNavPage(i);
                        }} style={color[i]?{color:'#E63B37'}:{color:'#FFFFFF'}}>{a}</span>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Nav;