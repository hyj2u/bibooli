import './element.css';
import { BsArrowDown, BsArrowUp } from "react-icons/bs";

function Databox4_1 () {
    const data = [
        {
          top : 'score',
          middle : '81',
          bottom : null
        }, 
        {
            top : 'mvrv',
            middle : '1.12',
            bottom : 0.00
        },
        {
            top : 'sopr_ratio',
            middle : '0.62',
            bottom : 0.01
        },
        {
            top : 'puell_multiple',
            middle : '0.56',
            bottom : -0.05
        },
        {
            top : 'utxo in profit(%)',
            middle : '76.57',
            bottom : -0.21
        },
        {
            top : 'mining_density',
            middle : '9.01',
            bottom : -0.16
        }
    ]
    console.log(data);
    return(
        <div className='Pbox' style={{gap:'16px'}}>
        {data.map(function(a, i){
            return(
                <div key ={i} className='Cbox6' style={{width:'120px'}}>
                    <span className='top' style={{width:'120px'}}>{a.top}</span>
                    <span className='middle' style={{width:'120px'}}>{a.middle}</span>
                    <span className='bottom' style={a.bottom >= 0?{width:'120px', color:'#00AB55'}:{width:'120px', color:'#FC4B6C'}}>
                        {a.bottom!=null && a.bottom >= 0 && <BsArrowUp className='icon' style={{color:'#00AB55'}}/>}
                        {a.bottom!=null && a.bottom < 0 && <BsArrowDown className='icon' style={{color:'#FC4B6C'}}/>}
                    {a.bottom}</span>
                </div>
            );
        })}
        </div>
    );
}

export default Databox4_1;