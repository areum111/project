import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Detail } from 'styles/detail.styled';
import ProgressLine from "components/ProgressLine/ProgressLine";
import AOS from "aos";
import "aos/dist/aos.css";
import thermosImg from 'images/works/thermos.jpg';
import pcImg01 from 'images/works/thermos/thermos_01.jpg';
import pcImg02 from 'images/works/thermos/thermos_02.jpg';
import pcImg03 from 'images/works/thermos/thermos_03.jpg';
import pcImg04 from 'images/works/thermos/thermos_04.jpg';
import pcImg05 from 'images/works/thermos/thermos_05.jpg';
import pcImg06 from 'images/works/thermos/thermos_06.jpg';
import pcImg07 from 'images/works/thermos/thermos_07.jpg';
import pcImg08 from 'images/works/thermos/thermos_08.jpg';
import pcImg09 from 'images/works/thermos/thermos_09.jpg';
import pcImg10 from 'images/works/thermos/thermos_10.jpg';
import pcImg11 from 'images/works/thermos/thermos_11.jpg';
import pcImg12 from 'images/works/thermos/thermos_12.jpg';
import pcImg13 from 'images/works/thermos/thermos_13.jpg';
import pcImg14 from 'images/works/thermos/thermos_14.jpg';
import moImg01 from 'images/works/thermos/mo_thermos_01.jpg';
import moImg02 from 'images/works/thermos/mo_thermos_02.jpg';
import moImg03 from 'images/works/thermos/mo_thermos_03.jpg';
import moImg04 from 'images/works/thermos/mo_thermos_04.jpg';
import moImg05 from 'images/works/thermos/mo_thermos_05.jpg';
import moImg06 from 'images/works/thermos/mo_thermos_06.jpg';
import moImg07 from 'images/works/thermos/mo_thermos_07.jpg';
import moImg08 from 'images/works/thermos/mo_thermos_08.jpg';
import moImg09 from 'images/works/thermos/mo_thermos_09.jpg';
import moImg10 from 'images/works/thermos/mo_thermos_10.jpg';
import moImg11 from 'images/works/thermos/mo_thermos_11.jpg';
import moImg12 from 'images/works/thermos/mo_thermos_12.jpg';
import moImg13 from 'images/works/thermos/mo_thermos_13.jpg';

const Thermos = () => {
    useEffect(() => {
        AOS.init();
    });

    return (
        <Detail>
            <div className="top_info">
                <div className="inner">
                    <div className="thumb_img" data-aos="fade-right">
                        <img src={thermosImg} alt="써모스" />
                    </div>
                    <div className="info">
                        <p className="sub_title">
                            Cafe24
                        </p>
                        <h2>THERMOS</h2>
                        <div className="chart">
                            <ProgressLine
                                label="퍼블리싱"
                                visualParts={[{percentage: "100%"}]}
                            />
                        </div>
                        
                        <p className="description">
                            홈페이지 전체페이지 리뉴얼 퍼블리싱 작업 및 유지보수를 담당했으며,<br />
                            기존 Cafe24에 없는 시스템인 마이페이지 소모품찾기/정품등록서비스 프론트엔드 개발에 참여했습니다.
                        </p>
                        <div className="tag">
                            <span>유지보수</span>
                            <span>운영</span>
                            <span>전체 리뉴얼</span>
                            <span>부분 개발</span>
                            <span>PC + MOBILE</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom_info">
                <div className="inner">
                    <h3 data-aos="fade-right">PC UI</h3>
                    <div className="img_wrap">
                        <ul>
                            <li data-aos="fade-up" data-aos-delay="100" data-aos-duration="500"><img src={pcImg01} alt="메인" /></li>
                            <li data-aos="fade-up" data-aos-delay="100" data-aos-duration="500" data-aos-offset="300"><img src={pcImg09} alt="주문내역" /></li>
                            <li data-aos="fade-up" data-aos-delay="100" data-aos-duration="500" data-aos-offset="300"><img src={pcImg11} alt="소모품찾기" /></li>
                        </ul>
                        <ul>
                            <li data-aos="fade-up" data-aos-delay="200" data-aos-duration="500"><img src={pcImg02} alt="분류" /></li>
                            <li data-aos="fade-up" data-aos-delay="200" data-aos-duration="500" data-aos-offset="300"><img src={pcImg06} alt="장바구니" /></li>
                            <li data-aos="fade-up" data-aos-delay="200" data-aos-duration="500" data-aos-offset="300"><img src={pcImg08} alt="마이페이지" /></li>
                            <li data-aos="fade-up" data-aos-delay="200" data-aos-duration="500" data-aos-offset="300"><img src={pcImg10} alt="주문내역상세" /></li>                            
                        </ul>
                        <ul>
                            <li data-aos="fade-up" data-aos-delay="300" data-aos-duration="500"><img src={pcImg03} alt="상세" /></li>                            
                            <li data-aos="fade-up" data-aos-delay="300" data-aos-duration="500" data-aos-offset="300"><img src={pcImg04} alt="상세레이어" /></li>
                            <li data-aos="fade-up" data-aos-delay="300" data-aos-duration="500" data-aos-offset="300"><img src={pcImg12} alt="정품등록서비스" /></li>                            
                            <li data-aos="fade-up" data-aos-delay="300" data-aos-duration="500" data-aos-offset="300"><img src={pcImg13} alt="정품등록" /></li>
                        </ul>
                        <ul>
                            <li data-aos="fade-up" data-aos-delay="400" data-aos-duration="500"><img src={pcImg05} alt="기획전" /></li>
                            <li data-aos="fade-up" data-aos-delay="400" data-aos-duration="500" data-aos-offset="300"><img src={pcImg07} alt="주문서" /></li>
                            <li data-aos="fade-up" data-aos-delay="400" data-aos-duration="500" data-aos-offset="300"><img src={pcImg14} alt="게시판" /></li>
                        </ul>
                    </div>
                    <h3 data-aos="fade-right">MO UI</h3>
                    <div className="img_wrap">
                        <ul>
                            <li data-aos="fade-up" data-aos-delay="100" data-aos-duration="500" data-aos-offset="300"><img src={moImg01} alt="메인" /></li>
                        </ul>
                        <ul>
                            <li data-aos="fade-up" data-aos-delay="200" data-aos-duration="500" data-aos-offset="300"><img src={moImg02} alt="사이드메뉴" /></li>
                            <li data-aos="fade-up" data-aos-delay="200" data-aos-duration="500" data-aos-offset="300"><img src={moImg05} alt="상세레이어" /></li>
                            <li data-aos="fade-up" data-aos-delay="200" data-aos-duration="500" data-aos-offset="300"><img src={moImg06} alt="장바구니" /></li>
                            <li data-aos="fade-up" data-aos-delay="200" data-aos-duration="500" data-aos-offset="300"><img src={moImg08} alt="마이페이지" /></li>
                            <li data-aos="fade-up" data-aos-delay="200" data-aos-duration="500" data-aos-offset="300"><img src={moImg09} alt="주문내역" /></li>
                        </ul>
                        <ul>
                            <li data-aos="fade-up" data-aos-delay="300" data-aos-duration="500" data-aos-offset="300"><img src={moImg03} alt="분류" /></li>
                            <li data-aos="fade-up" data-aos-delay="300" data-aos-duration="500" data-aos-offset="300"><img src={moImg12} alt="정품등록서비스" /></li>                            
                            <li data-aos="fade-up" data-aos-delay="300" data-aos-duration="500" data-aos-offset="300"><img src={moImg13} alt="정품등록" /></li>
                            <li data-aos="fade-up" data-aos-delay="300" data-aos-duration="500" data-aos-offset="300"><img src={moImg11} alt="소모품찾기" /></li>
                            <li data-aos="fade-up" data-aos-delay="300" data-aos-duration="500" data-aos-offset="300"><img src={moImg10} alt="주문내역상세" /></li>
                        </ul>
                        <ul>
                            <li data-aos="fade-up" data-aos-delay="400" data-aos-duration="500" data-aos-offset="300"><img src={moImg04} alt="상세" /></li>
                            <li data-aos="fade-up" data-aos-delay="400" data-aos-duration="500" data-aos-offset="300"><img src={moImg07} alt="주문서" /></li>
                            
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

export default Thermos;