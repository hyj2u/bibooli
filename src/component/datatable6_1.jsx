import './datatable.css';

function Datatable6_1() {
    const data = [
        {
            time: null,
            title: 'title'
        },
        {
            time: '2022-08-12 15:0',
            title: '[공지] 코빗 이더리움 2.0 스테이킹 34차 안내'
        },
        {
            time: '2022-08-12 11:16',
            title: '[당첨자 발표] 1차 AMA 라이브챗 이벤트 당첨자 안내'
        },
        {
            time: '2022-08-11 22:41',
            title: '[공지] 인젝티브프로토콜(INJ) 거래 유의 안내'
        },
        {
            time: '2022-08-11 15:28',
            title: '[점검완료]_[공지] 원화 출금 서비스 점검 안내'
        },
        {
            time: '2022-08-11 14:55',
            title:'[공지] 원화 출금 서비스 점검 안내'
        },
        {
            time: '2022-08-10 13:57',
            title: '[공지] 커브(CRV) 투자 주의 안내'
        },
        {
            time: '2022-08-10 11:02',
            title: '[공지] 솔로제닉(SOLO) 에어드랍 및 출금지원 안내'
        },
        {
            time: '2022-08-09 16:08',
            title: '[공지] 신한은행 계좌 연동 시 1원 인증 절차 적용 안내'
        },
        {
            time: '2022-08-08 15:01',
            title: '[공지] 운전면허증 진위여부 확인 사이트 점검 안내'
        },
        {
            time: '2022-08-05 18:01',
            title:'	[공지] 플로우(FLOW) 거래 유의 안내'
        }
    ]
    return(
        <div className='datatable6_1'>
            {
                data.map(function(a, i){
                    return(
                        <>
                            <span key={i} className='time6_1'>{a.time}</span>
                            <span key={i} className='title6_1' style={i===0?{color:'#FFFFFF99'}:null}>{a.title}</span>
                        </>
                    );
                })
            }
        </div>
    );
}

export default Datatable6_1;