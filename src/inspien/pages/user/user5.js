import React from 'react';
import { UserDetailWrap } from 'styles/user.styled';
import Button from "components/Button/Button";
import UserInfo from "components/UserDetailInfo/UserInfo";

const User5 = () => {

    return (
        <UserDetailWrap>
            <div className="inner">
                <div className="title_area">
                    <h2>김인스</h2>
                    <span className="user_name">인스피언</span>
                    <p className="path">홈 > 사용자 > 그룹 관리</p>
                </div>
                <div className="content">
                    <UserInfo />
                    <div className="center_button_wrap">
                        <Button className="large outline" onClick={() => window.location.href="/user/user1"}>목록</Button>
                    </div>
                </div>
            </div>
        </UserDetailWrap>
    )
};

export default User5;