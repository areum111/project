import React, {useEffect, useState} from 'react';
import Button from "components/Button/Button";
import ConfirmDialog from "components/Modal/ConfirmDialog";
import CustomDatePicker from "../datepicker/CustomDatePicker";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import {Link} from "react-router-dom";
import {customerTheme} from "../../theme";

function PrdDetail5({ setTheme, duplicate, family, unavailable, onContentClick }){
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

                {/*중복 구매 불가 상품*/}
                {duplicate ? <>
                    <Button type="button" className="large full disabled">장바구니</Button>
                    <div className="guide_box">
                        <p className="red_txt">이미 이용중인 상품입니다.</p>
                        <p>해당 상품은 중복 주문이 불가합니다. <Link to="/mypage/use_product1"><span className="link">이용상품</span></Link>을 확인해주세요.</p>
                        <p>※ 문의 : 고객 지원 센터(02-000-0000)</p>
                    </div>
                </> : null}
                {/*중복 구매 불가 상품*/}

                {/*단독 주문 불가 - 패밀리 상품*/}
                {family ? <>
                    <Button type="button" className="large full" onClick={() => setVisible(true)}>장바구니</Button>
                    <div className="guide_box">
                        <p>단독 주문과 이용이 불가한 패밀리 상품입니다.</p>
                        <p>하단의 <span className="link" onClick={onContentClick}>상품정보</span>에서 부모 패밀리 정보를 확인 후 같이 장바구니에 담아주세요.</p>
                        <p>※ 이미 부모 패밀리 상품을 이용중인 경우 재구매는 불필요합니다.</p>
                    </div>
                </> : null}
                {/*단독 주문 불가 - 패밀리 상품*/}

                {/*판매 중지 상품*/}
                {unavailable ? <>
                    <div className="guide_box">
                        <p className="red_txt">해당 상품은 판매가 중지되었습니다. (판매 중지 일자 : 2023-06-13)</p>
                        <p>이미 상품을 주문한 고객은 상품 이용을 지속할 수 있습니다.</p>
                    </div>
                </> : null}
                {/*판매 중지 상품*/}
            </div>
            <ConfirmDialog
                visible={visible}
                text="부모 패밀리 상품이 반드시 필요한 상품입니다."
                subText="확인 시 관련 상품의 상세 페이지로 이동합니다."
                //onConfirm={}
                onCancel={() => setVisible(false)}
            />
        </>
    )
}

export default PrdDetail5;