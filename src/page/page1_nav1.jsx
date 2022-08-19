import '../component/element.css';
import Subtitle from '../component/subtitle';
import Datatable3_1 from '../component/datatable3_1.jsx';

function Page1_nav1() {
    return(
        <div className='nav_contain'>
            <Subtitle subtitle={'Economic Calendar'}/>
            <Datatable3_1/>
        </div>
    );
}

export default Page1_nav1;