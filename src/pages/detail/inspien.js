import React, { useEffect } from 'react';
import { Detail } from 'styles/detail.styled';
import { Link } from 'react-router-dom';
import ProgressLine from "components/ProgressLine/ProgressLine";
import AOS from "aos";
import "aos/dist/aos.css";
import thumbImg from 'images/works/inspien.jpg';
import pcImg01 from 'images/works/inspien/inspien_01.jpg';
import pcImg02 from 'images/works/inspien/inspien_02.jpg';
import pcImg03 from 'images/works/inspien/inspien_03.jpg';
import pcImg04 from 'images/works/inspien/inspien_04.jpg';
import pcImg05 from 'images/works/inspien/inspien_05.jpg';
import pcImg06 from 'images/works/inspien/inspien_06.jpg';
import pcImg07 from 'images/works/inspien/inspien_07.jpg';
import pcImg08 from 'images/works/inspien/inspien_08.jpg';
import pcImg09 from 'images/works/inspien/inspien_09.jpg';
import pcImg10 from 'images/works/inspien/inspien_10.jpg';
import pcImg11 from 'images/works/inspien/inspien_11.jpg';
import pcImg12 from 'images/works/inspien/inspien_12.jpg';
import pcImg13 from 'images/works/inspien/inspien_13.jpg';
import pcImg14 from 'images/works/inspien/inspien_14.jpg';
import pcImg15 from 'images/works/inspien/inspien_15.jpg';
import pcImg16 from 'images/works/inspien/inspien_16.jpg';


const Inspien = () => {
    useEffect(() => {
        AOS.init();
    })

    return (
        <Detail>
            <div className="top_info">
                <div className="inner">
                    <div className="thumb_img" data-aos="fade-right">
                        <img src={thumbImg} alt="인스피언 백오피스" />
                    </div>
                    <div className="info">
                        <p className="sub_title">
                            SI solution
                        </p>
                        <h2>INSPIEN BACKOFFICE</h2>
                        <div className="chart">
                            <ProgressLine
                                label="퍼블리싱"
                                visualParts={[{percentage: "100%"}]}
                            />
                        </div>
                        
                        <p className="description">
                            백오피스라는 서비스의 퍼블리싱을 React로 진행하였으며,
                            구조가 비슷한 템플릿 형식의 화면이 많아 컴포넌트 형태로 작업했습니다.
                        </p>
                        <div className="tag">
                            <span>React</span>
                            <span>신규 구축</span>
                            <span>PC</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom_info" style={{ background: "#A7B1F1"}}>
                <div className="inner">
                    <h3 data-aos="fade-right">PC UI</h3>
                    <div className="img_wrap">
                        <ul>
                            <li data-aos="fade-up" data-aos-delay="100" data-aos-duration="500"><img src={pcImg05} alt="템플릿1" /></li>
                            <li data-aos="fade-up" data-aos-delay="100" data-aos-duration="500" data-aos-offset="200"><img src={pcImg01} alt="템플릿2" /></li>
                            <li data-aos="fade-up" data-aos-delay="100" data-aos-duration="500" data-aos-offset="200"><img src={pcImg10} alt="템플릿3" /></li>
                            <li data-aos="fade-up" data-aos-delay="100" data-aos-duration="500" data-aos-offset="200"><img src={pcImg14} alt="템플릿4" /></li>
                        </ul>
                        <ul>
                            <li data-aos="fade-up" data-aos-delay="200" data-aos-duration="500"><img src={pcImg02} alt="템플릿5" /></li>
                            <li data-aos="fade-up" data-aos-delay="200" data-aos-duration="500" data-aos-offset="200"><img src={pcImg06} alt="템플릿6" /></li>
                            <li data-aos="fade-up" data-aos-delay="200" data-aos-duration="500" data-aos-offset="200"><img src={pcImg11} alt="템플릿7" /></li>
                            <li data-aos="fade-up" data-aos-delay="200" data-aos-duration="500" data-aos-offset="200"><img src={pcImg15} alt="템플릿8" /></li>
                        </ul>
                        <ul>
                            <li data-aos="fade-up" data-aos-delay="300" data-aos-duration="500"><img src={pcImg03} alt="템플릿9" /></li>
                            <li data-aos="fade-up" data-aos-delay="300" data-aos-duration="500" data-aos-offset="200"><img src={pcImg07} alt="템플릿10" /></li>
                            <li data-aos="fade-up" data-aos-delay="300" data-aos-duration="500" data-aos-offset="200"><img src={pcImg09} alt="템플릿11" /></li>                     
                            <li data-aos="fade-up" data-aos-delay="300" data-aos-duration="500" data-aos-offset="200"><img src={pcImg12} alt="템플릿12" /></li>                     
                        </ul>
                        <ul>
                            <li data-aos="fade-up" data-aos-delay="400" data-aos-duration="500"><img src={pcImg04} alt="템플릿13" /></li>
                            <li data-aos="fade-up" data-aos-delay="400" data-aos-duration="500" data-aos-offset="200"><img src={pcImg08} alt="템플릿14" /></li>
                            <li data-aos="fade-up" data-aos-delay="400" data-aos-duration="500" data-aos-offset="200"><img src={pcImg13} alt="템플릿15" /></li>
                            <li data-aos="fade-up" data-aos-delay="400" data-aos-duration="500" data-aos-offset="200"><img src={pcImg16} alt="템플릿16" /></li>
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

export default Inspien;