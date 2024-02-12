import React, {useEffect, useState} from 'react';
import { ProductDetailWrap } from 'styles/store.styled.js';
import Button from "components/Button/Button";
import ProductDetail from "components/Store/ProductDetail";
import SideInfo from "components/Store/SideInfo";
import ProductRegInfo from "components/Store/ProductRegInfo";
import CompanyInfo2 from "components/Store/CompanyInfo2";
import {customerTheme} from "theme";
import PriceDetail6 from "components/Store/PriceDetail6";
const Detail14 = ({ setTheme }) => {
    useEffect(() => {
        setTheme(customerTheme);
    }, []);

    const [toggle, setToggle] = useState([1,2,3]);

    return (
        <ProductDetailWrap>
            <div className="inner">
                <div className="title_area">
                    <h2>EDI 워크스페이스 구축</h2>
                    <span className="user_name">인스피언</span>
                    <p className="shop_name">백오피스</p>
                    <p className="path">홈 > 상점 > 상품 상세</p>
                </div>
                <div className="content">
                    <div className="cont_box top_detail">
                        <ProductDetail />
                        <PriceDetail6 setTheme={setTheme} />
                    </div>
                    <div className="cont_box">
                        <div className="cont_title">
                            <h3>상품 정보</h3>
                        </div>
                        <ProductRegInfo id={1} toggle={toggle} setToggle={setToggle} />
                        <CompanyInfo2 id={2} toggle={toggle} setToggle={setToggle} />
                    </div>
                    <div className="cont_box">
                        <div className="cont_title">
                            <h3>부가정보</h3>
                        </div>
                        <SideInfo id={3} toggle={toggle} setToggle={setToggle} />
                    </div>
                    <div className="center_button_wrap">
                        <Button type="button" className="outline large" onClick={() => window.location.href = "/store/store1"}>목록</Button>
                    </div>
                </div>
            </div>
        </ProductDetailWrap>
    )
}

export default Detail14;