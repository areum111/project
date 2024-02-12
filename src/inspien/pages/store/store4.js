import React, { useState, useMemo } from 'react';
import { RegProductWrap } from 'styles/store.styled.js';
import SelectBox from "components/SelectBox/SelectBox";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import Editor from 'components/Editor';
import RadioButton from "components/Radio/RadioButton";
import Button from "components/Button/Button";
import ConfirmDialog from "components/Modal/ConfirmDialog";

const Store4 = () => {
    const [toggle, setToggle] = useState([1, 2, 3, 4, 5]);
    const options1 = [
        {value: 1, label: "없음"}
    ]
    const options2 = [
        {value: 1, label: "없음"}
    ]
    const options3 = [
        {value: 1, label: "ea"},
        {value: 2, label: "KB"},
        {value: 3, label: "MB"},
        {value: 4, label: "GB"}
    ]
    const options4 = [
        {value: 1, label: "어댑터"}
    ]
    const options5 = [
        {value: 1, label: "직접 입력 (생성)"}
    ]

    //판매사 찾기 팝업
    const [visible1, setVisible1] = useState(false);
    //취소 팝업
    const [visible2, setVisible2] = useState(false);
    //저장 팝업
    const [visible3, setVisible3] = useState(false);

    const columnData = [
        {
            accessor: "name",
            Header: "회사명",
            width: "100%",
        },
    ]

    const columns = useMemo(() => columnData, []);

    const datas = useMemo(() => [
        {
            "name": <button type="button" className="company_name">삼성</button>,
        },
        {
            "name": <button type="button" className="company_name">네이버</button>,
        },
        {
            "name": <button type="button" className="company_name">카카오</button>,
        },
        {
            "name": <button type="button" className="company_name">토스</button>,
        },
        {
            "name": <button type="button" className="company_name">배달의 민족</button>,
        },
    ], [])
    return (
        <>
            <RegProductWrap>
                <div className="inner">
                    <div className="content">
                        <div className="title_area">
                            <h2>상품 등록</h2>
                            <span className="path">홈 > 상점 > 상품 등록</span>
                        </div>
                        <div className="cont_box">
                            <div className="cont_title">
                                <h3>기본 정보</h3>
                            </div>
                            <div className={toggle.includes(1) ? "outline_box" : "outline_box close"}>
                                <div className="title">
                                    <h4>등록 정보</h4>
                                    <span className="desc">상품의 종류 및 연결 구조</span>
                                    <button
                                        key="1"
                                        type="button"
                                        className="toggle"
                                        onClick={() => {
                                            !toggle.includes(1)
                                                ? setToggle((toggle) => [...toggle, 1])
                                                : setToggle(toggle.filter((button) => button !== 1));
                                        }}>
                                        {toggle.includes(1) ? <BsChevronUp size={20} /> : <BsChevronDown size={20} />}
                                    </button>
                                </div>
                                <table className="form_tb">
                                    <tbody>
                                    <tr className="col2">
                                        <th>종류</th>
                                        <td><div className="td_wrap"><SelectBox className="select" size="large" options={options4} value={options4[0]} /></div></td>
                                        <th>연계속성</th>
                                        <td><div className="td_wrap"><SelectBox className="select" size="large" options={options1} value={options1[0]} /></div></td>
                                    </tr>
                                    <tr className="col2">
                                        <th>부모 패밀리</th>
                                        <td><div className="td_wrap"><SelectBox className="select" size="large" options={options2} value={options2[0]} /></div></td>
                                        <th>패밀리</th>
                                        <td>
                                            <div className="td_wrap"><SelectBox className="select" size="large" options={options5} value={options5[0]} /></div>
                                            <input type="text" className="family_input" />
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className={toggle.includes(2) ? "outline_box" : "outline_box close"}>
                                <div className="title">
                                    <h4>상세정보</h4>
                                    <span className="desc">상품명 및 상세정보</span>
                                    <button
                                        key="2"
                                        type="button"
                                        className="toggle"
                                        onClick={() => {
                                            !toggle.includes(2)
                                                ? setToggle((toggle) => [...toggle, 2])
                                                : setToggle(toggle.filter((button) => button !== 2));
                                        }}>
                                        {toggle.includes(2) ? <BsChevronUp size={20} /> : <BsChevronDown size={20} />}
                                    </button>
                                </div>
                                <table className="form_tb">
                                    <tbody>
                                    <tr>
                                        <th>상품명</th>
                                        <td><input type="text" placeholder="상품명 입력" /></td>
                                    </tr>
                                    <tr>
                                        <th>상세설명</th>
                                        <td><Editor /></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="cont_box">
                            <div className="cont_title">
                                <h3>판매 정보</h3>
                            </div>
                            <div className={toggle.includes(3) ? "outline_box" : "outline_box close"}>
                                <div className="title">
                                    <h4>유형 및 구조</h4>
                                    <span className="desc">상품의 판매 구조를 설정</span>
                                    <button
                                        key="3"
                                        type="button"
                                        className="toggle"
                                        onClick={() => {
                                            !toggle.includes(3)
                                                ? setToggle((toggle) => [...toggle, 3])
                                                : setToggle(toggle.filter((button) => button !== 3));
                                        }}>
                                        {toggle.includes(3) ? <BsChevronUp size={20} /> : <BsChevronDown size={20} />}
                                    </button>
                                </div>
                                <table className="form_tb">
                                    <tbody>
                                    <tr className="col2">
                                        <th>유형</th>
                                        <td>
                                            <div className="td_wrap">
                                                <div className="radios">
                                                    <RadioButton label="즉시 구매" name="radio1" />
                                                    <RadioButton label="분할결제" name="radio1" />
                                                    <RadioButton label="구독형" name="radio1" checked />
                                                </div>
                                            </div>
                                        </td>
                                        <th>단위</th>
                                        <td>
                                            <div className="td_wrap">
                                                <input type="number" placeholder="수량 입력" className="input_cnt" />
                                                <SelectBox className="select" size="large" options={options3} value={options3[0]}/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>중복 주문</th>
                                        <td>
                                            <div className="td_wrap">
                                                <div className="radios">
                                                    <RadioButton label="가능" name="radio2" />
                                                    <RadioButton label="불가능" name="radio2" checked />
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>판매가</th>
                                        <td>
                                            <p className="dot_msg">상품을 판매할 가격을 1개 이상 입력해주세요. (미입력 국가의 고객에게는 상품이 표시되지 않습니다.)</p>
                                            <div className="price_wrap">
                                                <span className="country">대한민국</span>
                                                <input type="text" placeholder="판매가 입력" /> <span className="monthly">/원</span>
                                                <span className="unit">원(￦)</span>
                                            </div>
                                            <div className="price_wrap">
                                                <span className="country">미국</span>
                                                <input type="text" placeholder="판매가 입력" /> <span className="monthly">/원</span>
                                                <span className="unit">달러 ($)</span>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className={toggle.includes(4) ? "outline_box" : "outline_box close"}>
                                <div className="title">
                                    <h4>판매사</h4>
                                    <span className="desc">상품을 판매할 회사를 지정 (선택사항)</span>
                                    <button
                                        key="4"
                                        type="button"
                                        className="toggle"
                                        onClick={() => {
                                            !toggle.includes(4)
                                                ? setToggle((toggle) => [...toggle, 4])
                                                : setToggle(toggle.filter((button) => button !== 4));
                                        }}>
                                        {toggle.includes(4) ? <BsChevronUp size={20} /> : <BsChevronDown size={20} />}
                                    </button>
                                </div>
                                <table className="form_tb">
                                    <tbody>
                                    <tr className="col2">
                                        <th>판매사 <span>(선택)</span></th>
                                        <td>파트너1</td>
                                        <th>관리자</th>
                                        <td>홍길동</td>
                                    </tr>
                                    <tr className="col2">
                                        <th>대표 연락처</th>
                                        <td>010-1234-5678</td>
                                        <th>휴대폰 번호</th>
                                        <td>010-1234-5678</td>
                                    </tr>
                                    <tr>
                                        <th>이메일</th>
                                        <td>email@email.com</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="cont_box">
                            <div className="cont_title">
                                <h3>부가 정보</h3>
                            </div>
                            <div className={toggle.includes(5) ? "outline_box" : "outline_box close"}>
                                <div className="title">
                                    <h4>이용약관</h4>
                                    <span className="desc">상품 이용약관</span>
                                    <button
                                        key="5"
                                        type="button"
                                        className="toggle"
                                        onClick={() => {
                                            !toggle.includes(5)
                                                ? setToggle((toggle) => [...toggle, 5])
                                                : setToggle(toggle.filter((button) => button !== 5));
                                        }}>
                                        {toggle.includes(5) ? <BsChevronUp size={20} /> : <BsChevronDown size={20} />}
                                    </button>
                                </div>
                                <table className="form_tb">
                                    <tbody>
                                    <tr>
                                        <th>파일 첨부 <span>(선택)</span></th>
                                        <td className="attach">
                                            <div className="td_wrap">
                                                <span className="file_name">inspien.txt</span>
                                                <Button type="type" className="medium outline">파일 찾기</Button>
                                            </div>
                                            <p>- 용량 0KB/10MB x 1개</p>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="center_button_wrap">
                            <Button type="type" className="large gray" onClick={() => setVisible2(true)}>취소</Button>
                            <Button type="type" className="large" onClick={() => setVisible3(true)}>등록</Button>
                        </div>
                    </div>
                </div>
            </RegProductWrap>
            <ConfirmDialog
                visible={visible2}
                text={"입력한 모든 데이터가 사라집니다. \n 취소하시겠습니까?"}
                onCancel={() => setVisible2(false)}
                //onConfirm={}
            />
            <ConfirmDialog
                visible={visible3}
                text={"등록 후 수정이 불가합니다. \n 현재 입력된 정보로 등록하시겠습니까?"}
                onCancel={() => setVisible3(false)}
                //onConfirm={}
            />
        </>
    )
}

export default Store4;