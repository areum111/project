import React, {useEffect, useState} from 'react';
import Button from "components/Button/Button";
import ConfirmDialog from "components/Modal/ConfirmDialog";
import {partnerTheme} from "theme";

function PrdDetail1({ company, unavailable, partner, setTheme }){
    useEffect(() => {
        if(partner){
            setTheme(partnerTheme);
        }
    }, []);

    //팝업
    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);

    const BottomWrap = () => {
        //인스피언_영업, 파트너
        if(partner) {
            //판매 중지 버튼만 있는 경우
            if(company){
                return (
                    <Button type="button" className="large full point" onClick={() => setVisible1(true)}>판매 중지</Button>
                )
            }else{ //등록된 판매사 없는 경우(판매사로 등록 버튼 표시)
                return (
                    <>
                        <Button type="button" className="large full" onClick={() => setVisible3(true)}>판매사로 등록</Button>
                        <div className="guide_box">
                            <p className="red_txt">판매사가 지정되지 않은 템플릿 상품입니다.</p>
                            <p>‘판매사로 등록’ 시 동일한 상품을 복제하여 판매할 수 있습니다.</p>
                        </div>
                    </>
                )
            }
        }else{ //인스피언_관리자,운영
            //판매 중지 버튼만 있는 경우
            if(company){
                return (
                    <>
                        <Button type="button" className="large full point" onClick={() => setVisible1(true)}>판매 중지</Button>
                    </>
                )
            }else{ //등록된 판매사 없는 경우
                return (
                    <>
                        <Button type="button" className="large full point" onClick={() => setVisible1(true)}>판매 중지</Button>
                        <div className="guide_box">
                            <p className="red_txt">판매사가 지정되지 않은 템플릿 상품입니다.</p>
                            <p>영업 직원 또는 파트너사가 상품 조회 후 직접 ‘판매사로 등록’하여<br />동일한 상품을 복제 및 판매할 수 있습니다.</p>
                            <div className="bottom_guide">
                                <p>※ 템플릿 상품을 ‘판매 중지’ 할 경우</p>
                                <p className="dot_msg">영업 또는 파트너사의 새로운 템플릿 복제 및 판매 불가능</p>
                                <p className="dot_msg">기존 템플릿 복제 상품의 판매 상태는 변동 없음 (개별 상품 처리)</p>
                            </div>
                        </div>
                    </>
                )
            }
        }
    }

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

                {unavailable
                    //판매 중지 상태가 아닌 경우
                    ? <div className="guide_box">
                        <p className="red_txt">해당 상품은 판매가 중지되었습니다. (판매 중지 일자 : 2023-06-13)</p>
                        <p>판매사 등록 및 판매가 불가한 상품입니다.<br />(단, 판매 중지 이전에 주문한 고객은 상품을 이용할 수 있습니다.)</p>
                    </div>
                    //판매 중지 상태인 경우
                    : <BottomWrap />}
            </div>
            <ConfirmDialog
                text={"판매 재개는 불가합니다. \n 상품의 판매를 중지하시겠습니까?"}
                visible={visible1}
                onConfirm={() => {setVisible1(false);setVisible2(true);}}
                onCancel={() => setVisible1(false)}
            />
            <ConfirmDialog
                text={"[EDI 워크스페이스 구축] 상품이 \n 판매중지 처리되었습니다."}
                visible={visible2}
                onConfirm={() => setVisible2(false)}
            />
            <ConfirmDialog
                text={"[EDI 워크스페이스 구축] 상품의 \n 판매사로 등록되었습니다."}
                visible={visible3}
                onConfirm={() => setVisible3(false)}
            />
        </>
    )
}

export default PrdDetail1;