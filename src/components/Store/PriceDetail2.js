import React, {useEffect, useState} from 'react';
import Button from "components/Button/Button";
import ConfirmDialog from "components/Modal/ConfirmDialog";
import {customerTheme} from "theme";
import CustomDatePicker from "../datepicker/CustomDatePicker";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";

function PrdDetail2({ setTheme, duplicate }){
    useEffect(() => {
        setTheme(customerTheme);
    }, []);
    //팝업
    const [visible, setVisible] = useState(false);

    return (
        <>
            <div className="price_detail">
                <div className="outline_box">
                    <p className="title">즉시구매</p>
                    <div className="price_info">
                        <div>
                            <p className="info_title">이용 개시</p>
                            <div className="info_text">
                                <CustomDatePicker />
                                <p className="dot_msg">이용 개시일을 기준으로 사용 금액 익월 청구 예정</p>
                            </div>
                        </div>
                        <div>
                            <p className="info_title">단위</p>
                            <div className="info_text">100<span className="unit">GB</span></div>
                        </div>
                        <div>
                            <p className="info_title">판매가</p>
                            <div className="info_text">90,000<span className="unit">원</span></div>
                        </div>
                        <div>
                            <p className="info_title">수량</p>
                            <div className="info_text">
                                <div className="count_box">
                                    <button type="button"><AiOutlineMinus /></button>
                                    <label>1</label>
                                    <button type="button"><AiOutlinePlus /></button>
                                </div>
                            </div>
                        </div>
                        <div className="total">
                            <p className="info_title">총 상품 금액</p>
                            <div className="info_text">90,000<span className="unit">원</span></div>
                        </div>
                    </div>
                </div>
                <Button type="button" className="large full" onClick={() => setVisible(true)}>장바구니</Button>
            </div>
            <ConfirmDialog
                visible={visible}
                onConfirm={() => setVisible(false)}
            >
                <p>이미 장바구니에 담긴 상품입니다.<br /><span className="red_txt">※ [상품명] 중복 구매 불가</span></p>
            </ConfirmDialog>
        </>
    )
}

export default PrdDetail2;