import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Detail } from 'styles/detail.styled';
import ProgressLine from "components/ProgressLine/ProgressLine";
import AOS from "aos";
import "aos/dist/aos.css";
import thumbImg from 'images/works/purcell.jpg';
import pcImg01 from 'images/works/purcell/purcell_01.jpg';
import pcImg02 from 'images/works/purcell/purcell_02.jpg';
import pcImg03 from 'images/works/purcell/purcell_03.jpg';
import pcImg04 from 'images/works/purcell/purcell_04.jpg';
import moImg01 from 'images/works/purcell/mo_purcell_01.jpg';
import moImg02 from 'images/works/purcell/mo_purcell_02.jpg';
import moImg03 from 'images/works/purcell/mo_purcell_03.jpg';
import moImg04 from 'images/works/purcell/mo_purcell_04.jpg';

const Purcell = () => {
    useEffect(() => {
        AOS.init();
    });

    return (
        <Detail>
            <div className="top_info">
                <div className="inner">
                    <div className="thumb_img" data-aos="fade-right">
                        <img src={thumbImg} alt="퍼셀" />
                    </div>
                    <div className="info">
                        <p className="sub_title">
                            Cafe24
                        </p>
                        <h2>PURCELL</h2>
                        <div className="chart">
                            <ProgressLine
                                label="퍼블리싱"
                                visualParts={[{percentage: "100%"}]}
                            />
                        </div>
                        <p className="description">
                            100% 하드코딩 페이지를 구현하였으며 일부 서브페이지 퍼블리싱 작업을 했습니다.
                        </p>
                        <div className="tag">
                            <span>PC + MOBILE</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom_info dark" style={{ background: "rgb(235, 51, 0, 0.8)" }}>
                <div className="inner">
                    <h3 data-aos="fade-right">PC UI</h3>
                    <div className="img_wrap">
                        <ul>
                            <li data-aos="fade-up" data-aos-delay="100" data-aos-duration="500"><img src={pcImg01} alt="글루타치온" /></li>
                        </ul>
                        <ul>
                            <li data-aos="fade-up" data-aos-delay="200" data-aos-duration="500"><img src={pcImg02} alt="글루타치온" /></li>
                        </ul>
                        <ul>
                            <li data-aos="fade-up" data-aos-delay="300" data-aos-duration="500"><img src={pcImg03} alt="글루타치온" /></li>
                        </ul>
                        <ul>
                            <li data-aos="fade-up" data-aos-delay="400" data-aos-duration="500"><img src={pcImg04} alt="글루타치온" /></li>
                        </ul>
                    </div>
                    <h3 data-aos="fade-right">MO UI</h3>
                    <div className="img_wrap">
                        <ul>
                            <li data-aos="fade-up" data-aos-delay="100" data-aos-duration="500"><img src={moImg01} alt="글루타치온" /></li>
                        </ul>
                        <ul>
                            <li data-aos="fade-up" data-aos-delay="200" data-aos-duration="500"><img src={moImg02} alt="글루타치온" /></li>
                        </ul>
                        <ul>
                            <li data-aos="fade-up" data-aos-delay="300" data-aos-duration="500"><img src={moImg03} alt="글루타치온" /></li>
                        </ul>
                        <ul>
                            <li data-aos="fade-up" data-aos-delay="400" data-aos-duration="500"><img src={moImg04} alt="글루타치온" /></li>
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

export default Purcell;