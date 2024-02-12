import React, { useState } from "react";
import Cart2 from "./cart2";
import ConfirmDialog from "components/Modal/ConfirmDialog";

const Cart6 = ({ setTheme }) => {
    const [visible, setVisible] = useState(true);
    return (
        <>
            <Cart2 setTheme={setTheme} />
            <ConfirmDialog
                visible={visible}
                text={"상품을 선택해주세요."}
                onConfirm={() => setVisible(false)}
            />
        </>
    )
}

export default Cart6;