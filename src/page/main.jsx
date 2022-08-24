import '../component/section.css';
import Title from '../component/title.jsx';
import Nav from '../component/nav.jsx';
import MainNav1 from './main_nav1.jsx';
import MainNav2 from './main_nav2.jsx';
import MainNav3 from './main_nav3.jsx';
import { useState } from 'react';
import color_card from '../component/color_card';

function Main() {
    var nav_lst = ['BTC Foreacasting', 'Funding Rates', 'Daily BTC Global Premium'];
    var nav_state = [true, false, false, false, false];
    let [nav_page, changeNavPage] = useState(0);
    return(
        <div className='section'>
            <div className='container'>
                <Title title='Main : Market Monitoring'/>
                <div className='card' style={{backgroundColor:color_card}}>
                    <Nav list={nav_lst} state={nav_state} changeNavPage={changeNavPage} width={100}/>
                    {nav_page===0 && <MainNav1/>}
                    {nav_page===1 && <MainNav2/>}
                    {nav_page===2 && <MainNav3/>}
                </div>
            </div>
        </div>  
    );
}

export default Main;