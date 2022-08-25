import '../component/element.css';
import Title from '../component/title.jsx';
import Nav from '../component/nav.jsx'
import Page1Nav1 from './page1_nav1.jsx';
import Page1Nav2 from './page1_nav2.jsx';
import Page1Nav3 from './page1_nav3.jsx';
import Page1Nav4 from './page1_nav4.jsx';
import { useState } from 'react';
import color_card from '../component/color_card';

function Page1() {
    var nav_lst = ['Exon Cal', 'Upbit', 'Bithumb', 'Korbit'];
    var nav_state = [true, false, false, false];
    let [nav_page, changeNavPage] = useState(0);
    return(
        <div className='section'>
            <div className='container'>
                <Title title={'Page2: Economic Calendar & Disclosure'}/>
<<<<<<< HEAD
=======
                <div className='card' style={{backgroundColor:color_card}}>
>>>>>>> 70fdc2f393cbc24f6ef662e7751a707d834cda39
                    <Nav list={nav_lst} state={nav_state} changeNavPage={changeNavPage} width={50}/>
                    {nav_page===0 && <Page1Nav1/>}
                    {nav_page===1 && <Page1Nav2/>}
                    {nav_page===2 && <Page1Nav3/>}
                    {nav_page===3 && <Page1Nav4/>}
<<<<<<< HEAD
=======
                </div>
>>>>>>> 70fdc2f393cbc24f6ef662e7751a707d834cda39
            </div>
        </div>  
    );
}

export default Page1;