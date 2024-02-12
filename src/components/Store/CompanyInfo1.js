import React from 'react';
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

function CompanyInfo1({ id, toggle, setToggle, company }){
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
            {company ? <div className="toggle_wrap">
                <table className="form_tb">
                    <tbody>
                    <tr className="col2">
                        <th>판매사</th>
                        <td>SK</td>
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
            </div> : <div className="toggle_wrap"><p className="no_data">등록된 판매사가 없습니다.</p></div>}
        </div>
    )
}

export default CompanyInfo1;