import './element.css';
import { BsCaretDownFill } from "react-icons/bs";

function Textbox2(props) {
    const data = [
        {
            left : '"timestamp"',
            right: '"2022-08-13"'
        },
        {
            left : '"Total USDD"',
            right: '"725,332,140 USD Collateral(221.49%)"'
        },
        {
            left : '"Collaterals"',
            right:'"BTC(47.31%) USDT(19.30%) USDC(136.49%) TRX(18.38%) "'
        },
        {
            left : '"Trx Market cap / USDD"',
            right:'"890%"'
        },
        {
            left : '"Curve_TVL"',
            right: '"USDD: 24,105,335USD (56%) 3POOL: 18,736,491USD (44%)"'
        },
        {
            left : '"Price"',
            right:'"CurveFi(DEX): 0.9998 HUOBI(CEX): 0.9980 "'
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
                            <span style={{color:'#FD971F'}}>{a.right}</span>
                        </div>
                    );
                })
            }
            <span style={{marginLeft:'3px'}}>&#125;</span>
        </div>
    );
}

export default Textbox2;