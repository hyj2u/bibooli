import '../component/element.css';
import Title from '../component/title';
import Subtitle from '../component/subtitle';
import Textbox2 from '../component/textbox2';
import TextboxClose2 from '../component/textbox_close1';
import { useState } from 'react';
import Content from '../component/content';
import LineChart from '../component/linechart2.jsx';
import BarChart from '../component/barchart2.jsx';

function Page4() {
    let [clickstate, changeClick] = useState(true);
    return(
        <div className='section'>
            <div className='container'>
                <Title title={'Page5 : Risk on Tron'}/>
                <Subtitle subtitle={'1.USDD - Algorithmic stablecoin'}/>
                {clickstate===true?<Textbox2 clickstate={clickstate} changeClick={changeClick}/>:<TextboxClose2 clickstate={clickstate} changeClick={changeClick}/>}
                <Content content={'<USDD Collateral ratio(%)>'}/>
                <div id="vis"></div>
                <LineChart/>
                <BarChart/>
            </div>
        </div>  
    );
}

export default Page4;