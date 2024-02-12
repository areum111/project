import React, {useEffect, useState} from 'react';
import Button from "components/Button/Button";
import ConfirmDialog from "components/Modal/ConfirmDialog";
import CustomDatePicker from "../datepicker/CustomDatePicker";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import RadioButton from "../Radio/RadioButton";
import Dialog from "../Modal/Dialog";
import DialogCheck from "../../images/ico/ico_check_bg.svg";
import {ModalWrap} from "../../styles/modal.styled";
import {customerTheme} from "../../theme";

function PrdDetail3({ setTheme }){
    useEffect(() => {
        setTheme(customerTheme);
    }, []);
    const [check, setCheck] = useState("pay1");
    //팝업
    const [visible, setVisible] = useState(false);

    return (
        <>
            <div className="price_detail">
                <div className="outline_box">
                    <p className="title">분할 결제</p>
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
                        <div>
                            <p className="info_title">결제 방식</p>
                            <div className="info_text">
                                <div className="radios">
                                    <RadioButton label="일시불" name="pay" id="pay1" onChange={() => setCheck("pay1")} checked={check === "pay1" && "true"} />
                                    <RadioButton label="분할결제" name="pay" id="pay2" onChange={() => setCheck("pay2")} checked={check === "pay2" && "true"} />
                                </div>
                            </div>
                        </div>
                        {check === "pay2" ? <div className="pay_detail">
                            <p>
                                <span className="count">· 1회차</span>
                                <span className="percent"><input type="text" value="33.3" />%</span>
                                <span className="installment"><input type="text" value="60,000" /> 원</span>
                            </p>
                            <p>
                                <span className="count">· 1회차</span>
                                <span className="percent"><input type="text" value="33.3" />%</span>
                                <span className="installment"><input type="text" value="60,000" /> 원</span>
                            </p>
                            <p>
                                <span className="count">· 1회차</span>
                                <span className="percent"><input type="text" value="33.3" />%</span>
                                <span className="installment"><input type="text" value="60,000" /> 원</span>
                            </p>
                        </div> : null}
                        <div className="total">
                            <p className="info_title">총 상품 금액</p>
                            <div className="info_text">90,000<span className="unit">원</span></div>
                        </div>
                    </div>
                </div>
                <Button type="button" className="large full" onClick={() => setVisible(true)}>장바구니</Button>
            </div>
            <ConfirmDialog
                text={"판매 재개는 불가합니다. \n 상품의 판매를 중지하시겠습니까?"}
                visible={visible}
                onConfirm={() => setVisible(false)}
                onCancel={() => setVisible(false)}
            />
            <ModalWrap className="complete_order_modal">
                <Dialog visible={visible} size={"small"} onCancel={() => setVisible(false)}>
                    <div className="modal_text">
                        <img src={DialogCheck} alt="" />
                        <p className="main_text">장바구니 담기 완료</p>
                        <p className="sub_text"><b>EDI 워크스페이스 구축</b> 상품이<br />장바구니에 정상적으로 담겼습니다.</p>
                    </div>
                    <div className="button_wrap">
                        <Button type="button" className="large" onClick={() => window.location.href = "/cart/cart2"}>장바구니 이동</Button>
                    </div>
                </Dialog>
            </ModalWrap>
        </>
    )
}

export default PrdDetail3;