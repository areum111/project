import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Detail } from 'styles/detail.styled';
import ProgressLine from "components/ProgressLine/ProgressLine";
import AOS from "aos";
import "aos/dist/aos.css";
import thumbImg from 'images/works/infigo.jpg';
import pcImg01 from 'images/works/infigo/infigo_01.jpg';
import pcImg02 from 'images/works/infigo/infigo_02.jpg';
import pcImg03 from 'images/works/infigo/infigo_03.jpg';
import pcImg04 from 'images/works/infigo/infigo_04.jpg';

const Infigo = () => {
    useEffect(() => {
        AOS.init();
    });

    return (
        <Detail>
            <div className="top_info">
                <div className="inner">
                    <div className="thumb_img" data-aos="fade-right">
                        <img src={thumbImg} alt="인피고" />
                    </div>
                    <div className="info">
                        <p className="sub_title">
                            SI solution
                        </p>
                        <h2>infigo</h2>
                        <div className="chart">
                            <ProgressLine
                                label="퍼블리싱"
                                visualParts={[{percentage: "80%"}]}
                            />
                        </div>
                        <p className="description">
                            PHP언어로 구현되어 있는 행사 부스/물품 물류 관리 플랫폼으로 일부 페이지 UI 수정 및 추가 등 유지보수를 진행했습니다.
                        </p>
                        <div className="tag">
                            <span>PHP</span>
                            <span>유지보수</span>
                            <span>PC</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom_info dark" style={{ background: "#7ABF26" }}>
                <div className="inner">
                    <h3 data-aos="fade-right">PC UI</h3>
                    <div className="img_wrap">
                        <ul>
                            <li data-aos="fade-up" data-aos-delay="100" data-aos-duration="500"><img src={pcImg01} alt="인피고" /></li>
                        </ul>
                        <ul>
                            <li data-aos="fade-up" data-aos-delay="200" data-aos-duration="500"><img src={pcImg01} alt="인피고" /></li>
                        </ul>
                        <ul>
                            <li data-aos="fade-up" data-aos-delay="300" data-aos-duration="500"><img src={pcImg01} alt="인피고" /></li>
                        </ul>
                        <ul>
                            <li data-aos="fade-up" data-aos-delay="400" data-aos-duration="500"><img src={pcImg01} alt="인피고" /></li>
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

export default Infigo;