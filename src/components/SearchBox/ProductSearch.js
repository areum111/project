import React from 'react';
import { FilterLayer } from 'styles/store.styled.js';
import { MdOutlineClose } from "react-icons/md";
import SelectBox from "../SelectBox/SelectBox";
import ReactSlider from "react-slider";
import CustomDatePicker from "../datepicker/CustomDatePicker";
import Button from "../Button/Button";

function ProductSearch ({ selectFilter, setSelectFilter}) {
    const options1 = [
        {value: 1, label: "완전 일치"},
        {value: 2, label: "부분 일치"}
    ]
    const options2 = [
        {value: 1, label: "상품명"},
        {value: 2, label: "판매사"}
    ]
    const options3 = [
        {value: 1, label: "완전 일치"},
        {value: 2, label: "이상"},
        {value: 3, label: "이하"}
    ]
    const options4 = [
        {value: 1, label: "EA"},
        {value: 2, label: "GB"}
    ]
    const options5 = [
        {value: 1, label: "완전 일치"},
        {value: 2, label: "이상"},
        {value: 3, label: "이하"}
    ]

    return (
        <FilterLayer className={selectFilter ? "custom_scroll open" : "custom_scroll"}>
            <div className="scroll_inner">
                <p className="main_title">상품 검색
                    <button type="button" className="close" onClick={() => setSelectFilter(false)}><MdOutlineClose size={32} /></button>
                </p>
                <div className="filter">
                    <div className="title">
                        <span>검색어</span>
                        <SelectBox className="select no_border" size="small" options={options1} value={options1[0]} />
                    </div>
                    <div className="finder">
                        <SelectBox className="select" size="large" options={options2} value={options2[0]} />
                        <input type="text" placeholder="검색어" />
                    </div>
                </div>
                <div className="filter">
                    <div className="title">
                        <span>종류</span>
                    </div>
                    <div className="finder">
                        <ul>
                            <li className="selected">워크스페이스</li>
                            <li className="selected">워크스페이스</li>
                            <li>워크스페이스</li>
                            <li>워크스페이스</li>
                            <li className="selected">패키지</li>
                            <li>어댑터</li>
                            <li>부가서비스</li>
                        </ul>
                    </div>
                </div>
                <div className="filter">
                    <div className="title">
                        <span>판매처</span>
                    </div>
                    <div className="finder">
                        <ul>
                            <li className="selected">백오피스</li>
                            <li>스토어</li>
                        </ul>
                    </div>
                </div>
                <div className="filter">
                    <div className="title">
                        <span>유형</span>
                    </div>
                    <div className="finder">
                        <ul>
                            <li>즉시 구매</li>
                            <li className="selected">분할 결제</li>
                            <li>구독형</li>
                        </ul>
                    </div>
                </div>
                <div className="filter">
                    <div className="title">
                        <span>판매가</span>
                    </div>
                    <div className="finder">
                        <ReactSlider
                            className="slider"
                            thumbClassName="thumb"
                            trackClassName="track"
                            defaultValue={[0, 100000]}
                            max={100000}
                            min={0}
                            renderThumb={(props, state) => <div {...props}><span>￦ {state.valueNow}</span></div>}
                        />
                    </div>
                </div>
                <div className="filter">
                    <div className="title">
                        <span>단위</span>
                        <SelectBox className="select no_border" size="small" options={options3} value={options3[0]} />
                    </div>
                    <div className="finder">
                        <input type="text" placeholder="내용입력" />
                        <SelectBox className="select" size="large" options={options4} value={options4[0]} />
                    </div>
                </div>
                <div className="filter">
                    <div className="title">
                        <span>판매량</span>
                        <SelectBox className="select no_border" size="small" options={options5} value={options5[0]} />
                    </div>
                    <div className="finder">
                        <input type="text" placeholder="내용입력" className="full"/>
                    </div>
                </div>
                <div className="filter">
                    <div className="title">
                        <span>등록일</span>
                    </div>
                    <div className="finder date">
                        <CustomDatePicker /><span className="date_dash">~</span><CustomDatePicker />
                    </div>
                </div>
                <div className="center_button_wrap">
                    <Button type="button" className="large gray">초기화</Button>
                    <Button type="button" className="large">검색</Button>
                </div>
            </div>
        </FilterLayer>
    )
}

export default ProductSearch;