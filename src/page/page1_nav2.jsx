import '../component/element.css';
import Subtitle from '../component/subtitle';
import Datatable4 from '../component/datatable4_1.jsx';
import color_card from '../component/color_card';

function Page1_nav2() {
    return(
        <div className='nav_contain'>
            <div className='card' style={{backgroundColor:color_card}}>
            <Subtitle subtitle={'Upbit Disclosure'}/>
            <Datatable4/>
            </div>
        </div>
    );
}

export default Page1_nav2;