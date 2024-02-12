import React, { useState, useMemo } from "react";
import { CustomerWrap } from "styles/service.styled";
import SelectBox from "components/SelectBox/SelectBox";
import CustomDatePicker from "components/datepicker/CustomDatePicker";
import Button from "components/Button/Button";
import DataTable from "components/Table/DataTable";
import Pagination from "components/Pagination/Pagination";
import {Link} from "react-router-dom";
import Dialog from "components/Modal/Dialog";
import {ModalWrap} from "styles/modal.styled";
import ConfirmDialog from "components/Modal/ConfirmDialog";
import Checkbox from "components/Checkbox/Checkbox";

const CustomerList = () => {
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
    const [visible4, setVisible4] = useState(false);
    const options1 = [
        {value: 1, label: "완전 일치"},
        {value: 2, label: "부분 일치"}
    ]
    const options2 = [
        {value: 1, label: "회사명"},
        {value: 2, label: "대표자"},
        {value: 3, label: "사업자번호"},
        {value: 4, label: "관리자 성명"},
        {value: 5, label: "관리자 아이디"}
    ]
    const options3 = [
        {value: 1, label: "최근 가입순"},
        {value: 2, label: "최근 승인순"}
    ]
    const options4 = [
        {value: 1, label: "10개씩 보기"},
        {value: 2, label: "30개씩 보기"},
        {value: 3, label: "50개씩 보기"},
        {value: 4, label: "100개씩 보기"}
    ]
    const options5 = [
        {value: 1, label: "증액(+)"},
        {value: 2, label: "차감(-)"},
    ]

    //고객 리스트
    const columnData = [
        {
            accessor: 'no',
            Header: 'No',
            width: '7%',
        },
        {
            accessor: 'company_name',
            Header: '회사명',
            width: '10%',
        },
        {
            accessor: 'ceo',
            Header: '대표자',
            width: '10%',
        },
        {
            accessor: 'company_no',
            Header: '사업자번호',
            width: '12%',
        },
        {
            accessor: 'pay_date',
            Header: '정산 희망일',
            width: '10%',
        },
        {
            accessor: 'admin_id',
            Header: '관리자 (아이디)',
            width: 'auto',
        },
        {
            accessor: 'join_state',
            Header: '승인 상태',
            width: '10%',
        },
        {
            accessor: 'join_date',
            Header: '가입일',
            width: '10%',
        },
        {
            accessor: 'mileage',
            Header: '보유 마일리지',
            width: '15%',
        },
    ]

    const columns = useMemo(() => columnData, []);

    const datas = useMemo(() => [
        {
            "no": 2,
            "company_name": <Link to="/customer/company_detail?company_no=2" className="link">이용상품 없음</Link>,
            "ceo": "이재용",
            "company_no": "124-81-00998",
            "pay_date": "01일",
            "admin_id": <Link to="/customer/user_detail" className="link bk">홍길동(exampleid01)</Link>,
            "join_state": "가입 완료",
            "join_date": "2023-06-25",
            "mileage": <div>100,000,000 M<Button type="button" className="small dark_gray" onClick={() => setVisible(true)}>관리</Button></div>,
        },
        {
            "no": 1,
            "company_name": <Link to="/customer/company_detail?company_no=1" className="link">이용상품 있음</Link>,
            "ceo": "이재용",
            "company_no": "124-81-00998",
            "pay_date": "01일",
            "admin_id": <Link to="/customer/user_detail" className="link bk">홍길동(exampleid01)</Link>,
            "join_state": "가입 완료",
            "join_date": "2023-06-25",
            "mileage": <div>100,000,000 M<Button type="button" className="small dark_gray" onClick={() => setVisible(true)}>관리</Button></div>,
        }
    ], [])

    //관리 팝업
    const columnData2 = [
        {
            accessor: 'date',
            Header: '일자',
            width: '20%',
        },
        {
            accessor: 'content',
            Header: '마일리지 내용',
            width: 'auto',
        },
        {
            accessor: 'mileage',
            Header: '마일리지',
            width: '22%',
        },
    ]

    const columns2 = useMemo(() => columnData2, []);

    const datas2 = useMemo(() => [
        {
            "date": "2023-06-25",
            "content": <div className="td_wrap">
                <SelectBox className="select" options={options5} value={options5[0]} />
                <input type="text" className="" placeholder="마일리지 내용 입력" />
            </div>,
            "mileage": <input type="text" placeholder="금액 입력" className="mileage" />,
        },
        {
            "date": "2023-06-25",
            "content": "패키지 상품 프로모션",
            "mileage": "+ 100,000",
        },
        {
            "date": "2023-06-25",
            "content": "패키지 상품 프로모션",
            "mileage": "+ 100,000",
        },
        {
            "date": "2023-06-25",
            "content": "패키지 상품 프로모션",
            "mileage": "+ 100,000",
        },
        {
            "date": "2023-06-25",
            "content": "패키지 상품 프로모션",
            "mileage": "+ 100,000",
        },
        {
            "date": "2023-06-25",
            "content": "패키지 상품 프로모션",
            "mileage": "+ 100,000",
        },
        {
            "date": "2023-06-25",
            "content": "패키지 상품 프로모션",
            "mileage": "+ 100,000",
        },
    ], [])
    return (
        <CustomerWrap>
            <div className="inner">
                <div className="title_area">
                    <h2>고객 관리</h2>
                    <div className="path">홈 > 서비스 지원 > 고객 관리</div>
                </div>
                <div className="content">
                    <div className="cont_box">
                        <div className="outline_box search_box">
                            <table className="form_tb">
                                <tbody>
                                <tr>
                                    <th>검색어</th>
                                    <td>
                                        <div className="td_wrap">
                                            <div className="select_condition"><SelectBox className="select no_border" options={options1} value={options1[0]} /></div>
                                            <SelectBox className="select l" size="large" options={options2} value={options2[0]} />
                                            <input type="text" placeholder="입력" className="keyword xl" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th>상태</th>
                                    <td>
                                        <div className="td_wrap wrap">
                                            <Checkbox label="전체" id="check1" checked />
                                            <Checkbox label="가입 완료" id="check2" checked />
                                            <Checkbox label="승인 대기" id="check3" checked />
                                            <Checkbox label="승인완료" id="check4" checked />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th>가입일</th>
                                    <td>
                                        <div className="td_wrap">
                                            <CustomDatePicker /><span className="date_dash">~</span><CustomDatePicker />
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <div className="search_btn_wrap">
                                <Button className="large gray">초기화</Button>
                                <Button className="large">검색</Button>
                            </div>
                        </div>
                        <div className="outline_box">
                            <div className="tb_top">
                                <span className="cnt">총 10개</span>
                                <div className="right">
                                    <SelectBox className="select" options={options3} value={options3[0]} />
                                    <SelectBox className="select" options={options4} value={options4[0]} />
                                </div>
                            </div>
                            <DataTable
                                columns={columns}
                                data={datas}
                            />
                            <Pagination />
                        </div>
                    </div>
                </div>
            </div>
            <ModalWrap className="select_tb_modal customer_mileage_popup">
                <Dialog
                    title={"고객 관리"}
                    visible={visible}
                    onCancel={() => setVisible(false)}
                    size="large"
                    scroll={true}
                >
                    <div className="scroll_inner">
                        <div className="company_info">
                            <p>삼성전자의 마일리지<span>(사업자 번호 : 124-81-00998)</span></p>
                        </div>
                        <div className="data_wrap">
                            <div className="tb_top">
                                <p>적립 내역<span>보유 마일리지 : 50,000</span></p>
                                <Button type="button" className="small" addicon>추가</Button>
                            </div>
                            <DataTable
                                columns={columns2}
                                data={datas2}
                            />
                        </div>
                    </div>
                    <div className="center_button_wrap">
                        <Button type="button" className="outline large" onClick={() => setVisible(false)}>취소</Button>
                        <Button type="button" className="large" onClick={() => setVisible2(true)}>저장</Button>
                    </div>
                </Dialog>
            </ModalWrap>
            {/*차감 마일리지 > 보유 마일리지인 경우*/}
            <ConfirmDialog
                text={"차감하려는 마일리지가 보유 마일리지보다 큽니다. \n 마일리지 금액을 다시 확인해 주세요."}
                visible={visible2}
                onConfirm={() => setVisible2(false)}
            />
            {/*유효 상태에서 [저장] 클릭 시 컨펌 노출*/}
            <ConfirmDialog
                text="삼성전자의 마일리지를 변경하시겠습니까?"
                visible={visible3}
                onCancel={() => setVisible3(false)}
                onConfirm={() => {setVisible3(false);setVisible4(true);}}
            />
            {/*[저장] 클릭 시 적립 내역 저장 처리 & 알럿 노출*/}
            <ConfirmDialog
                text="마일리지가 변경되었습니다."
                visible={visible4}
                onConfirm={() => setVisible4(false)}
            />
        </CustomerWrap>
    )
};

export default CustomerList;