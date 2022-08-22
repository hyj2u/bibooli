import '../component/element.css';
import Title from '../component/title';
import Subtitle from '../component/subtitle';
import Textbox1 from '../component/textbox1';
import TextboxClose1 from '../component/textbox_close1';
import Content from '../component/content';
import { useState } from 'react';
import LineChart from '../component/linechart1';
import BarChart from '../component/barchart1.jsx';

function Page3() {
    let [clickstate, changeClick] = useState(true);
    return(
        <div className='section'>
            <div className='container'>
                <Title title={'Page4 : Ethereum Monitoring'}/>
                <Subtitle subtitle={'1.DAI - Algorithmic stablecoin'}/>
                {clickstate===true?<Textbox1 clickstate={clickstate} changeClick={changeClick}/>:<TextboxClose1 clickstate={clickstate} changeClick={changeClick}/>}
                <Content content={'<TOTAL RISKY DEBT(%)>'}/>
                <LineChart/>
                <BarChart/>
            </div>
        </div>  
    );
}

export default Page3;