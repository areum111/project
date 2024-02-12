import React, {useEffect} from 'react';
import {customerTheme} from "../../theme";

function PrdDetail6({ setTheme }){
    useEffect(() => {
        setTheme(customerTheme);
    }, []);

    return (
        <>
            <div className="price_detail">
                <div className="outline_box">
                    <p className="title">즉시구매</p>
                    <div className="price_info">
                        <div>
                            <p className="info_title">단위</p>
                            <div className="info_text">100<span className="unit">GB</span></div>
                        </div>
                        <div>
                            <p className="info_title">판매가</p>
                            <div className="info_text">90,000<span className="unit">원</span></div>
                        </div>
                        <div className="total">
                            <p className="info_title">총 상품 금액</p>
                            <div className="info_text">90,000<span className="unit">원</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PrdDetail6;