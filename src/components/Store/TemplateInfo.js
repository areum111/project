import React from 'react';
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import {Link} from "react-router-dom";

function TemplateInfo({ id, toggle, setToggle, company }){
    return (
        <div className={toggle.includes(id) ? "outline_box" : "outline_box close"}>
            <div className="title">
                <h4>템플릿 복제</h4>
                <span className="desc">영업 또는 파트너사의 판매사 등록 내역</span>
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
                        <th>판매사</th>
                        <td>SK</td>
                        <th>복제 상품</th>
                        <td><Link to="/"><span className="link">EDI 워크스페이스 구축_1</span></Link></td>
                    </tr>
                    <tr className="col2">
                        <th>관리자</th>
                        <td>홍길동</td>
                        <th>대표 연락처</th>
                        <td>010-1234-5678</td>
                    </tr>
                    <tr className="col2">
                        <th>휴대폰 번호</th>
                        <td>010-1234-5678</td>
                        <th>이메일</th>
                        <td>email@email.com</td>
                    </tr>
                    </tbody>
                </table>
                <table className="form_tb">
                    <tbody>
                    <tr className="col2">
                        <th>판매사</th>
                        <td>SK</td>
                        <th>복제 상품</th>
                        <td><Link to="/"><span className="link">EDI 워크스페이스 구축_1</span></Link></td>
                    </tr>
                    <tr className="col2">
                        <th>관리자</th>
                        <td>홍길동</td>
                        <th>대표 연락처</th>
                        <td>010-1234-5678</td>
                    </tr>
                    <tr className="col2">
                        <th>휴대폰 번호</th>
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

export default TemplateInfo;