import './datatable.css';

function Datatable1_2() {
    const data = [
        {
            head : null,
            content : 'FF(bp)'
        },
        {
            head: 'LINK/USD',
            content: '-1.4117'
        },
        {
            head: 'TRX/USD',
            content: '-1.0925'
        },
        {
            head: 'FTM/USD',
            content: '-0.6352'
        },
        {
            head: 'BCH/USD',
            content: '-0.5974'
        },
        {
            head: 'BNB/USD',
            content: '0.0000'
        },
    ]
    return(
        <table>
        <tr className='datatable1_1'>
            {
                data.map(function(a, i){
                    return(
                        <th key={i} className='head1' style={i===0 ? {width:'88px'}:null}>{a.head}</th>
                    );
                })
            }
            {
                data.map(function(a, i){
                    return(
                        <td key={i} className='content1' style={i===0 ? {color:'#FAFAFA99', textAlign:'left', width:'88px'}:null}>{a.content}</td>
                    );
                })
            }
        </tr>
        </table>
    );
}

export default Datatable1_2;