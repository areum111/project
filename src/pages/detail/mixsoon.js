import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Detail } from 'styles/detail.styled';
import ProgressLine from "components/ProgressLine/ProgressLine";
import AOS from "aos";
import "aos/dist/aos.css";
import thumbImg from 'images/works/mixsoon.jpg';
import pcImg01 from 'images/works/mixsoon/mixsoon_01.jpg';
import pcImg02 from 'images/works/mixsoon/mixsoon_02.jpg';
import moImg01 from 'images/works/mixsoon/mo_mixsoon_01.jpg';
import moImg02 from 'images/works/mixsoon/mo_mixsoon_02.jpg';
import moImg03 from 'images/works/mixsoon/mo_mixsoon_03.jpg';

const Mixsoon = () => {
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
                        <h2>MIXSOON</h2>
                        <div className="chart">
                            <ProgressLine
                                label="퍼블리싱"
                                visualParts={[{percentage: "100%"}]}
                            />
                        </div>
                        <p className="description">
                            메인페이지 및 헤더, 사이드바, 서브 페이지 리뉴얼 퍼블리싱을 작업했습니다.
                        </p>
                        <div className="tag">
                            <span>부분 리뉴얼</span>
                            <span>PC + MOBILE</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom_info dark" style={{ background: "#517D62" }}>
                <div className="inner">
                    <h3 data-aos="fade-right">PC/MO UI</h3>
                    <div className="img_wrap">
                        <ul>
                            <li data-aos="fade-up" data-aos-delay="100" data-aos-duration="500"><img src={pcImg01} alt="메인페이지" /></li>
                            <li data-aos="fade-up" data-aos-delay="100" data-aos-duration="500"><img src={pcImg02} alt="인스타그램상세" /></li>
                        </ul>
                        <ul>
                            <li data-aos="fade-up" data-aos-delay="100" data-aos-duration="500"><img src={moImg01} alt="메인페이지" /></li>
                        </ul>
                        <ul>
                            <li data-aos="fade-up" data-aos-delay="200" data-aos-duration="500"><img src={moImg02} alt="인스타그램상세" /></li>
                        </ul>
                        <ul>
                            <li data-aos="fade-up" data-aos-delay="300" data-aos-duration="500"><img src={moImg03} alt="인스타그램팝업" /></li>
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

export default Mixsoon;