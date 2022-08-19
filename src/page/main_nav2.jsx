import '../component/element.css';
import Subtitle from '../component/subtitle.jsx';
import Content from '../component/content.jsx';
import Datatable1_1 from '../component/datatable1_1.jsx';
import Datatable1_2 from '../component/datatable1_2.jsx';

function Main_nav2() {
    return(
        <div className='nav_contain'>
            <Subtitle subtitle={'Funding Rates'}/>
            <Content content={'<Binance_last update: 2022-08-15 13:21:00>'}/>
            <Content content={'-Best 5'}/>
            <Datatable1_1/>
            <Content content={'-Worst 5'}/>
            <Datatable1_2/>
        </div>
    );
}

export default Main_nav2;