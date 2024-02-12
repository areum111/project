import React, { useEffect } from "react";
import { MypageWrap } from "styles/mypage.styled";
import { customerTheme } from "theme";
import MypageMenu from "layouts/mypageMenu";
import OrderList from "../../components/UserDetailInfo/OrderList";
import OrderListSearch from "../../components/SearchBox/OrderListSearch";

const OrderList2 = ({ setTheme }) => {
    useEffect(() => {
        setTheme(customerTheme);
    });

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
                    <OrderList />
                </div>
            </div>
        </MypageWrap>
    )
};

export default OrderList2;