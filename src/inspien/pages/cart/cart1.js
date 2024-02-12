import React, { useEffect, useState } from "react";
import { CartWrap } from "styles/cart.styled"
import Button from "components/Button/Button";
import Checkbox from "components/Checkbox/Checkbox";
import { customerTheme } from "theme";
import ConfirmDialog from "../../components/Modal/ConfirmDialog";

const Cart1 = ({ setTheme }) => {
    // 메인컬러 변경
    useEffect(() => {
        setTheme(customerTheme);
    });

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
                            <h3><Checkbox label="전체선택(0/0)" /></h3>
                            <Button type="button" className="small black outline" onClick={() => setVisible(true)}>선택삭제</Button>
                        </div>
                        <div className="outline_box no_data">
                            <p>장바구니 담긴 상품이 없습니다.</p>
                            <Button type="button" className="small outline">상품 둘러보기</Button>
                        </div>
                    </div>
                    <div className="cont_box price_wrap">
                        <div className="outline_box">
                            <p className="title">주문정보</p>
                            <div className="price_info">
                                <div>
                                    <p className="info_title">즉시구매</p>
                                    <p className="price">- 원</p>
                                </div>
                                <div>
                                    <p className="info_title">분할결제</p>
                                    <p className="price">- 원</p>
                                </div>
                                <div>
                                    <p className="info_title">구독형</p>
                                    <p className="price">- 원</p>
                                </div>
                            </div>
                            <div className="button_wrap">
                                <Button type="button" className="full large" onClick={() => setVisible2(true)}>주문하기</Button>
                                <Button type="button" className="full outline black">이용 상품 조회</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ConfirmDialog
                visible={visible}
                onConfirm={() => setVisible(false)}
                text={"삭제할 상품을 선택해주세요."}
            />
            <ConfirmDialog
                visible={visible2}
                onConfirm={() => setVisible2(false)}
                text={"상품을 선택해주세요."}
            />
        </CartWrap>
    )
};

export default Cart1;