import ConfirmDialog from "./ConfirmDialog";
import React, { useState } from "react";

const BackConfirmDialog = ({ visible, onCancel, onConfirm }) => {

    return (
        <ConfirmDialog
            visible={visible}
            onCancel={onCancel}
            onConfirm={onConfirm}
            text={"변경 사항이 저장되지 않을 수 있습니다. \n 이전 페이지로 이동하시겠습니까?"}
        />
    )
};

export default BackConfirmDialog;