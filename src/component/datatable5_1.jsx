import './datatable.css';

function DataTable5_1() {
    const data = [
        {
            time : null,
            title: 'title'
        },
        {
            time : '2022-08-14 16:39',
            title: '[안내] 모바일 APP 접속 일시 지연 안내 (정상화)'
        },
        {
            time : '2022-08-14 16:16',
            title: '[안내] 모바일 APP 접속 일시 지연 안내'
        },
        {
            time : '2022-08-12 11:01',
            title: '[입출금] 빗썸 원화 출금 점검시간 변경 안내'
        },
        {
            time : '2022-08-09 18:20',
            title: '[점검] 경찰청/도로교통공단 작업으로 인한 운전면허증 진위확인 서비스 일시 중단 안내'
        },
        {
            time : '2022-08-09 16:00',
            title: "[이벤트] 7월 '첫' 입금 이벤트 지급 안내"
        },
        {
            time : '2022-08-09 12:0',
            title: '[안내] 출금 가능 해외 거래소 변경사항 안내'
        },
        {
            time : '2022-08-09 10:3',
            title: '[안내] 트론(TRX), 비트토렌트(BTT), 저스트(JST), 윙크(WIN) 보유자 대상 에이피이앤에프티(NFT) 15차 에어드랍 지원 안내'
        },
        {
            time : '2022-08-08 11:00',
            title: '[신규서비스] 폴카닷(DOT) 스테이킹 서비스 오픈 안내'
        },
        {
            time : '2022-08-06 11:17',
            title: '[안내] 일부 가상자산의 증권성 여부 검토에 관한 디지털 자산 거래소 공동협의체(DAXA)의 입장 안내'
        },
        {
            time : '2022-08-05 08:53',
            title: '[투자유의] 폴라리스 쉐어(POLA) 투자유의종목 지정 해제'
        }
    ]
    return(
        <div className='datatable5_1'>
            {
                data.map(function(a,i){
                    return(
                        <tr key={i}>
                            <td className='time5_1' key={i}><p className='box'>{a.time}</p></td>
                            <td className='title5_1' key={i}><p className='box'>{a.title}</p></td>
                        </tr>
                    );
                })
            }
        </div>
    );
}

export default DataTable5_1;
