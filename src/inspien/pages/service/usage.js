import React, {useEffect} from 'react';
import {customerTheme} from "theme";
import UsageHistory from "components/UserDetailInfo/UsageHistory";
import {CustomerWrap} from "styles/service.styled";

const Usage = ({ setTheme }) => {
    useEffect(() => {
        setTheme(customerTheme);
    }, []);

    return (
        <CustomerWrap>
            <div className="inner">
                <div className="title_area">
                    <h2>사용량 조회</h2>
                    <span className="user_name">고객사 A</span>
                    <div className="path">홈 > 서비스 지원 > 사용량 조회</div>
                </div>
                <div className="content">
                    <UsageHistory customer={true} />
                </div>
            </div>
        </CustomerWrap>
    )
}

export default Usage;