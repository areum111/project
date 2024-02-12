import React, { useState } from "react";
import Cart2 from "./cart2";
import ConfirmDialog from "components/Modal/ConfirmDialog";

const Cart7 = ({ setTheme }) => {
    const [visible, setVisible] = useState(true);
    return (
        <>
            <Cart2 setTheme={setTheme} />
            <ConfirmDialog
                visible={visible}
                text={"NN건의 단독 주문 불가 상품이 있습니다. \n 제외하고 주문하시겠습니까?"}
                //onConfirm={}
                onCancel={() => setVisible(false)}
            />
        </>
    )
}

export default Cart7;