import Main from './main.jsx';
import Page1 from './page1.jsx';
import Page2 from './page2.jsx';
import Page3 from './page3.jsx';
import Page4 from './page4.jsx';
import '../index.js'

function Section(props) {
    if (props.currentPage == 0) {
        return(<Main/>);
    } else if (props.currentPage == 1) {
        return(<Page1/>);
    } else if (props.currentPage == 2) {
        return(<Page2/>);
    } else if (props.currentPage == 3) {
        return(<Page3/>);
    } else if (props.currentPage == 4) {
        return(<Page4/>);
    }
}

export default Section;