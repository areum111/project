import React, { useState } from "react";
import Cart2 from "./cart2";
import ConfirmDialog from "components/Modal/ConfirmDialog";

const Cart4 = ({ setTheme }) => {
    const [visible, setVisible] = useState(true);
    return (
        <>
            <Cart2 setTheme={setTheme} />
            <ConfirmDialog
                visible={visible}
                text={"쇼핑몰 및 주문 관련 이용약관에 동의해주세요."}
                onConfirm={() => setVisible(false)}
            />
        </>
    )
}

export default Cart4;