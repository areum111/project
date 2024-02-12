import React, { useEffect, useMemo, useState } from "react";
import { MypageWrap } from "styles/mypage.styled";
import { customerTheme } from "theme";
import MypageMenu from "layouts/mypageMenu";
import DataTable from "components/Table/DataTable";
import Pagination from "components/Pagination/Pagination";
import OrderListSearch from "components/SearchBox/OrderListSearch";
import OrderList from "../../components/UserDetailInfo/OrderList";

const OrderList1 = ({ setTheme }) => {
    useEffect(() => {
        setTheme(customerTheme);
    });

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

    const datas = useMemo(() => [], [])

    return (
        <MypageWrap>
            <div className="inner">
                <MypageMenu menu={"주문내역"} />
                <div className="content">
                    <div className="title_area">
                        <h2>주문내역</h2>
                        <span className="path">홈 > 마이페이지 > 주문내역</span>
                    </div>
                    <OrderListSearch />
                    <OrderList noData={true} />
                </div>
            </div>
        </MypageWrap>
    )
};

export default OrderList1;