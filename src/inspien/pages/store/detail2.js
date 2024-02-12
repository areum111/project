import React, { useState } from 'react';
import { ProductDetailWrap } from 'styles/store.styled.js';
import Button from "components/Button/Button";
import ProductDetail from "components/Store/ProductDetail";
import PriceDetail1 from "components/Store/PriceDetail1";
import TemplateInfo from "components/Store/TemplateInfo";
import ProductRegInfo from "components/Store/ProductRegInfo";
import CompanyInfo1 from "components/Store/CompanyInfo1";

const Detail2 = () => {
    const [toggle, setToggle] = useState([1,2,3]);
    //미등록 판매사 여부 (true : 등록, false : 미등록)
    const company = false;
    //판매 중지 상품 여부 (true : 중지, false : 중지 X)
    const unavailable = false;

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
                        <PriceDetail1 company={company} unavailable={unavailable} />
                    </div>
                    <div className="cont_box">
                        <div className="cont_title">
                            <h3>상품 정보</h3>
                        </div>
                        <ProductRegInfo id={1} toggle={toggle} setToggle={setToggle} />
                        <CompanyInfo1 id={2} toggle={toggle} setToggle={setToggle} company={company} />
                        <TemplateInfo id={3} toggle={toggle} setToggle={setToggle} />
                    </div>
                    <div className="center_button_wrap">
                        <Button type="button" className="outline large" onClick={() => window.location.href = "/store/store1"}>목록</Button>
                    </div>
                </div>
            </div>
        </ProductDetailWrap>
    )
}

export default Detail2;