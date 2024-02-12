import React from 'react';

function ProductDetail(){
    return (
        <div className="outline_box prd_detail">
            <div
                className="detail_wrap"
                style={{display: "flex", flex: "1", background: "#F2F2F2", alignItems: "center", justifyContent: "center"}}
            >- 텍스트+이미지 구성의 jpg 파일이나 html 형식의 통으로 된 이미지 파일 등록 예정<br />
                - 최대 지원 용량 16MB<br />
                - 텍스트만 아주 짧게/아주 길게 등록되는 경우는 없음</div>
        </div>
    )
}

export default ProductDetail;