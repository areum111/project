import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Detail } from 'styles/detail.styled';
import ProgressLine from "components/ProgressLine/ProgressLine";
import AOS from "aos";
import "aos/dist/aos.css";
import thumbImg from 'images/works/ododoc.jpg';
import pcImg01 from 'images/works/ododoc/ododoc_01.jpg';
import pcImg02 from 'images/works/ododoc/ododoc_02.jpg';
import pcImg03 from 'images/works/ododoc/ododoc_03.jpg';
import pcImg04 from 'images/works/ododoc/ododoc_04.jpg';

const Ododoc = () => {
    useEffect(() => {
        AOS.init();
    });

    return (
        <Detail>
            <div className="top_info">
                <div className="inner">
                    <div className="thumb_img" data-aos="fade-right">
                        <img src={thumbImg} alt="오도독" />
                    </div>
                    <div className="info">
                        <p className="sub_title">
                            eDM
                        </p>
                        <h2>OdoDOC</h2>
                        <div className="chart">
                            <ProgressLine
                                label="퍼블리싱"
                                visualParts={[{percentage: "100%"}]}
                            />
                        </div>
                        <p className="description">
                            매월 정기적으로 발송하는 eDM 웹메일 코딩 작업을 진행했습니다.<br />
                        </p>
                        <div className="tag">
                            <span>PC</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom_info" style={{ background: "#C8C8C8" }}>
                <div className="inner">
                    <h3 data-aos="fade-right">PC UI</h3>
                    <div className="img_wrap">
                        <ul>
                            <li data-aos="fade-up" data-aos-delay="100" data-aos-duration="500"><img src={pcImg01} alt="오도독" /></li>
                        </ul>
                        <ul>
                            <li data-aos="fade-up" data-aos-delay="200" data-aos-duration="500"><img src={pcImg02} alt="오도독" /></li>
                        </ul>
                            <ul>
                            <li data-aos="fade-up" data-aos-delay="300" data-aos-duration="500"><img src={pcImg03} alt="오도독" /></li>
                        </ul>
                            <ul>
                            <li data-aos="fade-up" data-aos-delay="400" data-aos-duration="500"><img src={pcImg04} alt="오도독" /></li>
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

export default Ododoc;