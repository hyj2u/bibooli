import '../component/section.css';
import Title from '../component/title.jsx';
import Nav from '../component/nav.jsx';
import Main_nav1 from './main_nav1.jsx';
import Main_nav2 from './main_nav2.jsx';
import Main_nav3 from './main_nav3.jsx';
import { useState } from 'react';

function Main() {
    var nav_lst = ['BTC Foreacasting', 'Funding Rates', 'Daily BTC Global Premium'];
    var nav_state = [true, false, false, false, false];
    let [nav_page, changeNavPage] = useState(0);
    return(
        <div className='section'>
            <div className='container'>
                <Title title='Main : Market Monitoring'/>
                <Nav list={nav_lst} state={nav_state} changeNavPage={changeNavPage} width={100}/>
                {nav_page==0 && <Main_nav1/>}
                {nav_page==1 && <Main_nav2/>}
                {nav_page==2 && <Main_nav3/>}
            </div>
        </div>  
    );
}

export default Main;