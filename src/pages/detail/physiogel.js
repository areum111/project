import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Detail } from 'styles/detail.styled';
import ProgressLine from "components/ProgressLine/ProgressLine";
import AOS from "aos";
import "aos/dist/aos.css";
import thumbImg from 'images/works/physiogel.jpg';
import pcImg01 from 'images/works/physiogel/physiogel_01.jpg';
import pcImg02 from 'images/works/physiogel/physiogel_02.jpg';
import moImg01 from 'images/works/physiogel/mo_physiogel_01.jpg';

const Physiogel = () => {
    useEffect(() => {
        AOS.init();
    });

    return (
        <Detail>
            <div className="top_info">
                <div className="inner">
                    <div className="thumb_img" data-aos="fade-right">
                        <img src={thumbImg} alt="믹순" />
                    </div>
                    <div className="info">
                        <p className="sub_title">
                            Cafe24
                        </p>
                        <h2>PHYSIOGEL</h2>
                        <div className="chart">
                            <ProgressLine
                                label="퍼블리싱"
                                visualParts={[{percentage: "100%"}]}
                            />
                        </div>
                        <p className="description">
                            카카오맵 기반 병의원찾기 서비스의 퍼블리싱과 스크립트 작업과 이벤트 페이지 템플릿 작업을 진행했습니다.
                        </p>
                        <div className="tag">
                            <span>PC + MOBILE</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom_info dark" style={{ background: "rgb(0, 113, 205)" }}>
                <div className="inner">
                    <h3 data-aos="fade-right">PC/MO UI</h3>
                    <div className="img_wrap">
                        <ul>
                            <li data-aos="fade-up" data-aos-delay="100" data-aos-duration="500"><img src={pcImg01} alt="메인페이지" /></li>
                            <li data-aos="fade-up" data-aos-delay="100" data-aos-duration="500"><img src={moImg01} alt="인스타그램상세" /></li>
                        </ul>
                        <ul>
                            <li data-aos="fade-up" data-aos-delay="200" data-aos-duration="500"><img src={pcImg02} alt="메인페이지" /></li>
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

export default Physiogel;