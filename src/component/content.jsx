import './element.css';

function Content(props) {
    return(
        <p className='content'>
            {props.content}
        </p>
    );
}

export default Content;