import '../component/element.css';
import Subtitle from '../component/subtitle.jsx';
import Content from '../component/content.jsx';
import Datatable1 from '../component/datatable1_1.jsx';
import Datatable2 from '../component/datatable1_2.jsx';
import color_card from '../component/color_card';

function Main_nav2() {
    return(
        <div className='nav_contain'>
            <div className='card' style={{backgroundColor:color_card}}>
            <Subtitle subtitle={'Funding Rates'}/>
            <Content content={'<Binance_last update: 2022-08-15 13:21:00>'}/>
            <Content content={'-Best 5'}/>
            <Datatable1/>
            <Content content={'-Worst 5'}/>
            <Datatable2/>
            </div>
        </div>
    );
}

export default Main_nav2;