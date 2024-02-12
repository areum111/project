import React from "react";

const UseProductGuide = () => {
    return (
        <div className="cont_box">
            <div className="cont_title">
                <h3>이용 상태 안내</h3>
                <p className="dot_msg">이용 상태는 관리자가 변경할 수 있습니다.</p>
            </div>
            <div className="outline_box">
                <table className="form_tb guide">
                    <tbody>
                        <tr>
                            <th>이용예정</th>
                            <td><p className="guide_title"><b>아직 상품의 이용 개시일이 도래하지 않은 상태</b></p></td>
                        </tr>
                        <tr>
                            <th>이용중</th>
                            <td>
                                <p className="guide_title"><b>상품을 개시하여 이용중인 상태 또는 이용중지 상품의 이용을 재개한 상태</b></p>
                                <p>· 상품의 이용을 [재개]하는 경우, 익월 1일까지 [중지] 처리가 제한됩니다. (사용 금액 및 사용량은 재개한 날로부터 당월 말까지 일별 계산)</p>
                            </td>
                        </tr>
                        <tr>
                            <th>이용중지</th>
                            <td>
                                <p className="guide_title"><b>이용중이던 구독형 상품의 이용을 중단한 상태</b></p>
                                <p>· 상품의 이용을 [중지]하는 경우, 익월 1일까지 [재개] 처리가 제한됩니다. (사용 금액 및 사용량은 당월 1일부터 중지한 날까지 일별 계산)</p>
                                <p>· 중복 구매 불가 상품의 이용이 중지된 경우, 동일한 상품의 주문이 제한됩니다.</p>
                                <p>· 3개월 이상 ‘이용중지’ 상태 지속 시 플랫폼 서비스에서 상품이 삭제될 수 있습니다.</p>
                                <p>· 패밀리 상품은 [중지] 처리 이전에 하위 패밀리 상품의 이용을 확인해주세요.</p>
                            </td>
                        </tr>
                        <tr>
                            <th>이용해지</th>
                            <td>
                                <p className="guide_title"><b>상품의 이용을 완전히 해지한 상태</b> (‘이용예정’ 또는 ‘이용중지’ 상태에서만 처리 가능)</p>
                                <p>· 상품의 이용을 [해지]하는 경우, [재개] 처리가 불가능하며 보존된 상품 데이터가 삭제될 수 있습니다.</p>
                                <p>· 패밀리 상품은 [해지] 처리 이전에 하위 패밀리 상품의 이용을 확인해주세요.</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default UseProductGuide;