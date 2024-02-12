import React from "react";

const CompanyInfo = ({ invoice }) => {
    return (
        <>
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
                            <td><b>삼성전자 <span className="desc">(개인 사업자)</span></b></td>
                        </tr>
                        <tr>
                            <th>대표자</th>
                            <td><b>김대표</b></td>
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
                    {invoice ? <button type="button" className="right_btn">인보이스 관리 >></button> : null}
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
                                        <th>은행</th>
                                        <td>국민은행</td>
                                    </tr>
                                    <tr>
                                        <th>예금주명</th>
                                        <td>김대표</td>
                                    </tr>
                                    <tr>
                                        <th>예금주명</th>
                                        <td>12345678910112</td>
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
                                        <td>이대리</td>
                                    </tr>
                                    <tr>
                                        <th>이메일</th>
                                        <td>abcdef@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <th>전화번호</th>
                                        <td>010123456789</td>
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
                                        <td>박정산</td>
                                    </tr>
                                    <tr>
                                        <th>이메일</th>
                                        <td>abcdsfdfsekjslfdsf@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <th>전화번호</th>
                                        <td>01012345678</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
};

export default CompanyInfo;