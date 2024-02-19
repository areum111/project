import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Detail } from 'styles/detail.styled';
import ProgressLine from "components/ProgressLine/ProgressLine";
import AOS from "aos";
import "aos/dist/aos.css";
import varramImg from 'images/works/varram.jpg';
import pcImg01 from 'images/works/varram/varram_01.jpg';
import pcImg02 from 'images/works/varram/varram_02.jpg';
import pcImg03 from 'images/works/varram/varram_03.jpg';
import pcImg04 from 'images/works/varram/varram_04.jpg';
import pcImg05 from 'images/works/varram/varram_05.jpg';
import pcImg06 from 'images/works/varram/varram_06.jpg';
import pcImg07 from 'images/works/varram/varram_07.jpg';
import pcImg08 from 'images/works/varram/varram_08.jpg';
import pcImg09 from 'images/works/varram/varram_09.jpg';
import pcImg10 from 'images/works/varram/varram_10.jpg';
import pcImg11 from 'images/works/varram/varram_11.jpg';
import pcImg12 from 'images/works/varram/varram_12.jpg';
import pcImg13 from 'images/works/varram/varram_13.jpg';
import pcImg14 from 'images/works/varram/varram_14.jpg';
import pcImg15 from 'images/works/varram/varram_15.jpg';
import pcImg16 from 'images/works/varram/varram_16.jpg';
import pcImg17 from 'images/works/varram/varram_17.jpg';
import moImg01 from 'images/works/varram/mo_varram_01.jpg';
import moImg02 from 'images/works/varram/mo_varram_02.jpg';
import moImg03 from 'images/works/varram/mo_varram_03.jpg';
import moImg04 from 'images/works/varram/mo_varram_04.jpg';
import moImg05 from 'images/works/varram/mo_varram_05.jpg';
import moImg06 from 'images/works/varram/mo_varram_06.jpg';
import moImg07 from 'images/works/varram/mo_varram_07.jpg';
import moImg08 from 'images/works/varram/mo_varram_08.jpg';
import moImg09 from 'images/works/varram/mo_varram_09.jpg';
import moImg10 from 'images/works/varram/mo_varram_10.jpg';
import moImg11 from 'images/works/varram/mo_varram_11.jpg';
import moImg12 from 'images/works/varram/mo_varram_12.jpg';
import moImg13 from 'images/works/varram/mo_varram_13.jpg';
import moImg14 from 'images/works/varram/mo_varram_14.jpg';
import moImg15 from 'images/works/varram/mo_varram_15.jpg';
import moImg16 from 'images/works/varram/mo_varram_16.jpg';
import moImg17 from 'images/works/varram/mo_varram_17.jpg';


const Varram = () => {
    useEffect(() => {
        AOS.init();
    });

    return (
        <Detail>
            <div className="top_info">
                <div className="inner">
                    <div className="thumb_img" data-aos="fade-right">
                        <img src={varramImg} alt="바램펫" />
                    </div>
                    <div className="info">
                        <p className="sub_title">
                            독립몰
                        </p>
                        <h2>VARRAM</h2>
                        <div className="chart">
                            <ProgressLine
                                label="퍼블리싱"
                                visualParts={[{percentage: "100%"}]}
                            />
                        </div>
                        
                        <p className="description">
                            React로 진행한 독립 쇼핑몰로 첫 React 프로젝트였습니다.<br />
                            화면단과 데이터 바인딩을 제외한 기능을 구현했으며 styled-component를 사용했습니다.
                        </p>
                        <div className="tag">
                            <span>React</span>
                            <span>신규 구축</span>
                            <span>반응형</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom_info dark" style={{ background: "#09749C"}}>
                <div className="inner">
                    <h3 data-aos="fade-right">PC UI</h3>
                    <div className="img_wrap">
                        <ul>
                            <li data-aos="fade-up" data-aos-delay="100" data-aos-duration="500"><img src={pcImg01} alt="메인" /></li>
                            <li data-aos="fade-up" data-aos-delay="100" data-aos-duration="500" data-aos-offset="300"><img src={pcImg09} alt="후기작성" /></li>
                            <li data-aos="fade-up" data-aos-delay="100" data-aos-duration="500" data-aos-offset="300"><img src={pcImg11} alt="주문내역상세" /></li>
                            <li data-aos="fade-up" data-aos-delay="100" data-aos-duration="500" data-aos-offset="300"><img src={pcImg10} alt="주문내역" /></li>
                        </ul>
                        <ul>
                            <li data-aos="fade-up" data-aos-delay="200" data-aos-duration="500"><img src={pcImg02} alt="소개" /></li>
                            <li data-aos="fade-up" data-aos-delay="200" data-aos-duration="500" data-aos-offset="300"><img src={pcImg06} alt="상세리뷰탭" /></li>
                            <li data-aos="fade-up" data-aos-delay="200" data-aos-duration="500" data-aos-offset="300"><img src={pcImg08} alt="후기상세" /></li>
                            <li data-aos="fade-up" data-aos-delay="200" data-aos-duration="500" data-aos-offset="300"><img src={pcImg15} alt="적립금" /></li>
                        </ul>
                        <ul>
                            <li data-aos="fade-up" data-aos-delay="300" data-aos-duration="500"><img src={pcImg03} alt="히스토리" /></li>
                            <li data-aos="fade-up" data-aos-delay="300" data-aos-duration="500" data-aos-offset="300"><img src={pcImg04} alt="분류" /></li>
                            <li data-aos="fade-up" data-aos-delay="300" data-aos-duration="500" data-aos-offset="300"><img src={pcImg12} alt="반품/교환" /></li>                            
                            <li data-aos="fade-up" data-aos-delay="300" data-aos-duration="500" data-aos-offset="300"><img src={pcImg13} alt="작성가능리뷰" /></li>
                            <li data-aos="fade-up" data-aos-delay="300" data-aos-duration="500" data-aos-offset="300"><img src={pcImg16} alt="장바구니" /></li>
                        </ul>
                        <ul>
                            <li data-aos="fade-up" data-aos-delay="400" data-aos-duration="500"><img src={pcImg05} alt="상세" /></li>
                            <li data-aos="fade-up" data-aos-delay="400" data-aos-duration="500" data-aos-offset="300"><img src={pcImg07} alt="후기" /></li>
                            <li data-aos="fade-up" data-aos-delay="400" data-aos-duration="500" data-aos-offset="300"><img src={pcImg14} alt="작성한후기" /></li>
                            <li data-aos="fade-up" data-aos-delay="400" data-aos-duration="500" data-aos-offset="300"><img src={pcImg17} alt="주문결제" /></li>
                        </ul>
                    </div>
                    <h3 data-aos="fade-right">MO UI</h3>
                    <div className="img_wrap">
                        <ul>
                            <li data-aos="fade-up" data-aos-delay="100" data-aos-duration="500" data-aos-offset="300"><img src={moImg01} alt="메인" /></li>
                            <li data-aos="fade-up" data-aos-delay="100" data-aos-duration="500" data-aos-offset="300"><img src={moImg14} alt="메인" /></li>
                            <li data-aos="fade-up" data-aos-delay="100" data-aos-duration="500" data-aos-offset="300"><img src={moImg16} alt="장바구니" /></li>
                            <li data-aos="fade-up" data-aos-delay="100" data-aos-duration="500" data-aos-offset="300"><img src={moImg06} alt="상세구매평탭" /></li>
                        </ul>
                        <ul>
                            <li data-aos="fade-up" data-aos-delay="200" data-aos-duration="500" data-aos-offset="300"><img src={moImg02} alt="소개" /></li>
                            <li data-aos="fade-up" data-aos-delay="200" data-aos-duration="500" data-aos-offset="300"><img src={moImg05} alt="상세" /></li>
                            <li data-aos="fade-up" data-aos-delay="200" data-aos-duration="500" data-aos-offset="300"><img src={moImg08} alt="마이페이지" /></li>
                            <li data-aos="fade-up" data-aos-delay="200" data-aos-duration="500" data-aos-offset="300"><img src={moImg09} alt="구매평작성" /></li>
                        </ul>
                        <ul>
                            <li data-aos="fade-up" data-aos-delay="300" data-aos-duration="500" data-aos-offset="300"><img src={moImg03} alt="분류" /></li>
                            <li data-aos="fade-up" data-aos-delay="300" data-aos-duration="500" data-aos-offset="300"><img src={moImg12} alt="반품/교환" /></li>                            
                            <li data-aos="fade-up" data-aos-delay="300" data-aos-duration="500" data-aos-offset="300"><img src={moImg13} alt="작성한후기" /></li>
                            <li data-aos="fade-up" data-aos-delay="300" data-aos-duration="500" data-aos-offset="300"><img src={moImg11} alt="주문내역상세" /></li>
                            <li data-aos="fade-up" data-aos-delay="300" data-aos-duration="500" data-aos-offset="300"><img src={moImg10} alt="주문내역" /></li>
                        </ul>
                        <ul>
                            <li data-aos="fade-up" data-aos-delay="400" data-aos-duration="500" data-aos-offset="300"><img src={moImg04} alt="분류필터" /></li>
                            <li data-aos="fade-up" data-aos-delay="400" data-aos-duration="500" data-aos-offset="300"><img src={moImg07} alt="후기" /></li>
                            <li data-aos="fade-up" data-aos-delay="400" data-aos-duration="500" data-aos-offset="300"><img src={moImg15} alt="적립금" /></li>
                            <li data-aos="fade-up" data-aos-delay="400" data-aos-duration="500" data-aos-offset="300"><img src={moImg17} alt="주문결제" /></li>
                            
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

export default Varram;