import './datatable.css';

function Datatable2_1() {
    const data = [
        {
            head : null,
            content : 'premium'
        },
        {
            head: 'UAH',
            content: '7.7%'
        },
        {
            head: 'KIMCHI',
            content: '2.9%'
        },
        {
            head: 'RUB',
            content: '2.6%'
        },
        {
            head: 'BRL',
            content: '0.7%'
        },
        {
            head: 'TRY',
            content: '0.6%'
        },
        {
            head: 'IDR',
            content: '0.5%'
        },
        {
            head: 'EUR',
            content: '0.2%'
        },
        {
            head: 'AUD',
            content: '0.1%'
        },
        {
            head: 'GBP',
            content: '0.1%'
        },
        {
            head: 'Coinbase_USD',
            content: '0.1%'
        }
    ]
    return(
        <div className='datatable1_1'>
            {
                data.map(function(a, i){
                    return(
                        <span key={i} className='head2' style={i===0 ? {width:'72px'}:(i===data.length-1?{width:'107px'}:null)}>{a.head}</span>
                    );
                })
            }
            {
                data.map(function(a, i){
                    return(
                        <span key={i} className='content2' style={i===0 ? {width:'72px'}:(i===data.length-1?{width:'107px'}:null)}>{a.content}</span>
                    );
                })
            }
        </div>
    );
}

export default Datatable2_1;