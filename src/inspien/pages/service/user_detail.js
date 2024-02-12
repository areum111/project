import React, {useState} from "react";
import {CustomerWrap} from "styles/service.styled";
import UserJoinInfo from "components/UserDetailInfo/UserJoinInfo";
import UserInfo from "components/UserDetailInfo/UserInfo";
import Button from "../../components/Button/Button";

const UserDetail = () => {
    const [index, setIndex] = useState(0);
    const tabLists = [
        {id: 0, title: "가입 승인 정보"},
        {id: 1, title: "회원 정보"}
    ]

    return (
        <CustomerWrap>
            <div className="inner">
                <div className="title_area">
                    <h2>회원 상세</h2>
                    <span className="user_name">김인스 (인스피언)</span>
                    <div className="path">홈 > 서비스 지원 > 고객 관리 > 회원 상세</div>
                </div>
                <div className="content">
                    <div className="cont_box">
                        <div className="outline_box tab">
                            <ul className="tab_menu">
                                {tabLists.map((list) => {
                                    return (
                                        <li
                                            key={list.id}
                                            className={index === list.id ? "on" : null}
                                            onClick={() => setIndex(list.id)}
                                        ><span>{list.title}</span></li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                    {index === 0 ? <UserJoinInfo /> : null}
                    {index === 1 ? <UserInfo /> : null}
                    <div className="center_button_wrap">
                        <Button className="large outline" onClick={() => window.location.href="/customer/list"}>목록</Button>
                    </div>
                </div>
            </div>
        </CustomerWrap>
    )
}

export default UserDetail;