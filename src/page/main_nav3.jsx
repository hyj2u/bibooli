import '../component/element.css';
import Subtitle from '../component/subtitle.jsx';
import Content from '../component/content.jsx';
import Datatable2 from '../component/datatable2_1';

function Main_nav3() {
    return(
        <div className='nav_contain'>
            <Subtitle subtitle={'Daily BTC Global Premium'}/>
            <Content content={'< BASE PRICE : Binance 24303.14 (2022-08-14) >'}/>
            <Datatable2/>
        </div>
    );
}

export default Main_nav3;