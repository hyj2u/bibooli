import '../component/element.css';
import Subtitle from '../component/subtitle';
import Datatable3 from '../component/datatable3_1.jsx';
import color_card from '../component/color_card';

function Page1_nav1() {
    return(
        <div className='nav_contain'>
            <div className='card' style={{backgroundColor:color_card}}>
            <Subtitle subtitle={'Economic Calendar'}/>
            <Datatable3/>
            </div>
        </div>
    );
}

export default Page1_nav1;