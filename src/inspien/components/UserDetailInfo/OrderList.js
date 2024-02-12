import React, {useMemo} from "react";
import DataTable from "../Table/DataTable";
import Pagination from "../Pagination/Pagination";
import {Link} from "react-router-dom";
import Button from "../Button/Button";

const OrderList = ({ noData, visibleDetail, setVisibleDetail }) => {
    const columnData = [
        {
            accessor: 'order_date',
            Header: '주문일자',
            width: "12%",
        },
        {
            accessor: 'order_no',
            Header: '주문번호',
            width: "14%",
        },
        {
            accessor: 'order_name',
            Header: '구매사(주문자)',
            width: "16%",
        },
        {
            accessor: 'product',
            Header: '주문상품',
            width: "30%",
        },
        {
            accessor: 'price',
            Header: '주문금액',
            width: "28%",
        },
    ]

    const columns = useMemo(() => columnData, []);

    let dataArray = new Array();
    if(noData){
        dataArray = [];
    }else{
        dataArray = [{
            'order_date': '2023-06-21',
            'order_no': <span className="date">
                {visibleDetail ? <Link to="/mypage/order_detail">230607-000001</Link> : <span onClick={() => setVisibleDetail(true)}>230607-000001</span>}
                </span>,
            'order_name': <div className="order_name">SK <span>(김이름)</span></div>,
            'product': 'EDI 워크스페이스 외 8건',
            'price': <div className="price">
                <p><span className="dot_msg">즉시구매</span><span>100,000,000 원</span></p>
                <p><span className="dot_msg">분할결제</span><span>100,000,000,000 원</span></p>
                <p><span className="dot_msg">구독형</span><span>100,000,000,000 원 <i> / 월</i></span></p>
            </div> ,
        }]
    }
    const datas = useMemo(() => dataArray, [])

    return (
        <div className="cont_box">
            <div className="outline_box">
                <div className="tb_top">
                    <span className="cnt">총 0개</span>
                </div>
                <div className="order_list_tb">
                    <DataTable
                        columns={columns}
                        data={datas}
                    />
                    {dataArray.length === 0 ? <div className="no_data"><p>주문 내역이 없습니다.</p><Button type="button" className="small outline">상품 둘러보기</Button></div> : null}
                </div>
                <Pagination />
            </div>
        </div>
    )
}

export default OrderList;