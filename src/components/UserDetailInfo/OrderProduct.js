import React, { useState } from "react";
import { ProductListWrap } from "styles/cart.styled"
import BuyMethodImg1 from "images/ico/ico_buymethod1.svg";
import BuyMethodImg2 from "images/ico/ico_buymethod2.svg";
import BuyMethodImg3 from "images/ico/ico_buymethod3.svg";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";

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
                        <span className="shop">백오피스</span>
                        <span className="company">인스피언</span>
                        <div className="product">
                            <p className="name"><span className="label_package">P</span>EDI 워크스페이스</p>
                            <p className="gray_txt">(단위 : 100GB / 수량 1개)</p>
                        </div>
                        <span className="price">100,000원</span>
                        <span className="pay_type"></span>
                        <span className="start_date">2023-06-23 개시</span>
                    </div>
                    <div className="list">
                        <span className="shop">스토어</span>
                        <span className="company">쿠팡</span>
                        <div className="product">
                            <p className="name"><span className="label_workspace">W</span>유통사 주문 수집</p>
                            <p className="gray_txt">(단위 : 20MB / 수량 123,456,789개)</p>
                        </div>
                        <span className="price">200,000 원</span>
                        <span className="pay_type"></span>
                        <span className="start_date">2023-06-23 개시</span>
                    </div>
                    <div className="list">
                        <span className="shop">백오피스</span>
                        <span className="company">만약 내용이 너무 길어지면 만약 내용이 너무 길어지면</span>
                        <div className="product">
                            <p className="name"><span className="label_workspace">W</span>유통사 주문 수집</p>
                            <p className="gray_txt">(단위 : 20MB / 수량 123,456,789개)</p>
                        </div>
                        <span className="price">300,000 원</span>
                        <span className="pay_type"></span>
                        <span className="start_date">2023-06-23 개시</span>
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
const BuyMethod2Wrap = ({ toggle, toggle2, setToggle, setToggle2, modify }) => {
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
                        <span className="shop">백오피스</span>
                        <span className="company">인스피언</span>
                        <div className="product">
                            <p className="name"><span className="label_package">P</span>EDI 워크스페이스</p>
                            <p className="gray_txt">(단위 : 100GB / 수량 1개)</p>
                        </div>
                        <span className="price">100,000원</span>
                        <span className="pay_type">일시불</span>
                        <span className="start_date">2023-06-23 개시</span>
                    </div>
                    <div className="list">
                        <span className="shop">스토어</span>
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
                    </div>
                    <div className={toggle2.includes(1) ? "list_detail" : "list_detail close"}>
                        <p>
                            <span className="count">· 1회차</span>
                            <span className="installment">{modify ? <input type="text" value="60,000" disabled /> : "3,333"} 원</span>
                            <span className="percent">{modify ? <input type="text" value="33.3" disabled /> : "33.3"} %</span>
                            <span className="pay_date">2023-07-21 청구예정</span>
                        </p>
                        <p>
                            <span className="count">· 1회차</span>
                            <span className="installment">{modify ? <input type="text" value="60,000" /> : "3,333"} 원</span>
                            <span className="percent">{modify ? <input type="text" value="33.3" /> : "33.3"} %</span>
                            <span className="pay_date">2023-07-21 청구예정</span>
                        </p>
                        <p>
                            <span className="count">· 1회차</span>
                            <span className="installment">{modify ? <input type="text" value="60,000" /> : "3,333"} 원</span>
                            <span className="percent">{modify ? <input type="text" value="33.3" /> : "33.3"} %</span>
                            <span className="pay_date">2023-07-21 청구예정</span>
                        </p>
                    </div>
                    <div className="list">
                        <span className="shop">백오피스</span>
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
                    </div>
                    <div className={toggle2.includes(2) ? "list_detail" : "list_detail close"}>
                        <p>
                            <span className="count">· 1회차</span>
                            <span className="installment">{modify ? <input type="text" value="60,000" disabled /> : "3,333"} 원</span>
                            <span className="percent">{modify ? <input type="text" value="33.3" disabled /> : "33.3"} %</span>
                            <span className="pay_date">2023-07-21 청구예정</span>
                        </p>
                        <p>
                            <span className="count">· 1회차</span>
                            <span className="installment">{modify ? <input type="text" value="0" /> : "3,333"} 원</span>
                            <span className="percent">{modify ? <input type="text" value="0" /> : "33.3"} %</span>
                            <span className="pay_date">2023-07-21 청구예정</span>
                        </p>
                        <p>
                            <span className="count">· 1회차</span>
                            <span className="installment">{modify ? <input type="text" value="0" /> : "3,333"} 원</span>
                            <span className="percent">{modify ? <input type="text" value="0" /> : "33.3"} %</span>
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
                        <span className="shop">백오피스</span>
                        <span className="company">인스피언</span>
                        <div className="product">
                            <p className="name"><span className="label_package">P</span>EDI 워크스페이스</p>
                            <p className="gray_txt">(단위 : 100GB / 수량 1개)</p>
                        </div>
                        <span className="price">10원<span className="gray_txt"> / 월</span></span>
                        <span className="pay_type"></span>
                        <span className="start_date">2023-06-23 개시</span>
                    </div>
                    <div className="list">
                        <span className="shop">스토어</span>
                        <span className="company">쿠팡</span>
                        <div className="product">
                            <p className="name"><span className="label_workspace">W</span>유통사 주문 수집</p>
                            <p className="gray_txt">(단위 : 20MB / 수량 123,456,789개)</p>
                        </div>
                        <span className="price">10,000<span className="gray_txt"> / 월</span></span>
                        <span className="pay_type"></span>
                        <span className="start_date">2023-06-23 개시</span>
                    </div>
                    <div className="list">
                        <span className="shop">백오피스</span>
                        <span className="company">만약 내용이 너무 길어지면 만약 내용이 너무 길어지면</span>
                        <div className="product">
                            <p className="name"><span className="label_workspace">W</span>유통사 주문 수집</p>
                            <p className="gray_txt">(단위 : 20MB / 수량 123,456,789개)</p>
                        </div>
                        <span className="price">1,000,000,000원<span className="gray_txt"> / 월</span></span>
                        <span className="pay_type"></span>
                        <span className="start_date">2023-06-23 개시</span>
                    </div>
                </div>
                <div className="order_total">
                    <p><span className="total_cnt">총 <b>3</b>건</span>=<span className="total_price">합계 1,000,010,010<span className="gray_txt"> / 월</span></span></p>
                </div>
            </div>
        </ProductListWrap>
    )
};
const OrderProduct = ({ modify }) => {
    const [toggle, setToggle] = useState([1, 2, 3, 4]);
    const [toggle2, setToggle2] = useState([1, 2]);

    return (
        <>
            {/*즉시구매*/}
            <BuyMethod1Wrap toggle={toggle} setToggle={setToggle} />
            {/*분할결제*/}
            <BuyMethod2Wrap toggle={toggle} toggle2={toggle2} setToggle={setToggle} setToggle2={setToggle2} modify={modify} />
            {/*즉시구매*/}
            <BuyMethod3Wrap toggle={toggle} setToggle={setToggle} />
        </>
    )
};

export default OrderProduct;