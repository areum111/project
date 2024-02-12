import React, { useMemo, useEffect } from "react";
import { MypageWrap } from "styles/mypage.styled"
import MypageMenu from "layouts/mypageMenu";
import DataTable from "components/Table/DataTable";
import Pagination from "components/Pagination/Pagination";
import { customerTheme } from "theme";

const Mileage = ({ setTheme }) => {
    useEffect(() => {
        setTheme(customerTheme);
    });

    const columnData = [
        {
            accessor: 'No',
            Header: 'No',
            width: "6%",
        },
        {
            accessor: 'date',
            Header: '일자',
            width: "18%",
        },
        {
            accessor: 'state',
            Header: '구분',
            width: "18%",
        },
        {
            accessor: 'desc',
            Header: '마일리지 내용',
            width: "auto",
        },
        {
            accessor: 'mileage',
            Header: '마일리지',
            width: "20%",
        },
    ]

    const columns = useMemo(() => columnData, []);

    const datas = useMemo(() => [
        {
            "No": "25",
            "date": "2023-06-14",
            "state": "사용",
            "desc": "결제 (주문번호 : 230623-00100)",
            "mileage": <span className="gray_txt mileage">-50,000</span>,
        },
        {
            "No": "24",
            "date": "2023-06-05",
            "state": "적립",
            "desc": "패키지 상품 프로모션",
            "mileage": <span className="mileage">+100,000</span>,
        },
    ], [])

    return (
        <MypageWrap>
            <div className="inner">
                <MypageMenu menu="마일리지" />
                <div className="content">
                    <div className="title_area">
                        <h2>마일리지</h2>
                        <span className="path">홈 > 마이페이지 > 마일리지</span>
                    </div>
                    <div className="cont_box">
                        <div className="cont_title">
                            <h3>마일리지 내역</h3>
                            <span className="dot_msg">적립된 마일리지는 해당 월의 이용료(부가세 포함 가격)에 자동으로 사용됩니다.</span>
                        </div>
                        <div className="outline_box">
                            <p className="tb_text">사용가능 마일리지 <strong>1,970,000</strong></p>
                            <DataTable
                                columns={columns}
                                data={datas}
                            />
                            <Pagination />
                        </div>
                    </div>
                </div>
            </div>
        </MypageWrap>
    )
}

export default Mileage;