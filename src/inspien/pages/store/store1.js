import React, { useState } from 'react';
import { ProductListWrap } from 'styles/store.styled.js';
import SelectBox from "components/SelectBox/SelectBox";
import Button from "components/Button/Button";
import Checkbox from "components/Checkbox/Checkbox";
import Pagination from "components/Pagination/Pagination";
import ConfirmDialog from "components/Modal/ConfirmDialog";
import ProductSearch from "components/SearchBox/ProductSearch";

const Store1 = () => {
    //탭
    const tabLists = [
        {id: 0, title: "전체"},
        {id: 1, title: "판매중"},
        {id: 2, title: "판매중지"}
    ]
    const [index, setIndex] = useState(0);

    //상품 검색하기 레이어
    const [visibleFilter, setVisibleFilter] = useState(false);
    const [selectFilter, setSelectFilter] = useState(false);

    const options1 = [
        {value: 1, label: "최근 등록순"},
        {value: 2, label: "낮은 가격순"},
        {value: 3, label: "높은 가격순"},
        {value: 4, label: "높은 판매순"}
    ]
    const options2 = [
        {value: 1, label: "20개씩 보기"},
        {value: 2, label: "40개씩 보기"},
        {value: 3, label: "60개씩 보기"},
        {value: 4, label: "80개씩 보기"}
    ]

    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
    const [visible4, setVisible4] = useState(false);

    return (
        <>
            <ProductListWrap>
                <div className="inner">
                    <div className="content">
                        <div className="title_area">
                            <h2>상점</h2>
                            <span className="path">홈 > 상점</span>
                        </div>
                        <div className="cont_box">
                            <div className="tab_menu_wrap">
                                <ul className="tab_menu">
                                    {tabLists.map((list) => {
                                        return (
                                            <li
                                                key={list.id}
                                                className={index === list.id ? "on" : null}
                                                onClick={() => setIndex(list.id)}
                                            ><span>{list.title}</span></li>
                                        )
                                    })}
                                </ul>
                                <div className="filter_wrap">
                                    <button
                                        type="button"
                                        className="filter_btn"
                                        onClick={() => {setVisibleFilter(true);setSelectFilter(true);}}
                                    >상품 검색하기 ></button>
                                    { visibleFilter ? <ProductSearch selectFilter={selectFilter} setSelectFilter={setSelectFilter} /> : null }
                                </div>
                            </div>
                            <div className="outline_box">
                                <div className="tb_top">
                                    <span className="cnt">총 123개</span>
                                    <div className="right">
                                        <SelectBox className="select" options={options1} value={options1[0]} />
                                        <SelectBox className="select" options={options2} value={options2[0]} />
                                    </div>
                                </div>
                                <div className="top_button_wrap">
                                    <div className="right">
                                        <Button type="button" className="medium gray" onClick={() => setVisible2(true)}>판매중지</Button>
                                        <Button type="button" className="medium" addicon="true" onClick={() => window.location.href="/store/store3"}>상품 등록</Button>
                                    </div>
                                </div>
                                <ul className="product_list">
                                    <li className="selected">
                                        <p>
                                            <span className="small_label purple">종류</span>
                                        </p>
                                        <Checkbox checked />
                                        <p className="prd_name">상품명이 한줄로 들어가고 길어지면</p>
                                        <p className="selling">판매량 : 1,000,000,000</p>
                                        <p className="company">판매사</p>
                                        <p className="store_date"><span className="store">판매처</span><span className="reg_date">등록 일자</span></p>
                                        <div className="bottom_info">
                                            <span>단위 단위표기</span>
                                            <div className="pay_info">
                                                <span className="pay_type">구매유형</span>
                                                <span className="price">￦금액<span> / 월</span></span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="disabled">
                                        <p>
                                            <span className="small_label purple">패키지</span>
                                        </p>
                                        <p className="prd_name">CVS 주문수집 패키지</p>
                                        <p className="selling">판매량 : 0</p>
                                        <p className="company">인스피언</p>
                                        <p className="store_date"><span className="store">백오피스</span><span className="reg_date">2023-08-15</span></p>
                                        <div className="bottom_info">
                                            <span>단위 1EA</span>
                                            <div className="pay_info">
                                                <span className="pay_type">분할결제</span>
                                                <span className="price"><strike>￦150,000</strike><span> / 월</span></span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="selected">
                                        <p>
                                            <span className="small_label blue">어댑터</span>
                                        </p>
                                        <Checkbox checked />
                                        <p className="prd_name">아마존 정산정보 수집</p>
                                        <p className="selling">판매량 : 0</p>
                                        <p className="company">-</p>
                                        <p className="store_date"><span className="store">백오피스</span><span className="reg_date">2023-08-05</span></p>
                                        <div className="bottom_info">
                                            <span>단위 100GB</span>
                                            <div className="pay_info">
                                                <span className="pay_type">즉시결제</span>
                                                <span className="price">￦1,000</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="disabled">
                                        <p>
                                            <span className="small_label orange">부가서비스</span>
                                        </p>
                                        <p className="prd_name">Message Box</p>
                                        <p className="selling">판매량 : 1,000,000,000</p>
                                        <p className="company">-</p>
                                        <p className="store_date"><span className="store">스토어</span><span className="reg_date">2023-06-05</span></p>
                                        <div className="bottom_info">
                                            <span>단위 1EA</span>
                                            <div className="pay_info">
                                                <span className="pay_type">즉시결제</span>
                                                <span className="price"><strike>￦500</strike></span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <p>
                                            <span className="small_label green">워크스페이스</span>
                                        </p>
                                        <Checkbox />
                                        <p className="prd_name">Workspace-Deault</p>
                                        <p className="selling">판매량 : 1,000,000,000</p>
                                        <p className="company">인스피언</p>
                                        <p className="store_date"><span className="store">스토어</span><span className="reg_date">2023-06-05</span></p>
                                        <div className="bottom_info">
                                            <span>단위 100GB</span>
                                            <div className="pay_info">
                                                <span className="pay_type">구독형</span>
                                                <span className="price">￦150,000<span> / 월</span></span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <Pagination />
                            </div>
                        </div>
                    </div>
                </div>
            </ProductListWrap>
            <ConfirmDialog
                visible={visible1}
                text="상품을 선택해주세요."
                onConfirm={() => setVisible1(false)}
            />
            <ConfirmDialog
                visible={visible2}
                text="선택한 NN개 상품을 판매중지 하시겠습니까?"
                subText="※ 변경 후 수정 불가합니다."
                onCancel={() => setVisible2(false)}
                onConfirm={() => {setVisible2(false); setVisible3(true);}}
            />
            <ConfirmDialog
                visible={visible3}
                text="NN개 상품이 판매중지되었습니다."
                onConfirm={() => setVisible3(false)}
            />
            <ConfirmDialog
                visible={visible4}
                text="NN개 상품이 판매중지되었습니다."
                subText="※ 실패: 판매사 미등록 상품 MM 개"
                onConfirm={() => setVisible4(false)}
            />
        </>
    )
}

export default Store1;