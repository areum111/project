import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Detail } from 'styles/detail.styled';
import ProgressLine from "components/ProgressLine/ProgressLine";
import AOS from "aos";
import "aos/dist/aos.css";
import thumbImg from 'images/works/ohora.jpg';
import pcImg01 from 'images/works/ohora/ohora_01.jpg';
import pcImg02 from 'images/works/ohora/ohora_02.jpg';
import pcImg03 from 'images/works/ohora/ohora_03.jpg';
import pcImg04 from 'images/works/ohora/ohora_04.jpg';
import moImg01 from 'images/works/ohora/mo_ohora_01.jpg';
import moImg02 from 'images/works/ohora/mo_ohora_02.jpg';
import moImg03 from 'images/works/ohora/mo_ohora_03.jpg';
import moImg04 from 'images/works/ohora/mo_ohora_04.jpg';

const Ohora = () => {
    useEffect(() => {
        AOS.init();
    });

    return (
        <Detail>
            <div className="top_info">
                <div className="inner">
                    <div className="thumb_img" data-aos="fade-right">
                        <img src={thumbImg} alt="오호라" />
                    </div>
                    <div className="info">
                        <p className="sub_title">
                            Cafe24
                        </p>
                        <h2>ohora</h2>
                        <div className="chart">
                            <ProgressLine
                                label="퍼블리싱"
                                visualParts={[{percentage: "80%"}]}
                            />
                        </div>
                        
                        <p className="description">
                            홈페이지 주요페이지 리뉴얼 퍼블리싱 작업 및 유지보수를 담당했으며,<br />
                            기존 Cafe24에 없는 시스템인 인스타그램 크롤링 데이터를 뿌려주는 프론트엔드 개발에 참여했습니다.
                        </p>
                        <div className="tag">
                            <span>부분 리뉴얼</span>
                            <span>부분 개발</span>
                            <span>PC + MOBILE</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom_info" style={{ background: "#C8C8C8" }}>
                <div className="inner">
                    <h3 data-aos="fade-right">PC UI</h3>
                    <div className="img_wrap">
                        <ul>
                            <li data-aos="fade-up" data-aos-delay="100" data-aos-duration="500"><img src={pcImg01} alt="메인페이지" /></li>
                        </ul>
                        <ul>
                            <li data-aos="fade-up" data-aos-delay="200" data-aos-duration="500"><img src={pcImg02} alt="인스타그램상세" /></li>
                            <li data-aos="fade-up" data-aos-delay="200" data-aos-duration="500" data-aos-offset="300"><img src={pcImg03} alt="인스타그램팝업" /></li>                        
                        </ul>
                        <ul>
                            <li data-aos="fade-up" data-aos-delay="300" data-aos-duration="500"><img src={pcImg04} alt="분류페이지" /></li>
                        </ul>
                    </div>
                    <h3 data-aos="fade-right">MO UI</h3>
                    <div className="img_wrap">
                        <ul>
                            <li data-aos="fade-up" data-aos-delay="100" data-aos-duration="500" data-aos-offset="300"><img src={moImg01} alt="메인페이지" /></li>
                        </ul>
                        <ul>
                            <li data-aos="fade-up" data-aos-delay="200" data-aos-duration="500" data-aos-offset="300"><img src={moImg02} alt="인스타그램상세" /></li>
                        </ul>
                        <ul>
                            <li data-aos="fade-up" data-aos-delay="300" data-aos-duration="500" data-aos-offset="300"><img src={moImg03} alt="인스타그램팝업" /></li>
                        </ul>
                        <ul>
                            <li data-aos="fade-up" data-aos-delay="400" data-aos-duration="500" data-aos-offset="300"><img src={moImg04} alt="분류페이지" /></li>
                            
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

export default Ohora;