import '../component/element.css';
import Subtitle from '../component/subtitle';
import Datatable5 from '../component/datatable5_1';
import color_card from '../component/color_card';

function Page1_nav3() {
    return(
        <div className='nav_contain'>
            <div className='card' style={{backgroundColor:color_card}}>
            <Subtitle subtitle={'Bithumb Disclosure'}/>
            <Datatable5/>
            </div>
        </div>
    );
}

export default Page1_nav3;