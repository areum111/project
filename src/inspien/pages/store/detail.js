import React, {useRef, useState} from 'react';
import { ProductDetailWrap } from 'styles/store.styled.js';
import Button from "components/Button/Button";
import ProductDetail from "components/Store/ProductDetail";
import PriceDetail1 from "components/Store/PriceDetail1";
import SideInfo from "components/Store/SideInfo";
import ProductRegInfo from "components/Store/ProductRegInfo";
import CompanyInfo1 from "components/Store/CompanyInfo1";
import TemplateInfo from "../../components/Store/TemplateInfo";
import PriceDetail2 from "../../components/Store/PriceDetail2";
import PriceDetail3 from "../../components/Store/PriceDetail3";
import PriceDetail4 from "../../components/Store/PriceDetail4";
import PriceDetail5 from "../../components/Store/PriceDetail5";
import PriceDetail6 from "../../components/Store/PriceDetail6";
const Detail = ({ setTheme }) => {
    const [toggle, setToggle] = useState([1,2,3]);
    const contentRef = useRef(null);
    const onContentClick = () => {
        contentRef.current?.scrollIntoView({ behavior: 'smooth' });
    }

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
                        {/*<PriceDetail1 company={true} unavailable={false} />*/}
                        {/*<PriceDetail1 company={false} unavailable={false} />*/}
                        {/*<PriceDetail1 company={false} unavailable={true} />*/}
                        {/*<PriceDetail1 company={true} unavailable={false} partner={true} setTheme={setTheme} />*/}
                        {/*<PriceDetail1 company={false} unavailable={false} partner={true} setTheme={setTheme} />*/}
                        {/*<PriceDetail1 company={false} unavailable={true} partner={true} setTheme={setTheme} />*/}
                        {/*<PriceDetail2 setTheme={setTheme} />*/}
                        {/*<PriceDetail3 setTheme={setTheme} />*/}
                        {/*<PriceDetail4 setTheme={setTheme} />*/}
                        {/*<PriceDetail5 duplicate={true} setTheme={setTheme} />*/}
                        {/*<PriceDetail5 family={true} onContentClick={onContentClick} setTheme={setTheme} />*/}
                        {/*<PriceDetail5 unavailable={true} setTheme={setTheme} />*/}
                        {/*<PriceDetail4 family={true} onContentClick={onContentClick} setTheme={setTheme} />*/}
                        <PriceDetail6 setTheme={setTheme} />
                    </div>
                    <div className="cont_box" ref={contentRef}>
                        <div className="cont_title">
                            <h3>상품 정보</h3>
                        </div>
                        <ProductRegInfo id={1} toggle={toggle} setToggle={setToggle} />
                        <CompanyInfo1 id={2} toggle={toggle} setToggle={setToggle} company={true} />
                        <TemplateInfo id={3} toggle={toggle} setToggle={setToggle} />
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

export default Detail;