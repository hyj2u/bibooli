import './tab.css';
import './section.css';
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import '../index.js'


function Tab(props) {
    let [lst] = useState(['main page', 'page2 cal&disc','page3 bitcoin', 'page4 ethereum', 'page5 tron']);
    let [isClick, changeIsClick] = useState([true, false, false, false, false]);
    return(
        <div className='tab_wrap'>
            <div>
                <button onClick={()=>{
                    var close_btn = document.querySelector('.tab_wrap')
                    var section = document.querySelector('.section')
                    close_btn.setAttribute('id', 'play_close')
                    section.setAttribute('id', 'play_up')
                }}><IoMdClose/></button>
            </div>
            <ul className='list'>
                {
                    lst.map(function(a, i){
                        return (
                                <a key={i} href="htts://nice.co.kr"
                                onClick={()=>{
                                    var newArr = [false, false, false, false, false];
                                    newArr[i] = true;
                                    changeIsClick(newArr);
                                    props.changePage(i);
                                }} style={isClick[i]?{color:'white', backgroundColor:'#3A3B46', fontWeight:'600'}: {color:'white', backgroundColor:'#262730'}}>
                                    <FaRegFileAlt className='icon'/> 
                                    <span>{a}</span>
                                </a>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default Tab;