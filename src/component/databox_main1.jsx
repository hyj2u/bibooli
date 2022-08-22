import './element.css';
import { BsArrowDown, BsArrowUp } from "react-icons/bs";

function Databox_main1() {
    const data = [
        {
          top : 'BTC Price @ 2022-08-15 05:00:00',
          middle : '24398.7',
          bottom : null
        }, 
        {
            top : 'Forecast @ 2022-08-16 05:00:00',
            middle : '24,220.8',
            bottom : -177.9
        }
    ]
    return(
        <div className='Pbox' style={{gap:'16px'}}>
        {data.map(function(a, i){
            return(
                <div key={i} className='Cbox6' style={{width:'334px'}}>
                    <span className='top' style={{width:'334px'}}>{a.top}</span>
                    <span className='middle' style={{width:'334px'}}>{a.middle}</span>
                    <span className='bottom' style={a.bottom>=0?{width:'334px', color:'#09B33D'}:{width:'104px', color:'#FF2B2B'}}>
                        {a.bottom!=null && a.bottom >= 0 && <BsArrowUp className='icon' style={{color:'#09B33D'}}/>}
                        {a.bottom!=null && a.bottom < 0 && <BsArrowDown className='icon' style={{color:'#FF2B2B'}}/>}
                    {a.bottom}</span>
                </div>
            );
        })}
        </div>
    );
}

export default Databox_main1;