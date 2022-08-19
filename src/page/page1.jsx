import '../component/element.css';
import Title from '../component/title.jsx';
import Nav from '../component/nav.jsx'
import Page1_nav1 from './page1_nav1.jsx';
import Page1_nav2 from './page1_nav2.jsx';
import Page1_nav3 from './page1_nav3.jsx';
import Page1_nav4 from './page1_nav4.jsx';
import { useState } from 'react';

function Page1() {
    var nav_lst = ['Exon Cal', 'Upbit', 'Bithumb', 'Korbit'];
    var nav_state = [true, false, false, false];
    let [nav_page, changeNavPage] = useState(0);
    return(
        <div className='section'>
            <div className='container'>
                <Title title={'Page2: Economic Calendar & Disclosure'}/>
                <Nav list={nav_lst} state={nav_state} changeNavPage={changeNavPage} width={50}/>
                {nav_page==0 && <Page1_nav1/>}
                {nav_page==1 && <Page1_nav2/>}
                {nav_page==2 && <Page1_nav3/>}
                {nav_page==3 && <Page1_nav4/>}
            </div>
        </div>  
    );
}

export default Page1;