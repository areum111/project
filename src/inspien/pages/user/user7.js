import React from "react";
import { MemberWrap } from "styles/main.styled"
import Button from "components/Button/Button";
import CompanyInfo from "../../components/UserDetailInfo/CompanyInfo";

const User7 = () => {
    return (
        <MemberWrap>
            <div className="inner">
                <div className="title_area">
                    <h2>인스피언</h2>
                    <span className="user_name">일반</span>
                    <div className="path">홈 > 사용자 > 그룹 관리</div>
                </div>
                <div className="content">
                    <CompanyInfo invoice={true} />
                </div>
                <div className="button_wrap">
                    <Button type="button" className="outline large" onClick={() => window.location.href="/user/user5"}>목록</Button>
                </div>
            </div>
        </MemberWrap>
    )
};

export default User7;