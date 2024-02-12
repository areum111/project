import React, { useEffect } from "react";
import { MypageWrap } from "styles/mypage.styled";
import MypageMenu from "layouts/mypageMenu";
import { customerTheme } from "theme";
import { Link } from "react-router-dom";
import Button from "components/Button/Button";
import UseProduct from "../../components/UserDetailInfo/OrderProduct";

const OrderList2 = ({ setTheme }) => {
    useEffect(() => {
        setTheme(customerTheme);
    });

    return (
        <MypageWrap>
            <div className="inner">
                <MypageMenu menu={"주문내역"} />
                <div className="content">
                    <div className="title_area">
                        <h2>주문번호 : 230607-000001</h2>
                        <span className="user_name">SK (김이름)</span>
                        <span className="path">홈 > 마이페이지 > 주문내역</span>
                    </div>
                    <div className="cont_box">
                        <div className="cont_title">
                            <h3>주문 상품 정보</h3>
                            <Link to="/mypage/use_product2" className="move_link">이용상품조회 >></Link>
                        </div>
                        <UseProduct />
                    </div>
                    {/*주문자 정보*/}
                    <div className="cont_box">
                        <div className="cont_title">
                            <h3>주문자 정보</h3>
                        </div>
                        <div className="outline_box">
                            <table className="form_tb">
                                <tbody>
                                <tr className="col2">
                                    <th>주문번호</th>
                                    <td>230607-000001</td>
                                    <th>주문 일시</th>
                                    <td>2023-06-07 23:55:03</td>
                                </tr>
                                <tr className="col2">
                                    <th>주문자 (아이디)</th>
                                    <td><span><Link to="/" className="move_link">김이름 (namekim)</Link></span></td>
                                    <th>구매사</th>
                                    <td><span><Link to="/" className="move_link">SK</Link></span></td>
                                </tr>
                                <tr className="col2">
                                    <th>이메일</th>
                                    <td>email@email.com</td>
                                    <th>전화번호</th>
                                    <td>010-1234-5678</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="center_button_wrap">
                        <Button type="button" className="large outline" onClick={() => window.location.href='/mypage/order_list2'}>목록</Button>
                    </div>
                </div>
            </div>
        </MypageWrap>
    )
};

export default OrderList2;