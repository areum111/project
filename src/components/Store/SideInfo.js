import React from 'react';
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

function SideInfo({ id, toggle, setToggle }) {
    return (
        <div className={ toggle.includes(id) ? "outline_box" : "outline_box close" }>
            <div className="title">
                <h4>이용약관</h4>
                <span className="desc">상품 이용약관</span>
                <button
                    key={id}
                    type="button"
                    className="toggle"
                    onClick={ () => {
                        !toggle.includes(id) ? setToggle((toggle) => [ ...toggle, id ]) : setToggle(toggle.filter((button) => button !== id));
                    } }>
                    { toggle.includes(id) ? <BsChevronUp size={ 20 }/> : <BsChevronDown size={ 20 }/> }
                </button>
            </div>
            <div className="toggle_wrap">· 간략한 이용약관이 여기에 들어가게 되지 않을까 싶어요.</div>
        </div>
    )
};

export default SideInfo;