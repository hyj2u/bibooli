import '../component/element.css';
import Subtitle from '../component/subtitle';
import Databox_main1 from '../component/databox_main1.jsx';

function Main_nav1() {
    return(
        <div className='nav_contain'>
            <Subtitle subtitle={'BTC Forecasting(by neuralprophet)'}/>
            <Databox_main1/>
        </div>
    );
}

export default Main_nav1;