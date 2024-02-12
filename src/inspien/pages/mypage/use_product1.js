import React, { useEffect, useMemo, useState } from "react";
import { MypageWrap } from "styles/mypage.styled";
import { customerTheme } from "theme";
import MypageMenu from "layouts/mypageMenu";
import SelectBox from "components/SelectBox/SelectBox";
import DataTable from "components/Table/DataTable";
import Pagination from "components/Pagination/Pagination";
import UseProductSearch from "../../components/SearchBox/UseProductSearch";
import UseProductGuide from "../../components/GuideBox/UseProductGuide";
import UseProductList from "../../components/UserDetailInfo/UseProductList";

const UseProduct1 = ({ setTheme }) => {
    useEffect(() => {
        setTheme(customerTheme);
    });

    return (
        <MypageWrap>
            <div className="inner">
                <MypageMenu menu={"이용 상품"} />
                <div className="content">
                    <div className="title_area">
                        <h2>이용 상품</h2>
                        <span className="path">홈 > 마이페이지 > 이용상품</span>
                    </div>
                    <UseProductSearch />
                    <UseProductList noData={true} />
                    <UseProductGuide />
                </div>
            </div>
        </MypageWrap>
    )
};

export default UseProduct1;