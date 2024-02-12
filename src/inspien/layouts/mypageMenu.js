import React, { useState } from "react";
import { MypageMenuWrap } from "styles/mypage.styled"
import { Link } from "react-router-dom";

const MypageMenu = ({ menu, userType }) => {
    const mypageMenuLists = [
        {
            id: 1,
            name: "회원 정보 수정",
            url: "/mypage/myinfo1"
        },
        {
            id: 2,
            name: "마일리지",
            url: "/mypage/mileage"
        },
        {
            id: 3,
            name: "이용 상품",
            url: "/mypage/use_product1"
        },
        {
            id: 4,
            name: "주문내역",
            url: "/mypage/order_list1"
        },
    ]

    return (
        <MypageMenuWrap>
            <h3>마이페이지</h3>
            <ul>
                {userType === "partner"
                    ? <li className="on">회원 정보 수정</li>
                    : mypageMenuLists.map((list, index) => {
                        return (
                            <li key={list.id} className={menu === list.name ? "on" : null}><Link to={list.url}>{list.name}</Link></li>
                        )
                    })
                }
            </ul>
        </MypageMenuWrap>
    )
}

export default MypageMenu;