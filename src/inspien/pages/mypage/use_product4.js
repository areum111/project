import React, { useMemo, useState } from "react";
import UseProduct2 from "pages/mypage/use_product2";
import { ModalWrap } from "styles/modal.styled";
import Dialog from "components/Modal/Dialog";
import DataTable from "components/Table/DataTable";

const UseProduct4 = ({ setTheme }) => {
    const [visible, setVisible] = useState(true);
    const columnData = [
        {
            accessor: "date",
            Header: "일자",
            width: "30%"
        },
        {
            accessor: "state",
            Header: "처리상태",
            width: "25%"
        },
        {
            accessor: "period",
            Header: "변경 후 이용기간",
            width: "auto"
        },
    ]

    const columns = useMemo(() => columnData, []);

    const datas = useMemo(() => [
        {
            "date": '2020-01-06',
            "state": '이용해지',
            "period": '2019-02-05 ~ 2020-03-17'
        },
        {
            "date": '2020-01-06',
            "state": '이용재개',
            "period": '2019-02-05 ~ 2020-03-17'
        },
        {
            "date": '2019-02-20',
            "state": '이용중지',
            "period": '-'
        },
    ], [])

    return (
        <>
            <UseProduct2 setTheme={setTheme} />
            <ModalWrap className="use_state_popup">
                <Dialog
                    size="large"
                    visible={visible}
                    onCancel={() => setVisible(false)}
                    title="이용상태 변경 내역"
                >
                    <p className="main_text">EDI 유통사 주문 수집</p>
                    <DataTable
                        columns={columns}
                        data={datas}
                    />
                </Dialog>
            </ModalWrap>
        </>
    )
}

export default UseProduct4;