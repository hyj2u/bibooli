import { useState } from 'react';
import Section from './section';
import Tab from '../component/tab';

function Total() {
    let [currentPage, changePage] = useState(0);
    return(
        <>
            <Tab changePage={changePage}/>
            <Section currentPage={currentPage}/>
        </>
    );
}

export default Total;