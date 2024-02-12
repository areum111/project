import React, {useEffect, useState} from "react";
import { CustomerWrap } from "styles/service.styled";
import CompanyInfo from "components/UserDetailInfo/CompanyInfo";
import OrderList from "components/UserDetailInfo/OrderList";
import OrderListSearch from "components/SearchBox/OrderListSearch";
import OrderProduct from "components/UserDetailInfo/OrderProduct";
import Button from "components/Button/Button";
import UseProductSearch from "components/SearchBox/UseProductSearch";
import UseProductList from "components/UserDetailInfo/UseProductList";
import UseProductGuide from "components/GuideBox/UseProductGuide";
import UsageHistory from "components/UserDetailInfo/UsageHistory";

const OrderWrap = () => {
    const [visibleDetail, setVisibleDetail] = useState(false);
    const [modify, setModify] = useState(false);

    return (
        visibleDetail ? <>
            <div className="cont_box"><OrderProduct modify={modify} /></div>
            <div className="center_button_wrap">
                {modify
                    ? <>
                        <Button type="button" className="large outline" onClick={() => setModify(false)}>취소</Button>
                        <Button type="button" className="large" onClick={() => setModify(false)}>저장</Button>
                    </>
                    : <>
                        <Button type="button" className="large outline" onClick={() => setVisibleDetail(false)}>목록</Button>
                        <Button type="button" className="large" onClick={() => setModify(true)}>수정</Button>
                    </>}
            </div>
        </> : <>
            <OrderListSearch />
            <OrderList visibleDetail={visibleDetail} setVisibleDetail={setVisibleDetail} />
        </>
    )
}
const CompanyDetail = () => {
    const [index, setIndex] = useState(0);
    const tabLists = [
        {id: 0, title: "회사 정보"},
        {id: 1, title: "주문 내역"},
        {id: 2, title: "이용 상품"},
        {id: 3, title: "사용량 조회"}
    ]
    const [noData, setNoData] = useState(true);
    const nowLink = window.location.href;
    const companyNo = Number(nowLink.split('company_no=')[1]);

    useEffect(() => {
        if(companyNo === 1){
            setNoData(false);
        }
    }, []);

    return (
        <CustomerWrap>
            <div className="inner">
                <div className="title_area">
                    <h2>회사 상세</h2>
                    <span className="user_name">삼성전자</span>
                    <div className="path">홈 > 서비스 지원 > 고객 관리 > 회사 상세</div>
                </div>
                <div className="content">
                    <div className="cont_box">
                        <div className="outline_box tab">
                            <ul className="tab_menu">
                                {tabLists.map((list) => {
                                    return (
                                        <li
                                            key={list.id}
                                            className={index === list.id ? "on" : null}
                                            onClick={() => setIndex(list.id)}
                                        ><span>{list.title}</span></li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                    {index === 0 ? <>
                        <CompanyInfo />
                        <div className="center_button_wrap">
                            <Button type="button" className="large outline" onClick={() => window.location.href='/customer/list'}>목록</Button>
                        </div>
                    </> : null}
                    {index === 1 ? <OrderWrap /> : null}
                    {index === 2 ? <>
                        <UseProductSearch />
                        {/*
                            noData : 구매 이력 있는 경우/없는 경우 스타일 확인을 위해 임시로 넣어놓은 값일 뿐
                            isAdmin : 관리자/고객 구분 위해(화면상 버튼 노출 여부 등)
                        */}
                        <UseProductList noData={noData} isAdmin={true} />
                        <UseProductGuide />
                    </> : null}
                    {index === 3 ? <UsageHistory /> : null}
                </div>
            </div>
        </CustomerWrap>
    )
};

export default CompanyDetail;