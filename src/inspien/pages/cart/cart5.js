import React, { useState } from "react";
import Cart2 from "./cart2";
import ConfirmDialog from "components/Modal/ConfirmDialog";

const Cart5 = ({ setTheme }) => {
    const [visible, setVisible] = useState(true);
    return (
        <>
            <Cart2 setTheme={setTheme} />
            <ConfirmDialog
                visible={visible}
                text={"단독 주문이 불가한 상품입니다."}
                subText={"상품 상세 페이지에서 패밀리 상품 조회가 가능합니다. \n 패밀리 상품을 장바구니에 함께 담아 주문해주세요."}
                onConfirm={() => setVisible(false)}
            />
        </>
    )
}

export default Cart5;