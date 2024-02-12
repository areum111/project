import React from 'react';
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

function CompanyInfo2({ id, toggle, setToggle }){
    return (
        <div className={toggle.includes(id) ? "outline_box" : "outline_box close"}>
            <div className="title">
                <h4>판매사</h4>
                <button
                    key={id}
                    type="button"
                    className="toggle"
                    onClick={() => {
                        !toggle.includes(id)
                            ? setToggle((toggle) => [...toggle, id])
                            : setToggle(toggle.filter((button) => button !== id));
                    }}>
                    {toggle.includes(id) ? <BsChevronUp size={20} /> : <BsChevronDown size={20} />}
                </button>
            </div>
            <div className="toggle_wrap">
                <table className="form_tb">
                    <tbody>
                    <tr className="col2">
                        <th>등록자</th>
                        <td>김인스</td>
                        <th>회사명</th>
                        <td>SK</td>
                    </tr>
                    <tr className="col2">
                        <th>관리자</th>
                        <td>홍길동</td>
                        <th>대표 연락처</th>
                        <td>010-1234-5678</td>
                    </tr>
                    <tr className="col2">
                        <th>휴대폰번호</th>
                        <td>010-1234-5678</td>
                        <th>이메일</th>
                        <td>email@email.com</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CompanyInfo2;