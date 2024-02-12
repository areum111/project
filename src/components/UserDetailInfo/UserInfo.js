import React from 'react';

const UserInfo = () => {
    return (
        <>
            <div className="cont_box">
                <div className="cont_title"><h3>기본 정보</h3></div>
                <div className="outline_box">
                    <table className="form_tb">
                        <tbody>
                        <tr className="col2">
                            <th>아이디</th>
                            <td>inspien10</td>
                            <th>성명</th>
                            <td>김인스</td>
                        </tr>
                        <tr className="col2">
                            <th>이메일</th>
                            <td>abc@email.com</td>
                            <th>전화번호</th>
                            <td>010-1234-5678</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="cont_box">
                <div className="cont_title"><h3>2차 인증</h3></div>
                <div className="outline_box">
                    <table className="form_tb">
                        <tbody>
                        <tr>
                            <th>인증 방식</th>
                            <td>사용 안 함</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="cont_box">
                <div className="cont_title"><h3>계정 정보</h3></div>
                <div className="outline_box">
                    <table className="form_tb">
                        <tbody>
                        <tr className="col2">
                            <th>계정 상태</th>
                            <td>정상</td>
                            <th>마지막 로그인 일시</th>
                            <td>2023-06-05 15:31:45</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
};

export default UserInfo;