import React, { useState } from "react";
import SelectBox from "../SelectBox/SelectBox";
import CustomDatePicker from "../datepicker/CustomDatePicker";
import Button from "../Button/Button";

const OrderListSearch = () => {
    const [visible, setVisible] = useState(true);

    const options1 = [
        {value: 1, label: "완전 일치"},
        {value: 2, label: "부분 일치"}
    ]
    const options2 = [
        {value: 1, label: "주문번호"},
        {value: 2, label: "구매사"},
        {value: 3, label: "주문자"},
        {value: 4, label: "주문상품"}
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
                            <th>주문일</th>
                            <td>
                                <div className="td_wrap">
                                    <CustomDatePicker /><span className="date_dash">~</span><CustomDatePicker />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="search_btn_wrap">
                    <Button className="large gray">초기화</Button>
                    <Button className="large">검색</Button>
                </div>
            </div>
        </div>
    )
};

export default OrderListSearch;
