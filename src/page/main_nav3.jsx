import '../component/element.css';
import Subtitle from '../component/subtitle.jsx';
import Content from '../component/content.jsx';
import Datatable2 from '../component/datatable2_1';
import color_card from '../component/color_card';

function Main_nav3() {
    return(
        <div className='nav_contain'>
            <div className='card' style={{backgroundColor:color_card}}>
            <Subtitle subtitle={'Daily BTC Global Premium'}/>
            <Content content={'< BASE PRICE : Binance 24303.14 (2022-08-14) >'}/>
            <Datatable2/>
            </div>
        </div>
    );
}

export default Main_nav3;