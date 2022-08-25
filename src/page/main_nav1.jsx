import '../component/element.css';
import Subtitle from '../component/subtitle';
import DataboxMain1 from '../component/databox_main1.jsx';
import color_card from '../component/color_card';

function Main_nav1() {
    return(
        <div className='nav_contain'>
            <div className='card' style={{backgroundColor:color_card}}>
            <Subtitle subtitle={'BTC Forecasting(by neuralprophet)'}/>
            <DataboxMain1/>
            </div>
        </div>
    );
}

export default Main_nav1;