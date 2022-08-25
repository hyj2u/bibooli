import './element.css'
import { BsCaretDownFill } from "react-icons/bs";

function Textbox1(props) {
    const data = [
        {
            left : '"timestamp"',
            right: '"2022-08-13"'
        },
        {
            left : '"Total DAI"',
            right: '"7,312,134,322 USD"'
        },
        {
            left : '"Total Risky Debt(%)"',
            right:'"13.7% (1,004,967,004 USD)"'
        },
        {
            left : '"High Risky Debt(%)"',
            right:'"0.1% (3,980,000 USD)"'
        },
        {
            left : '"Mid Risky Debt(%)"',
            right: '"3.3% (239,130,000 USD)"'
        },
        {
            left : '"Low Risky Debt(%)"',
            right:'"10.4% (763,160,000 USD)"'
        }
    ]
    return(
        <div className='Tbox'>
            <span className='close_down' onClick={()=>{
                props.changeClick(false);
            }}><BsCaretDownFill/></span>
            <span style={{marginLeft:'3px'}}>&#123;</span>
            {
                data.map(function(a, i){
                    return(
                        <div key={i} className='tbox'>
                            <span style={{color:'#F9F8F5'}}>{a.left}</span>
                            <span>:</span>
                            <span style={{color:'#FDD43F'}}>{a.right}</span>
                        </div>
                    );
                })
            }
            <span style={{marginLeft:'3px'}}>&#125;</span>
        </div>
    );
}

export default Textbox1;