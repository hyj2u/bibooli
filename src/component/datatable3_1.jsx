import './datatable.css';

function Datatable3_1() {
    const data = [
        {
            time : null,
            event : 'event',
            actual : 'actual',
            forecast : 'forecast',
            previous : 'previous'
        },
        {
            time : '2022-08-15 21:30(Mon)',
            event : 'NY Empire State Manufacturing Index (Aug)',
            actual : '<NA>',
            forecast : '5.50',
            previous : '11.10'
        },
        {
            time : '2022-08-16 05:00(Tue)',
            event : 'TIC Net Long-Term Transactions (Jun)',
            actual : '<NA>',
            forecast : '<NA>',
            previous : '155.3B'
        },
        {
            time : '2022-08-16 21:30(Tue)',
            event : 'Building Permits (MoM) (Jul)',
            actual : '<NA>',
            forecast : '<NA>',
            previous : '0.1%'
        },
        {
            time : '2022-08-16 21:30(Tue)',
            event : 'Building Permits (Jul)',
            actual : '<NA>',
            forecast : '1.640M',
            previous : '1.696M'
        },
        {
            time : '2022-08-16 21:30(Tue)',
            event : 'Housing Starts (Jul)',
            actual : '<NA>',
            forecast : '1.540M',
            previous : '1.559M'
        },
        {
            time : '2022-08-16 21:30(Tue)',
            event : 'Housing Starts (MoM) (Jul)',
            actual : '<NA>',
            forecast : '<NA>',
            previous : '-0.2%'
        },
        {
            time : '2022-08-16 22:15(Tue)',
            event : 'Industrial Production (YoY) (Jul)',
            actual : '<NA>',
            forecast : '<NA>',
            previous : '4.16%'
        },
        {
            time : '2022-08-16 22:15(Tue)',
            event : 'Industrial Production (MoM) (Jul)',
            actual : '<NA>',
            forecast : '0.3%',
            previous : '-0.2%'
        },
        {
            time : '2022-08-17 05:30(Wed)',
            event : 'API Weekly Crude Oil Stock',
            actual : '<NA>',
            forecast : '<NA>',
            previous : '2.156M'
        },
        {
            time : '2022-08-17 21:30(Wed)',
            event : 'Core Retail Sales (MoM) (Jul)',
            actual : '<NA>',
            forecast : '-0.1%',
            previous : '1.0%'
        },
        {
            time : '2022-08-17 21:30(Wed)',
            event : 'Retail Sales (MoM) (Jul)',
            actual : '<NA>',
            forecast : '0.1%',
            previous : '1.0%'
        },
        {
            time : '2022-08-17 22:30(Wed)',
            event : 'FOMC Member Bowman Speaks',
            actual : '<NA>',
            forecast : '<NA>',
            previous : '<NA>'
        },
        {
            time : '2022-08-17 23:00(Wed)',
            event : 'Business Inventories (MoM) (Jun)',
            actual : '<NA>',
            forecast : '1.4%',
            previous : '1.4%'
        },
        {
            time : '2022-08-17 23:00(Wed)',
            event : 'Retail Inventories Ex Auto (Jun)',
            actual : '<NA>',
            forecast : '<NA>',
            previous : '1.6%'
        },
        {
            time : '2022-08-17 23:30(Wed)',
            event : 'Crude Oil Inventories',
            actual : '<NA>',
            forecast : '<NA>',
            previous : '5.458M'
        },
        {
            time : '2022-08-17 23:30(Wed)',
            event : 'Cushing Crude Oil Inventories',
            actual : '<NA>',
            forecast : '<NA>',
            previous : '0.723M'
        },
        {
            time : '2022-08-18 02:00(Thu)',
            event : '20-Year Bond Auction',
            actual : '<NA>',
            forecast : '<NA>',
            previous : '3.488%'
        },
        {
            time : '2022-08-18 03:00(Thu)',
            event : 'FOMC Meeting Minutes',
            actual : '<NA>',
            forecast : '<NA>',
            previous : '<NA>'
        },
        {
            time : '2022-08-18 03:20(Thu)',
            event : 'FOMC Member Bowman Speaks',
            actual : '<NA>',
            forecast : '<NA>',
            previous : '<NA>'
        },
        {
            time : '2022-08-18 21:30(Thu)',
            event : 'Initial Jobless Claims',
            actual : '<NA>',
            forecast : '265K',
            previous : '262K'
        },
        {
            time : '2022-08-18 21:30(Thu)',
            event : 'Philadelphia Fed Manufacturing Index (Aug)',
            actual : '<NA>',
            forecast : '-5.0',
            previous : '-12.3'
        },
        {
            time : '2022-08-18 21:30(Thu)',
            event : 'Philly Fed Employment (Aug)',
            actual : '<NA>',
            forecast : '<NA>',
            previous : '19.4'
        },
        {
            time : '2022-08-18 23:00(Thu)',
            event : 'Existing Home Sales (Jul)',
            actual : '<NA>',
            forecast : '4.88M',
            previous : '5.12M'
        },
        {
            time : '2022-08-18 23:00(Thu)',
            event : 'Existing Home Sales (MoM) (Jul)',
            actual : '<NA>',
            forecast : '<NA>',
            previous : '-5.4%'
        },
        {
            time : '2022-08-19 02:20(Fri)',
            event : 'FOMC Member George Speaks',
            actual : '<NA>',
            forecast : '<NA>',
            previous : '<NA>'
        },
        {
            time : '2022-08-20 04:30(Sat)',
            event : 'CFTC Crude Oil speculative net positions',
            actual : '<NA>',
            forecast : '<NA>',
            previous : '210.7K'
        },
        {
            time : '2022-08-20 04:30(Sat)',
            event : 'CFTC Gold speculative net positions',
            actual : '<NA>',
            forecast : '<NA>',
            previous : '142.9K'
        },
        {
            time : '2022-08-20 04:30(Sat)',
            event : 'CFTC Nasdaq 100 speculative net positions',
            actual : '<NA>',
            forecast : '<NA>',
            previous : '21.1K'
        },
        {
            time : '2022-08-20 04:30(Sat)',
            event : 'CFTC S&P 500 speculative net positions',
            actual : '<NA>',
            forecast : '<NA>',
            previous : '-244.3K'
        }
    ]
    return(
        <div className='datatable3_1'>
            {
                data.map(function(a, i){
                    return(
                        <>
                            <span key={i} className='time3_1'>{a.time}</span>
                            <span key={i} className='event3_1'>{a.event}</span>
                            <span key={i} className='actual3_1'>{a.actual}</span>
                            <span key={i} className='forecast3_1'>{a.forecast}</span>
                            <span key={i} className='previous3_1'>{a.previous}</span>
                        </>
                    );
                })
            }
        </div>
    );
}

export default Datatable3_1;