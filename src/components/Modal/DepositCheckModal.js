import React from 'react';
import Dialog from "./Dialog";
import Button from "../Button/Button";
import {ModalWrap} from "styles/modal.styled";

const DepositCheckModal = ({ visible2, setVisible2, checkDeposit }) => {
    return (
        <ModalWrap className="deposit_check_modal">
            <Dialog visible={visible2} size="medium" onCancel={() => setVisible2(false)}>
                <div className="modal_text">
                    <p className="sub_title">입금 확인</p>
                    <p className="main_text">입금 확인하시겠습니까?</p>
                    <p className="sub_text"><b>삼성전자 (124-81-00998)</b>의 인보이스가 입금 확인됩니다.</p>
                </div>
                <div className="guide_wrap">
                    <div className="guide_inner">
                        <p className="dot_msg">사용 기간 : 2023-05-01 ~ 2023-05-31</p>
                        <p className="dot_msg">인보이스 번호 : 20230605-223314</p>
                        <p className="dot_msg">금액 : 15,000,000원</p>
                        <p className="dot_msg">정산 방식 : 계좌이체</p>
                        <p className="dot_msg">정산 담당자 : 이재용</p>
                    </div>
                </div>
                <div className="button_wrap">
                    <Button type="button" className="large outline" onClick={() => setVisible2(false)}>취소</Button>
                    <Button type="button" className="large" onClick={checkDeposit}>확인</Button>
                </div>
            </Dialog>
        </ModalWrap>
    )
};

export default DepositCheckModal;