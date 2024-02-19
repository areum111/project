import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Detail } from 'styles/detail.styled';
import ProgressLine from "components/ProgressLine/ProgressLine";
import AOS from "aos";
import "aos/dist/aos.css";
import moyeImg from 'images/works/moye.jpg';
import moImg01 from 'images/works/moye/moye_01.jpg';
import moImg02 from 'images/works/moye/moye_02.jpg';
import moImg03 from 'images/works/moye/moye_03.jpg';
import moImg04 from 'images/works/moye/moye_04.jpg';
import moImg05 from 'images/works/moye/moye_05.jpg';
import moImg06 from 'images/works/moye/moye_06.jpg';
import moImg07 from 'images/works/moye/moye_07.jpg';
import moImg08 from 'images/works/moye/moye_08.jpg';
import moImg09 from 'images/works/moye/moye_09.jpg';
import moImg10 from 'images/works/moye/moye_10.jpg';
import moImg11 from 'images/works/moye/moye_11.jpg';
import moImg12 from 'images/works/moye/moye_12.png';
import moImg13 from 'images/works/moye/moye_13.jpg';
import moImg14 from 'images/works/moye/moye_14.jpg';
import moImg15 from 'images/works/moye/moye_15.jpg';
import moImg16 from 'images/works/moye/moye_16.jpg';
import moImg17 from 'images/works/moye/moye_17.jpg';
import moImg18 from 'images/works/moye/moye_18.jpg';
import moImg19 from 'images/works/moye/moye_19.jpg';
import moImg20 from 'images/works/moye/moye_20.jpg';
import moImg21 from 'images/works/moye/moye_21.jpg';


const Moye = ({ setMove }) => {
    useEffect(() => {
        AOS.init();
    });

    return (
        <Detail>
            <div className="top_info">
                <div className="inner">
                    <div className="thumb_img" data-aos="fade-right">
                        <img src={moyeImg} alt="모두의 예체능" />
                    </div>
                    <div className="info">
                        <p className="sub_title">
                            MOBILE APP
                        </p>
                        <h2>모두의 예체능</h2>
                        <div className="chart">
                            <ProgressLine
                                label="퍼블리싱"
                                visualParts={[{percentage: "90%"}]}
                            />
                        </div>
                        
                        <p className="description">
                            React Native로 진행된 모바일 앱으로 보이는 화면단을 구현하는 작업을 진행했습니다.
                        </p>
                        <div className="tag">
                            <span>React Native</span>
                            <span>신규 구축</span>
                            <span>Mobile</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom_info dark" style={{ background: "#29D6BB"}}>
                <div className="inner">
                    <h3 data-aos="fade-right">MO UI</h3>
                    <div className="img_wrap">
                        <ul>
                            <li data-aos="fade-up" data-aos-delay="100" data-aos-duration="500"><img src={moImg01} alt="로그인" /></li>
                            <li data-aos="fade-up" data-aos-delay="100" data-aos-duration="500" data-aos-offset="100"><img src={moImg05} alt="주소 설정" /></li>
                            <li data-aos="fade-up" data-aos-delay="100" data-aos-duration="500" data-aos-offset="100"><img src={moImg15} alt="상세문의탭" /></li>
                            <li data-aos="fade-up" data-aos-delay="100" data-aos-duration="500" data-aos-offset="100"><img src={moImg14} alt="포토상품평" /></li>
                            <li data-aos="fade-up" data-aos-delay="100" data-aos-duration="500" data-aos-offset="100"><img src={moImg16} alt="취소상세" /></li>
                        </ul>
                        <ul>
                            <li data-aos="fade-up" data-aos-delay="200" data-aos-duration="500"><img src={moImg02} alt="로그인" /></li>
                            <li data-aos="fade-up" data-aos-delay="200" data-aos-duration="500" data-aos-offset="300"><img src={moImg11} alt="코치상세" /></li>
                            <li data-aos="fade-up" data-aos-delay="200" data-aos-duration="500" data-aos-offset="300"><img src={moImg07} alt="장바구니" /></li>
                            <li data-aos="fade-up" data-aos-delay="200" data-aos-duration="500" data-aos-offset="300"><img src={moImg09} alt="레슨관리" /></li>
                            <li data-aos="fade-up" data-aos-delay="200" data-aos-duration="500" data-aos-offset="300"><img src={moImg10} alt="레슨희망일선택" /></li>
                        </ul>
                        <ul>
                            <li data-aos="fade-up" data-aos-delay="300" data-aos-duration="500"><img src={moImg03} alt="회원가입" /></li>
                            <li data-aos="fade-up" data-aos-delay="300" data-aos-duration="500" data-aos-offset="300"><img src={moImg12} alt="레슨상세" /></li>
                            <li data-aos="fade-up" data-aos-delay="300" data-aos-duration="500" data-aos-offset="300"><img src={moImg08} alt="결제" /></li>
                        </ul>
                        <ul>
                            <li data-aos="fade-up" data-aos-delay="400" data-aos-duration="500"><img src={moImg04} alt="메인" /></li>
                            <li data-aos="fade-up" data-aos-delay="400" data-aos-duration="500" data-aos-offset="300"><img src={moImg13} alt="고객센터" /></li>
                            <li data-aos="fade-up" data-aos-delay="400" data-aos-duration="500" data-aos-offset="300"><img src={moImg17} alt="주문결제" /></li>
                            <li data-aos="fade-up" data-aos-delay="400" data-aos-duration="500" data-aos-offset="300"><img src={moImg06} alt="주소설정" /></li>                            
                        </ul>
                    </div>
                </div>
                <div className="button_wrap">
                    <Link to="/works">목록으로</Link>
                </div>
            </div>
        </Detail>
    )
};

export default Moye;