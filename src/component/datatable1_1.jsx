import './datatable.css';

function Datatable1_1() {
    const data = [
        {
            head : null,
            content : 'FF(bp) '
        },
        {
            head: 'UNI/USD	',
            content: '1.0000'
        },
        {
            head: 'RUNE/USD',
            content: '1.0000'
        },
        {
            head: 'XRP/USD',
            content: '1.0000'
        },
        {
            head: 'AAVE/USD',
            content: '1.0000'
        },
        {
            head: 'GALA/USD',
            content: '1.0000'
        },
    ]
    return(
        <div className='datatable1_1'>
            {
                data.map(function(a, i){
                    return(
                        <span key={i} className='head1' style={i===0 ? {width:'88px'}:null}>{a.head}</span>
                    );
                })
            }
            {
                data.map(function(a, i){
                    return(
                        <span key={i} className='content1' style={i===0 ? {color:'#FAFAFA99', textAlign:'left', width:'88px'}:null}>{a.content}</span>
                    );
                })
            }
        </div>
    );
}

export default Datatable1_1;