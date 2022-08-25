import './element.css';
import { BsArrowDown, BsArrowUp } from "react-icons/bs";

function Databox4_2 () {
    const data = [
        {
          top : 'score',
          middle : '27',
          bottom : null
        }, 
        {
            top : 'Open interest RSI(14d)',
            middle : '61.32',
            bottom : 1.68
        },
        {
            top : 'Funding rates(PERP,8h)',
            middle : '0.62bp',
            bottom : 0.01
        },
        {
            top : 'DVOL_EOD',
            middle : '70.36%',
            bottom : -0.24
        }
    ]
    return(
        <div className='Pbox' style={{gap:'16px'}}>
        {data.map(function(a, i){
            return(
                <div key={i} className='Cbox6' style={{width:'185px'}}>
                    <span className='top' style={{width:'185px'}}>{a.top}</span>
                    <span className='middle' style={{width:'185px'}}>{a.middle}</span>
                    <span className='bottom' style={a.bottom >= 0?{width:'185px', color:'#00AB55'}:{width:'185px', color:'#FC4B6C'}}>
                        {a.bottom!=null && a.bottom >= 0 && <BsArrowUp className='icon' style={{color:'#00AB55'}}/>}
                        {a.bottom!=null && a.bottom < 0 && <BsArrowDown className='icon' style={{color:'#FC4B6C'}}/>}
                    {a.bottom}</span>
                </div>
            );
        })}
        </div>
    );
}

export default Databox4_2;