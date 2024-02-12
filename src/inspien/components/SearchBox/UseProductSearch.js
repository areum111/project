import React, { useState } from "react";
import SelectBox from "../SelectBox/SelectBox";
import CustomDatePicker from "../datepicker/CustomDatePicker";
import Checkbox from "../Checkbox/Checkbox";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import Button from "../Button/Button";

const useProductSearch = () => {
    const [visible, setVisible] = useState(true);

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

    return (
        <div className="cont_box">
            <div className="outline_box search_box">
                <table className="form_tb">
                    <tbody>
                        <tr>
                            <th>검색어</th>
                            <td>
                                <div className="td_wrap">
                                    <div className="select_condition"><SelectBox className="select no_border" options={options1} value={options1[0]} /></div>
                                    <SelectBox className="select l" size="large" options={options2} value={options2[0]} />
                                    <input type="text" placeholder="입력" className="keyword xl" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>상태</th>
                            <td>
                                <div className="td_wrap wrap">
                                    <Checkbox label="전체" id="check1" checked={true} />
                                    <Checkbox label="이용예정" id="check2" checked={true} />
                                    <Checkbox label="이용중" id="check3" checked={true} />
                                    <Checkbox label="이용중지" id="check4" checked={true} />
                                    <Checkbox label="이용해지" id="check5" checked={true} />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>판매처</th>
                            <td>
                                <div className="td_wrap wrap">
                                    <Checkbox label="전체" id="check1" checked={ true }/>
                                    <Checkbox label="백오피스" id="check2" checked={ true }/>
                                    <Checkbox label="connect 2.0" id="check3" checked={ true }/>
                                    <Checkbox label="스토어" id="check4" checked={ true }/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>이용 개시일</th>
                            <td>
                                <div className="td_wrap">
                                    <CustomDatePicker /><span className="date_dash">~</span><CustomDatePicker />
                                </div>
                            </td>
                        </tr>
                        { visible && <tr>
                            <th>금액</th>
                            <td>
                                <div className="td_wrap">
                                    <div className="select_condition"><SelectBox className="select no_border" options={options3} value={options3[0]} /></div>
                                    <input type="text" placeholder="입력" className="" />
                                </div>
                            </td>
                        </tr> }
                    </tbody>
                </table>
                <div className="toggle_btn_wrap">
                    { visible
                        ? <button type="button" onClick={ () => setVisible(!visible) }>상세검색 닫기<BsChevronUp size={ 18 } /></button>
                        : <button type="button" onClick={ () => setVisible(!visible) }>상세검색 펼치기<BsChevronDown size={ 18 } /> </button>
                    }
                </div>
                <div className="search_btn_wrap">
                    <Button className="large gray">초기화</Button>
                    <Button className="large">검색</Button>
                </div>
            </div>
        </div>
    )
};

export default useProductSearch;
