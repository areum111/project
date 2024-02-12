import React, { useState } from 'react';
import { ProductListWrap } from 'styles/store.styled.js';
import SelectBox from "components/SelectBox/SelectBox";
import Button from "components/Button/Button";
import Checkbox from "components/Checkbox/Checkbox";
import Pagination from "components/Pagination/Pagination";
import ConfirmDialog from "components/Modal/ConfirmDialog";
import ProductSearch from "components/SearchBox/ProductSearch";
import { Link } from "react-router-dom";

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
                                        <Button type="button" className="medium gray" onClick={() => setVisible1(true)}>판매중지</Button>
                                        <Button type="button" className="medium" addicon="true" onClick={() => window.location.href="/store/store3"}>상품 등록</Button>
                                    </div>
                                </div>
                                <div className="no_data">
                                    <p className="main_text">상품 데이터가 없습니다.</p>
                                    <p className="sub_text">※ 원하시는 상품이 없는 경우 <Link to="/" className="link">[Q&A]</Link> 또는 고객센터로 문의를 남겨주세요.</p>
                                </div>
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
        </>
    )
}

export default Store1;