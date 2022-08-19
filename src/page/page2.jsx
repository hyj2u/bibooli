import '../component/element.css';
import Title from '../component/title';
import Subtitle from '../component/subtitle';
import Databox4_1 from '../component/databox4_1';
import Databox4_2 from '../component/databox4_2';
import Databox4_3 from '../component/databox4_3';

function Page2() {
    return(
        <div className='section'>
            <div className='container'>
                <Title title={'Page3 : Bitcoin_Score'}/>
                <Subtitle subtitle={"1.Onchain_P&L_Score"}/>
                <Databox4_1/>
                <Subtitle subtitle={'2.Market_Derivatives_Score'}/>
                <Databox4_2/>
                <Subtitle subtitle={'3.Whale score'}/>
                <Databox4_3/>
            </div>
        </div>  
    );
}

export default Page2;