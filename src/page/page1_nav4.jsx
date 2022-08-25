import '../component/element.css';
import Subtitle from '../component/subtitle';
import Datatable6 from '../component/datatable6_1.jsx';
import color_card from '../component/color_card';

function Page1_nav4() {
    return(
        <div className='nav_contain'>
            <div className='card' style={{backgroundColor:color_card}}>
            <Subtitle subtitle={'Korbit Disclosure'}/>
            <Datatable6/>
            </div>
        </div>
    );
}

export default Page1_nav4;