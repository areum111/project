import React, { useEffect, useState } from "react";
import { MypageWrap } from "styles/mypage.styled";
import { customerTheme } from "theme";
import MypageMenu from "layouts/mypageMenu";
import SelectBox from "components/SelectBox/SelectBox";
import UseProductSearch from "components/SearchBox/UseProductSearch";
import UseProductGuide from "components/GuideBox/UseProductGuide";
import UseProductList from "../../components/UserDetailInfo/UseProductList";

const UseProduct2 = ({ setTheme }) => {
    useEffect(() => {
        setTheme(customerTheme);
    });

    const options4 = [
        {value: 1, label: "최근 등록순"},
        {value: 2, label: "이용 개시일순"}
    ]
    const options5 = [
        {value: 1, label: "10개씩 보기"},
        {value: 2, label: "30개씩 보기"},
        {value: 3, label: "50개씩 보기"},
        {value: 4, label: "100개씩 보기"}
    ]
    const tabLists = [
        {id: 0, title: "즉시구매"},
        {id: 1, title: "분할결제"},
        {id: 2, title: "구독형"}
    ]
    const [index, setIndex] = useState(0);

    return (
        <>
            <MypageWrap>
                <div className="inner">
                    <MypageMenu menu={"이용 상품"} />
                    <div className="content">
                        <div className="title_area">
                            <h2>이용 상품</h2>
                            <span className="path">홈 > 마이페이지 > 이용상품</span>
                        </div>
                        <UseProductSearch />
                        <UseProductList noData={false} />
                        <UseProductGuide />
                    </div>
                </div>
            </MypageWrap>
        </>
    )
};

export default UseProduct2;