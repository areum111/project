import React, { useState, useEffect } from "react";
import { CartWrap, ProductListWrap } from "styles/cart.styled"
import Button from "components/Button/Button";
import Checkbox from "components/Checkbox/Checkbox";
import BuyMethodImg1 from "images/ico/ico_buymethod1.svg";
import BuyMethodImg2 from "images/ico/ico_buymethod2.svg";
import BuyMethodImg3 from "images/ico/ico_buymethod3.svg";
import BuyMethodImg4 from "images/ico/ico_buymethod4.svg";
import { MdOutlineClose } from 'react-icons/md';
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import { customerTheme } from "theme";

// 즉시구매
const BuyMethod1Wrap = ({ toggle, setToggle }) => {
    return (
        <ProductListWrap className="outline_box">
            <div className="order_list_title">
                <p><img src={BuyMethodImg1} alt="" />즉시구매</p>
                <button
                    type="button"
                    className="agree_toggle"
                    key="1"
                    onClick={() => {
                        !toggle.includes(1)
                            ? setToggle((toggle) => [...toggle, 1])
                            : setToggle(toggle.filter((button) => button !== 1));
                }}>
                    {toggle.includes(1) ? <BsChevronUp size={22} /> : <BsChevronDown size={22} />}
                </button>
            </div>
            <div className={toggle.includes(1) ? "toggle_wrap" : "toggle_wrap close"}>
                <div className="order_list">
                    <div className="list">
                        <Checkbox />
                        <span className="company">인스피언</span>
                        <div className="product">
                            <p className="name"><span className="label_package">P</span>EDI 워크스페이스</p>
                            <p className="gray_txt">(단위 : 100GB / 수량 1개)</p>
                        </div>
                        <span className="price">100,000원</span>
                        <span className="pay_type"></span>
                        <span className="start_date">2023-06-23 개시</span>
                        <button className="del_btn"><MdOutlineClose size={26} /></button>
                    </div>
                    <div className="list">
                        <Checkbox />
                        <span className="company">쿠팡</span>
                        <div className="product">
                            <p className="name"><span className="label_workspace">W</span>유통사 주문 수집</p>
                            <p className="gray_txt">(단위 : 20MB / 수량 123,456,789개)</p>
                        </div>
                        <span className="price">200,000 원</span>
                        <span className="pay_type"></span>
                        <span className="start_date">2023-06-23 개시</span>
                        <button className="del_btn"><MdOutlineClose size={26} /></button>
                    </div>
                    <div className="list">
                        <Checkbox />
                        <span className="company">만약 내용이 너무 길어지면 만약 내용이 너무 길어지면</span>
                        <div className="product">
                            <p className="name"><span className="label_workspace">W</span>유통사 주문 수집</p>
                            <p className="gray_txt">(단위 : 20MB / 수량 123,456,789개)</p>
                        </div>
                        <span className="price">300,000 원</span>
                        <span className="pay_type"></span>
                        <span className="start_date">2023-06-23 개시</span>
                        <button className="del_btn"><MdOutlineClose size={26} /></button>
                    </div>
                </div>
                <div className="order_total">
                    <p><span className="total_cnt">총 <b>3</b>건</span>=<span className="total_price">합계 600,000 원</span></p>
                </div>
            </div>
        </ProductListWrap>
    )
};

// 분할결제
const BuyMethod2Wrap = ({ toggle, toggle2, setToggle, setToggle2 }) => {
    return (
        <ProductListWrap className="outline_box">
            <div className="order_list_title">
                <p><img src={BuyMethodImg2} alt="" />분할결제</p>
                <button
                    type="button"
                    className="agree_toggle"
                    key="2"
                    onClick={() => {
                        !toggle.includes(2)
                            ? setToggle((toggle) => [...toggle, 2])
                            : setToggle(toggle.filter((button) => button !== 2));
                    }}>
                    {toggle.includes(2) ? <BsChevronUp size={22} /> : <BsChevronDown size={22} />}
                </button>
            </div>
            <div className={toggle.includes(2) ? "toggle_wrap" : "toggle_wrap close"}>
                <div className="order_list">
                    <div className="list">
                        <Checkbox />
                        <span className="company">인스피언</span>
                        <div className="product">
                            <p className="name"><span className="label_package">P</span>EDI 워크스페이스</p>
                            <p className="gray_txt">(단위 : 100GB / 수량 1개)</p>
                        </div>
                        <span className="price">100,000원</span>
                        <span className="pay_type">일시불</span>
                        <span className="start_date">2023-06-23 개시</span>
                        <button className="del_btn"><MdOutlineClose size={26} /></button>
                    </div>
                    <div className="list">
                        <Checkbox />
                        <span className="company">쿠팡</span>
                        <div className="product">
                            <p className="name"><span className="label_workspace">W</span>유통사 주문 수집 만약 길어지면 이정도까지 작성 이정도까지 작성</p>
                            <p className="gray_txt">(단위 : 20MB / 수량 123,456,789개)</p>
                        </div>
                        <span className="price">200,000 원</span>
                        <span className="pay_type">
                            <button
                                type="button"
                                key="1"
                                onClick={() => {
                                    !toggle2.includes(1)
                                        ? setToggle2((toggle2) => [...toggle2, 1])
                                        : setToggle2(toggle2.filter((button) => button !== 1));
                                }}>분할결제
                                {toggle2.includes(1) ? <RiArrowUpSFill size={22} /> : <RiArrowDownSFill size={22} />}
                            </button>
                        </span>
                        <span className="start_date">2023-06-23 개시</span>
                        <button className="del_btn"><MdOutlineClose size={26} /></button>
                    </div>
                    <div className={toggle2.includes(1) ? "list_detail" : "list_detail close"}>
                        <p>
                            <span className="count">· 1회차</span>
                            <span className="installment">3,333 원</span>
                            <span className="percent">33.3%</span>
                            <span className="pay_date">2023-07-21 청구예정</span>
                        </p>
                        <p>
                            <span className="count">· 1회차</span>
                            <span className="installment">3,333 원</span>
                            <span className="percent">33.3%</span>
                            <span className="pay_date">2023-07-21 청구예정</span>
                        </p>
                        <p>
                            <span className="count">· 1회차</span>
                            <span className="installment">3,333 원</span>
                            <span className="percent">33.3%</span>
                            <span className="pay_date">2023-07-21 청구예정</span>
                        </p>
                    </div>
                    <div className="list">
                        <Checkbox />
                        <span className="company">만약 내용이 너무 길어지면 만약 내용이 너무 길어지면</span>
                        <div className="product">
                            <p className="name"><span className="label_workspace">W</span>유통사 주문 수집</p>
                            <p className="gray_txt">(단위 : 20MB / 수량 123,456,789개)</p>
                        </div>
                        <span className="price">200,000 원</span>
                        <span className="pay_type">
                            <button
                                type="button"
                                key="2"
                                onClick={() => {
                                    !toggle2.includes(2)
                                        ? setToggle2((toggle2) => [...toggle2, 2])
                                        : setToggle2(toggle2.filter((button) => button !== 2));
                                }}>분할결제
                                {toggle2.includes(2) ? <RiArrowUpSFill size={22} /> : <RiArrowDownSFill size={22} />}
                            </button>
                        </span>
                        <span className="start_date">2023-06-23 개시</span>
                        <button className="del_btn"><MdOutlineClose size={26} /></button>
                    </div>
                    <div className={toggle2.includes(2) ? "list_detail" : "list_detail close"}>
                        <p>
                            <span className="count">· 1회차</span>
                            <span className="installment">3,333 원</span>
                            <span className="percent">33.3%</span>
                            <span className="pay_date">2023-07-21 청구예정</span>
                        </p>
                        <p>
                            <span className="count">· 1회차</span>
                            <span className="installment">3,333 원</span>
                            <span className="percent">33.3%</span>
                            <span className="pay_date">2023-07-21 청구예정</span>
                        </p>
                        <p>
                            <span className="count">· 1회차</span>
                            <span className="installment">3,333 원</span>
                            <span className="percent">33.3%</span>
                            <span className="pay_date">2023-07-21 청구예정</span>
                        </p>
                    </div>
                </div>
                <div className="order_total">
                    <p><span className="total_cnt">총 <b>3</b>건</span>=<span className="total_price">합계 30,000 원</span></p>
                </div>
            </div>
        </ProductListWrap>
    )
};

// 구독형
const BuyMethod3Wrap = ({ toggle, setToggle }) => {
    return (
        <ProductListWrap className="outline_box">
            <div className="order_list_title">
                <p><img src={BuyMethodImg3} alt="" />구독형</p>
                <button
                    type="button"
                    className="agree_toggle"
                    key="3"
                    onClick={() => {
                        !toggle.includes(3)
                            ? setToggle((toggle) => [...toggle, 3])
                            : setToggle(toggle.filter((button) => button !== 3));
                    }}>
                    {toggle.includes(3) ? <BsChevronUp size={22} /> : <BsChevronDown size={22} />}
                </button>
            </div>
            <div className={toggle.includes(3) ? "toggle_wrap" : "toggle_wrap close"}>
                <div className="order_list">
                    <div className="list">
                        <Checkbox />
                        <span className="company">인스피언</span>
                        <div className="product">
                            <p className="name"><span className="label_package">P</span>EDI 워크스페이스</p>
                            <p className="gray_txt">(단위 : 100GB / 수량 1개)</p>
                        </div>
                        <span className="price">10원<span className="gray_txt"> / 월</span></span>
                        <span className="pay_type"></span>
                        <span className="start_date">2023-06-23 개시</span>
                        <button className="del_btn"><MdOutlineClose size={26} /></button>
                    </div>
                    <div className="list">
                        <Checkbox />
                        <span className="company">쿠팡</span>
                        <div className="product">
                            <p className="name"><span className="label_workspace">W</span>유통사 주문 수집</p>
                            <p className="gray_txt">(단위 : 20MB / 수량 123,456,789개)</p>
                        </div>
                        <span className="price">10,000<span className="gray_txt"> / 월</span></span>
                        <span className="pay_type"></span>
                        <span className="start_date">2023-06-23 개시</span>
                        <button className="del_btn"><MdOutlineClose size={26} /></button>
                    </div>
                    <div className="list">
                        <Checkbox />
                        <span className="company">만약 내용이 너무 길어지면 만약 내용이 너무 길어지면</span>
                        <div className="product">
                            <p className="name"><span className="label_workspace">W</span>유통사 주문 수집</p>
                            <p className="gray_txt">(단위 : 20MB / 수량 123,456,789개)</p>
                        </div>
                        <span className="price">1,000,000,000원<span className="gray_txt"> / 월</span></span>
                        <span className="pay_type"></span>
                        <span className="start_date">2023-06-23 개시</span>
                        <button className="del_btn"><MdOutlineClose size={26} /></button>
                    </div>
                </div>
                <div className="order_total">
                    <p><span className="total_cnt">총 <b>3</b>건</span>=<span className="total_price">합계 1,000,010,010<span className="gray_txt"> / 월</span></span></p>
                    <p className="desc">※ 상품별 마지막 청구 금액은 마일리지 자동 적용/할인됩니다.</p>
                </div>
            </div>
        </ProductListWrap>
    )
};

// 주문불가
const BuyMethod4Wrap = ({ toggle, setToggle }) => {
    return (
        <ProductListWrap className="outline_box unavailable">
            <div className="order_list_title">
                <div>
                    <p><img src={BuyMethodImg4} alt="" />주문불가</p>
                    <p className="desc">상품이 판매 중지되어 주문할 수 없습니다. 판매사 또는 고객센터에 문의해주세요.</p>
                </div>
                <div>
                    <button type="button" className="del_all">주문불가 상품 삭제</button>
                    <button
                        type="button"
                        className="agree_toggle"
                        key="4"
                        onClick={() => {
                            !toggle.includes(4)
                                ? setToggle((toggle) => [...toggle, 4])
                                : setToggle(toggle.filter((button) => button !== 4));
                        }}>
                        {toggle.includes(4) ? <BsChevronUp size={22} /> : <BsChevronDown size={22} />}
                    </button>
                </div>
            </div>
            <div className={toggle.includes(4) ? "toggle_wrap" : "toggle_wrap close"}>
                <div className="order_list">
                    <div className="list">
                        <Checkbox disabled={true} />
                        <span className="company">인스피언</span>
                        <div className="product">
                            <p className="name"><span className="label_package">P</span>EDI 워크스페이스</p>
                            <p className="gray_txt">(단위 : 100GB / 수량 1개)</p>
                        </div>
                        <button className="del_btn"><MdOutlineClose size={26} /></button>
                    </div>
                    <div className="list">
                        <Checkbox disabled={true} />
                        <span className="company">쿠팡</span>
                        <div className="product">
                            <p className="name"><span className="label_workspace">W</span>유통사 주문 수집</p>
                            <p className="gray_txt">(단위 : 20MB / 수량 123,456,789개)</p>
                        </div>
                        <button className="del_btn"><MdOutlineClose size={26} /></button>
                    </div>
                    <div className="list">
                        <Checkbox disabled={true} />
                        <span className="company">만약 내용이 너무 길어지면 만약 내용이 너무 길어지면</span>
                        <div className="product">
                            <p className="name"><span className="label_workspace">W</span>유통사 주문 수집</p>
                            <p className="gray_txt">(단위 : 20MB / 수량 123,456,789개)</p>
                        </div>
                        <button className="del_btn"><MdOutlineClose size={26} /></button>
                    </div>
                </div>
            </div>
        </ProductListWrap>
    )
};

const Cart2 = ({ setTheme }) => {
    // 메인컬러 변경
    useEffect(() => {
        setTheme(customerTheme);
    });

    const [toggle, setToggle] = useState([1, 2, 3, 4]);
    const [toggle2, setToggle2] = useState([1, 2]);
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);

    return (
        <CartWrap>
            <div className="inner">
                <div className="title_area">
                    <h2>장바구니</h2>
                </div>
                <div className="content">
                    <div className="cont_box order_list_wrap">
                        <div className="cont_title">
                            <h3><Checkbox label="전체선택(9/9)" checked={true} /></h3>
                            <Button type="button" className="small black outline">선택삭제</Button>
                        </div>
                        {/*즉시구매*/}
                        <BuyMethod1Wrap toggle={toggle} setToggle={setToggle} />
                        {/*분할결제*/}
                        <BuyMethod2Wrap toggle={toggle} toggle2={toggle2} setToggle={setToggle} setToggle2={setToggle2} />
                        {/*즉시구매*/}
                        <BuyMethod3Wrap toggle={toggle} setToggle={setToggle} />
                        {/*주문불가*/}
                        <BuyMethod4Wrap toggle={toggle} setToggle={setToggle} />
                    </div>
                    <div className="cont_box price_wrap">
                        <div className="outline_box">
                            <p className="title">주문정보</p>
                            <div className="price_info">
                                <div>
                                    <p className="info_title">즉시구매</p>
                                    <p className="price"><b>600,000</b> 원</p>
                                </div>
                                <div>
                                    <p className="info_title">분할결제</p>
                                    <p className="price"><b>30,000</b> 원</p>
                                </div>
                                <div>
                                    <p className="info_title">구독형</p>
                                    <p className="price"><b>100,000,010,010</b> 원<span className="gray_txt"> / 월</span></p>
                                </div>
                            </div>
                            <div className="pay_agree">
                                <div className="all_agree"><Checkbox label={"쇼핑몰 이용약관 및 개인정보수집이용 동의에 모두 동의합니다."} /></div>
                                <div className="agree">
                                    <div className="agree_chk">
                                        <Checkbox label={"쇼핑몰 이용약관 동의 (필수)"} />
                                        {visible
                                            ? <button type="button" className="more_btn" onClick={() => setVisible(false)}>닫기</button>
                                            : <button type="button" className="more_btn" onClick={() => setVisible(true)}>보기</button>
                                        }
                                    </div>
                                    <div className={visible ? "agree_text custom_scroll on" : "agree_text custom_scroll"}>
                                        <div className="scroll_inner">
                                            제 1 장 총 칙<br /><br />
                                            제 1 조 (목적)<br />
                                            이 약관은 COMPANY_NAME(이하 "사이트"라 합니다)에서 제공하는 인터넷서비스(이하 "서비스"라 합니다)의 이용 조건 및 절차에 관한 기본적인 사항을 규정함을 목적으로 합니다.<br /><br />
                                            제 2 조 (약관의 효력 및 변경)<br />
                                            이 약관은 서비스 화면이나 기타의 방법으로 이용고객에게 공지함으로써 효력을 발생합니다.<br />
                                            사이트는 이 약관의 내용을 변경할 수 있으며, 변경된 약관은 제1항과 같은 방법으로 공지 또는 통지함으로써 효력을 발생합니다.<br /><br />
                                            제 3 조 (용어의 정의)<br />
                                            이 약관에서 사용하는 용어의 정의는 다음과 같습니다.
                                        </div>
                                    </div>
                                </div>
                                <div className="agree">
                                    <div className="agree_chk">
                                        <Checkbox label={"개인정보 처리방침 동의 (필수)"} />
                                        {visible2
                                            ? <button type="button" className="more_btn" onClick={() => setVisible2(false)}>닫기</button>
                                            : <button type="button" className="more_btn" onClick={() => setVisible2(true)}>보기</button>
                                        }
                                    </div>
                                    <div className={visible2 ? "agree_text custom_scroll on" : "agree_text custom_scroll"}>
                                        <div className="scroll_inner">
                                            제 1 장 총 칙<br /><br />
                                            제 1 조 (목적)<br />
                                            이 약관은 COMPANY_NAME(이하 "사이트"라 합니다)에서 제공하는 인터넷서비스(이하 "서비스"라 합니다)의 이용 조건 및 절차에 관한 기본적인 사항을 규정함을 목적으로 합니다.<br /><br />
                                            제 2 조 (약관의 효력 및 변경)<br />
                                            이 약관은 서비스 화면이나 기타의 방법으로 이용고객에게 공지함으로써 효력을 발생합니다.<br />
                                            사이트는 이 약관의 내용을 변경할 수 있으며, 변경된 약관은 제1항과 같은 방법으로 공지 또는 통지함으로써 효력을 발생합니다.<br /><br />
                                            제 3 조 (용어의 정의)<br />
                                            이 약관에서 사용하는 용어의 정의는 다음과 같습니다.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="button_wrap">
                                <Button type="button" className="full large">주문하기</Button>
                                <Button type="button" className="full outline black" onClick={() => window.location.href="/mypage/use_product1"}>이용 상품 조회</Button>
                            </div>
                            <div className="desc">
                                <p className="dot_msg">월별 청구 금액은 주문 이후 <span>이용 상품</span>에서 확인해주세요.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </CartWrap>
    )
};

export default Cart2;