import './datatable.css';

function Datatable4_1() {
    const data = [
        {
            time : null,
            title : 'title'
        },
        {
            time : '2022-08-15 15:15',
            title : '[디지털 자산] 8월 2주차 GAS, VTHO 지급 안내'
        },
        {
            time : '2022-08-12 18:18',
            title : '[NFT 드롭스] KBO 레전드 40인 NFT 드롭스 4회차'
        },
        {
            time : '2022-08-12 18:18',
            title : "[NFT 드롭스] 정규하 그래픽 노블 '노량' 충무공 마지막 전투"
        },
        {
            time : '2022-08-11 17:17',
            title : '[NFT 드롭스] 환상 속 공간의 유영하는 주사위 작가 두민'
        },
        {
            time : '2022-08-11 15:15',
            title : '	[NFT 드롭스] 2021년 KBO리그 명장면, 백투더KBO 2021 EP#01'
        },
        {
            time : '2022-08-10 19:19',
            title : '[NFT 드롭스] 로렌정, 황정빈 작가의 작품을 디지털아트로 만나다.'
        },
        {
            time : '2022-08-10 18:18',
            title : '[AMA] AMA DU Festival : 아발란체(AVAX) - 업비트 x 세컨블록 AMA 당첨 및 이벤트 안내'
        },
        {
            time : '2022-08-10 14:14',
            title : '[안내] 커브(CRV) 투자 유의 촉구 안내'
        },
        {
            time : '2022-08-09 18:18',
            title : '[점검] 원화 입출금 서비스 점검 안내 (08/12 23:50 ~)'
        },
        {
            time : '2022-08-09 12:12',
            title : '[점검] 운전면허증 진위여부 확인 기관 점검 안내 (주민등록증 이용 가능) (08/11 19:00~)'
        }
    ];
    return(
        <table className='datatable4_1'>
            {
                data.map(function(a, i){
                    return(
                        <tr>
                        <th key={i} className='time4_1' style={i===0 ? {height:'33px'}:null}>{a.time}</th>
                        <td key={i} className='title4_1' style={i===0 ? {color:'#FFFFFF99', height:'33px', padding:'5px 6px'}:null}>{a.title}</td>
                        </tr>
                    );
                })
            }
        </table>
    );
}

export default Datatable4_1;