import React, { useState } from "react";
import Cart2 from "./cart2";
import DialogCheck from "images/ico/ico_check_bg.svg";
import Dialog from "components/Modal/Dialog";
import Button from "components/Button/Button";
import { Link } from "react-router-dom";
import { ModalWrap } from "styles/modal.styled";

const Cart3 = ({ setTheme }) => {

    const [visible, setVisible] = useState(true);
    return (
        <>
            <Cart2 setTheme={setTheme} />
            <ModalWrap className="complete_order_modal">
                <Dialog visible={visible} size="small" onCancel={() => setVisible(false)}>
                    <div className="modal_text">
                        <img src={DialogCheck} alt="" />
                        <p className="main_text">주문이 완료되었습니다.</p>
                        <div className="gray_box">
                            <p className="dot_msg">주문 번호 : 200607-00001 </p>
                            <p className="dot_msg">주문 상품 : 총 2개의 상품</p>
                        </div>
                        <p className="sub_text"><Link to="/">주문내역</Link> 또는 <Link to="/">이용 상품</Link>에서 상품을 조회할 수 있습니다.</p>
                    </div>
                    <div className="button_wrap">
                        <Button type="button" className="large" onClick={() => setVisible(false)}>확인</Button>
                    </div>
                </Dialog>
            </ModalWrap>
        </>
    )
}

export default Cart3;