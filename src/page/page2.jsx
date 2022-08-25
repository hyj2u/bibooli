import '../component/element.css';
import Title from '../component/title';
import Subtitle from '../component/subtitle';
import Databox41 from '../component/databox4_1';
import Databox42 from '../component/databox4_2';
import Databox43 from '../component/databox4_3';
import color_card from '../component/color_card';

function Page2() {
    return(
        <div className='section'>
            <div className='container'>
                <Title title={'Page3 : Bitcoin_Score'}/>
                <div className='card' style={{backgroundColor:color_card}}>
                    <Subtitle subtitle={"1.Onchain_P&L_Score"}/>
                    <Databox41/>
<<<<<<< HEAD
                </div>
                <div className='card' style={{backgroundColor:color_card}}>
                    <Subtitle subtitle={'2.Market_Derivatives_Score'}/>
                    <Databox42/>
                </div>
                <div className='card' style={{backgroundColor:color_card}}>
=======
                    <Subtitle subtitle={'2.Market_Derivatives_Score'}/>
                    <Databox42/>
>>>>>>> 70fdc2f393cbc24f6ef662e7751a707d834cda39
                    <Subtitle subtitle={'3.Whale score'}/>
                    <Databox43/>
                </div>
            </div>
        </div>  
    );
}

export default Page2;