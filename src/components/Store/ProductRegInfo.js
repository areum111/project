import React from 'react';
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { Link } from "react-router-dom";

function ProductRegInfo({ id, toggle, setToggle }){
    return (
        <div className={toggle.includes(1) ? "outline_box" : "outline_box close"}>
            <div className="title">
                <h4>등록 정보</h4>
                <span className="desc">2023-05-15&nbsp;&nbsp;|&nbsp;&nbsp;인스피언(김인스)</span>
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
                        <th>종류</th>
                        <td>어댑터</td>
                        <th>연계속성</th>
                        <td>KTNET SFTP Adapter</td>
                    </tr>
                    <tr className="col2">
                        <th>부모패밀리</th>
                        <td><Link to="/"><span className="link">워크스페이스 (ID:000)</span></Link></td>
                        <th>패밀리</th>
                        <td>wedi_2</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProductRegInfo;