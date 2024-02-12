import React, {useMemo, useState} from 'react';
import { ReceiptDetailWrap } from "styles/receipt.styled";
import EqualImg from "images/ico/ico_equal_bk.svg";
import MinusImg from "images/ico/ico_minus_bk.svg";
import DataTable from "../../components/Table/DataTable";
import Button from "../../components/Button/Button";
import DepositCheckModal from "../../components/Modal/DepositCheckModal";
import ConfirmDialog from "../../components/Modal/ConfirmDialog";
import DepositUnCheckModal from "../../components/Modal/DepositUnCheckModal";

const Invoice2 = () => {
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
    const [visible4, setVisible4] = useState(false);
    const [visible5, setVisible5] = useState(false);
    const checkDeposit = () => {
        setVisible2(false);
        setVisible4(true);
    }
    //입금 확인 취소
    const unCheckedDeposit = () => {
        setVisible3(false);
        setVisible5(true);
    }
    //상품 사용 내역 테이블
    const columnData = [
        {
            accessor: 'type',
            Header: '유형',
            width: '9%',
        },
        {
            accessor: 'product_name',
            Header: '상품명',
            width: 'auto',
        },
        {
            accessor: 'company',
            Header: '판매사',
            width: '15%',
        },
        {
            accessor: 'cnt',
            Header: '수량',
            width: '9%',
        },
        {
            accessor: 'price',
            Header: '기본료',
            width: '15%',
        },
        {
            accessor: 'add_price',
            Header: '가산금액',
            width: '15%',
        },
        {
            accessor: 'use_price',
            Header: '이용금액',
            width: '15%',
        },
    ]
    const columns = useMemo(() => columnData, []);
    const datas = useMemo(() => [
        {
            "type": '즉시구매',
            "product_name": '유통사 주문 수집',
            "company": "인스피언",
            "cnt": "1 EA",
            "price": "3,000,000원",
            "add_price": "50,000원",
            "use_price": <strong>3,050,000원</strong>
        },
    ], [])


    //상품 이용 상세 테이블
    const columnData2 = [
        {
            accessor: 'product_name',
            Header: '상품명',
            width: 'auto',
        },
        {
            accessor: 'amount',
            Header: '상품 보유량',
            width: '18%',
        },
        {
            accessor: 'usage',
            Header: '전체 이용량',
            width: '18%',
        },
        {
            accessor: 'excess_usage',
            Header: '초과 사용량',
            width: '18%',
        },
    ]

    const columns2 = useMemo(() => columnData2, []);
    const datas2 = useMemo(() => [
        {
            "product_name": 'Data Transfer-Overage',
            "amount": "1GB",
            "usage": <span className="blue_txt">1.5GB</span>,
            "excess_usage": <span className="red_txt">0.5GB</span>,
        },
    ], [])

    return (
        <ReceiptDetailWrap>
            <div className="inner">
                <div className="title_area">
                    <h2>삼성전자</h2>
                    <span className="user_name">20230605-223314</span>
                    <p className="path">홈 > 정산 > 인보이스 관리</p>
                </div>
                <div className="content">
                    <div className="cont_box">
                        <div className="outline_box">
                            <table className="date_info">
                                <tbody>
                                <tr>
                                    <th>등록일</th>
                                    <td>2023-06-20</td>
                                </tr>
                                <tr>
                                    <th>납기일</th>
                                    <td>2023-06-25</td>
                                </tr>
                                <tr>
                                    <th>사용 기간</th>
                                    <td>2023-06-01 ~ 2023-06-30</td>
                                </tr>
                                </tbody>
                            </table>
                            <div className="company_info_wrap">
                                <div className="company_info">
                                    <p className="name">From. INSPIEN 인스피언</p>
                                    <p className="info">
                                        서울특별시 금천구 벚꽃로 278 (가산동, SJ테크노빌) 1309호<br />
                                        120-87-41140<br />
                                        대표자 최정규<br />
                                        전화 : 02-857-8040<br />
                                        팩스 : 02-857-0842
                                    </p>
                                </div>
                                <div className="company_info">
                                    <p className="name">To. 삼성전자</p>
                                    <p className="info">
                                        경기도 수원시 영통구 삼성로 129<br />
                                        124-81-00998<br />
                                        대표자 이재용<br />
                                        전화 : 02-857-8040<br />
                                        팩스 : -
                                    </p>
                                </div>
                            </div>
                            <div className="pay_info">
                                <div className="pay_title">
                                    <p className="title">2023년 06월에 납부하실 총 금액은 1,121,000원 입니다.</p>
                                    <p className="account">※ 인스피언 무통장 계좌번호 안내: 하나은행 00000-00000-00000 (예금주명: 인스피언)</p>
                                </div>
                                <div className="price_info">
                                    <div>
                                        <p className="title">주문자 정보</p>
                                        <p className="text">이재용(userid01), 010-1234-5678</p>
                                    </div>
                                    <div>
                                        <p className="title">이번달 요금</p>
                                        <p className="text">1,222,100원<span><img src={MinusImg} alt="-" /></span>마일리지 100,000원<span><img src={EqualImg} alt="=" /></span>청구금액 1,121,00원</p>
                                    </div>
                                </div>
                            </div>
                            <div className="use_product_info">
                                <h4>상품 사용 내역</h4>
                                <DataTable columns={columns} data={datas} />
                                <div className="total_price">
                                    <p><span className="title">이용 금액 소계</span><span className="price">1,110,000원</span></p>
                                    <p><span className="title">부가세</span><span className="price">111,000원</span></p>
                                    <p><span className="title">총 금액 합계</span><span className="price">1,221,000원</span></p>
                                </div>
                            </div>
                            <div className="use_detail_info">
                                <h4>상품 이용 상세</h4>
                                <DataTable columns={columns2} data={datas2} />
                            </div>
                        </div>
                        <div className="center_button_wrap">
                            <Button type="button" className="large gray" onClick={() => window.location.href="/receipt/invoice1"}>목록</Button>
                            {/*입금 확인 버튼*/}
                            <Button type="button" className="large" onClick={() => setVisible2(true)}>입금 확인</Button>
                            {/*입금 취소 버튼*/}
                            {/*<Button type="button" className="large" onClick={() => setVisible3(true)}>입금 취소</Button>*/}
                        </div>
                    </div>
                </div>
            </div>
            <DepositCheckModal visible2={visible2} setVisible2={setVisible2} checkDeposit={checkDeposit} />
            <ConfirmDialog
                visible={visible4}
                text="입금 확인되었습니다."
                onConfirm={() => setVisible4(false)}
            />
            <DepositUnCheckModal visible3={visible3} setVisible3={setVisible3} unCheckedDeposit={unCheckedDeposit} />
            <ConfirmDialog
                visible={visible5}
                text="입금 확인이 취소되었습니다."
                onConfirm={() => setVisible5(false)}
            />
        </ReceiptDetailWrap>
    )
};

export default Invoice2;