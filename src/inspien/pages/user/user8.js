import React from "react";
import { MemberWrap } from "styles/main.styled"
import Button from "components/Button/Button";

const User8 = () => {
    return (
        <MemberWrap>
            <div className="inner">
                <div className="title_area">
                    <h2>고객사명</h2>
                    <span className="user_name">일반</span>
                    <div className="path">홈 > 사용자 > 그룹 관리</div>
                </div>
                <div className="content">
                    <div className="cont_box">
                        <div className="cont_title">
                            <h3>사업자 정보</h3>
                        </div>
                        <div className="outline_box member_box">
                            <table className="form_tb">
                                <caption>사업자 정보</caption>
                                <tbody>
                                <tr>
                                    <th>사업자등록번호</th>
                                    <td>124-81-00998</td>
                                </tr>
                                <tr>
                                    <th>회사명</th>
                                    <td>
                                        <div className="td_wrap">고객사명&nbsp;<span className="gray_txt">(개인사업자)</span></div>
                                    </td>
                                </tr>
                                <tr>
                                    <th>대표자</th>
                                    <td>김대표</td>
                                </tr>
                                <tr>
                                    <th>주소</th>
                                    <td>
                                        <table className="inner_tb">
                                            <tbody>
                                            <tr>
                                                <th>우편번호</th>
                                                <td>08511</td>
                                            </tr>
                                            <tr>
                                                <th>주소</th>
                                                <td>서울특별시 금천구 벚꽃로 278</td>
                                            </tr>
                                            <tr>
                                                <th>상세 주소</th>
                                                <td>SJ테크노빌</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="cont_box">
                        <div className="cont_title">
                            <h3>정산 정보</h3>
                            <p className="dot_msg">업데이트 일시를 기준으로 익월부터 적용됩니다.</p>
                            <button type="button" className="right_btn">인보이스 관리 >></button>
                        </div>
                        <div className="outline_box member_box">
                            <table className="form_tb">
                                <caption>정산 정보</caption>
                                <tbody>
                                <tr>
                                    <th>업데이트 일시</th>
                                    <td>2023-07-05 15:30</td>
                                </tr>
                                <tr>
                                    <th>정산방식</th>
                                    <td>계좌이체</td>
                                </tr>
                                <tr>
                                    <th>정산 희망일</th>
                                    <td>25일</td>
                                </tr>
                                <tr>
                                    <th>정산 정보</th>
                                    <td>
                                        <table className="inner_tb">
                                            <tbody>
                                            <tr>
                                                <th>카드번호</th>
                                                <td>123456789</td>
                                            </tr>
                                            <tr>
                                                <th>유효기간</th>
                                                <td>12월 / 23년</td>
                                            </tr>
                                            <tr>
                                                <th>CVC</th>
                                                <td>●●●</td>
                                            </tr>
                                            <tr>
                                                <th>카드비밀번호</th>
                                                <td>●● **</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="cont_box">
                        <div className="cont_title">
                            <h3>사용자 정보</h3>
                            <p className="dot_msg">사용자 정보는 선택 입력 사항입니다.</p>
                        </div>
                        <div className="outline_box member_box">
                            <table className="form_tb">
                                <caption>사용자 정보</caption>
                                <tbody>
                                <tr>
                                    <th>대행담당자 <span>(선택)</span></th>
                                    <td>
                                        <table className="inner_tb">
                                            <tbody>
                                            <tr>
                                                <th>담당자</th>
                                                <td>-</td>
                                            </tr>
                                            <tr>
                                                <th>이메일</th>
                                                <td>-</td>
                                            </tr>
                                            <tr>
                                                <th>전화번호</th>
                                                <td>-</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <th>정산담당자 <span>(선택)</span></th>
                                    <td>
                                        <table className="inner_tb">
                                            <tbody>
                                            <tr>
                                                <th>담당자</th>
                                                <td>-</td>
                                            </tr>
                                            <tr>
                                                <th>이메일</th>
                                                <td>-</td>
                                            </tr>
                                            <tr>
                                                <th>전화번호</th>
                                                <td>-</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="button_wrap">
                    <Button type="button" className="outline large" onClick={() => window.location.href="/user/user5"}>목록</Button>
                </div>
            </div>
        </MemberWrap>
    )
};

export default User8;