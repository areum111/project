import React, {useEffect, useState} from 'react';
import { BoardWrap } from 'styles/service.styled';
import Button from "components/Button/Button";
import ConfirmDialog from "components/Modal/ConfirmDialog";
import {customerTheme} from "theme";

const QnaDetail = ({ setTheme }) => {
    const [customer, setCustomer] = useState(false);
    useEffect(() => {
        if(setTheme){
            setTheme(customerTheme);
            setCustomer(true);
        }
    }, []);

    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [modComment, setModComment] = useState(false);
    const [modComment2, setModComment2] = useState(false);
    const [visible3, setVisible3] = useState(false);
    const [visible4, setVisible4] = useState(false);
    return (
        <BoardWrap>
            <div className="inner">
                <div className="title_area">
                    <h2>사용량 조회 관련 문의합니다.</h2>
                    <span className="user_name">LG</span>
                    <p className="path">홈 > 서비스 지원 > Q&A</p>
                </div>
                <div className="content">
                    {!customer ? <div className="right_btn_wrap">
                            <Button className="large" onClick={() => setVisible(true)}>처리 완료</Button>
                        </div> : null}
                    <div className="cont_box">
                        <div className="outline_box">
                            <table className="form_tb">
                                <tbody>
                                <tr>
                                    <th>작성자</th>
                                    <td>홍길동(exa******)</td>
                                </tr>
                                <tr>
                                    <th>작성 일자</th>
                                    <td>2023-06-01 15:32</td>
                                </tr>
                                <tr>
                                    <th>내용</th>
                                    <td>
                                        <p>사용량이 조금 높게 나온 것 같은데 확인 부탁드립니다.<br />
                                            200MB 썼다고 나오는데 저렇게 많이 쓰지 않았습니다.</p>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="cont_box">
                        <div className="cont_title"><h3>댓글</h3></div>
                        {customer ? <div className="outline_box comment_view">
                            <p>자신이 등록한 게시글에만 댓글을 작성할 수 있습니다.</p>
                        </div> : <>
                            <div className="outline_box">
                                <ul className="comment_list">
                                    <li>
                                        <div className="comment">
                                            <div className="write_info">
                                                <span className="writer">김인스(ins****)</span>
                                                <span className="company_name">인스피언</span>
                                                <span className="reg_date">2023-06-01 15:32</span>
                                                <div className="btn_wrap">
                                                    <button type="button" className="mod_btn" onClick={() => setModComment(true)}>수정</button>
                                                    <button type="button" className="del_btn" onClick={() => setVisible4(true)}>삭제</button>
                                                </div>
                                            </div>
                                            {modComment ?
                                                <div className="write_wrap">
                                                    <textarea placeholder="댓글 입력" value="현재 확인 중에 있습니다." />
                                                    <Button type="button" className="medium" onClick={() => setModComment(false)}>등록</Button>
                                                </div> :
                                                <div className="text_wrap">
                                                    <p>현재 확인 중에 있습니다.</p>
                                                    <Button type="button" className="small reply_btn">답글</Button>
                                                </div>
                                            }
                                        </div>
                                        <ul className="reply">
                                            <li>
                                                <div className="write_info">
                                                    <span className="writer">홍길동(exa****)</span>
                                                    <span className="company_name">LG</span>
                                                    <span className="reg_date">2023-06-05 10:16</span>
                                                </div>
                                                <div className="text_wrap">
                                                    <p>언제쯤 확인이 가능할까요?</p>
                                                    <Button type="button" className="small reply_btn">답글</Button>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="write_info">
                                                    <span className="writer">김인스(ins****)</span>
                                                    <span className="company_name">인스피언</span>
                                                    <span className="reg_date">2023-06-01 15:32</span>
                                                    <div className="btn_wrap">
                                                        <button type="button" className="mod_btn" onClick={() => setModComment2(true)}>수정</button>
                                                        <button type="button" className="del_btn" onClick={() => setVisible4(true)}>삭제</button>
                                                    </div>
                                                </div>
                                                {modComment2 ?
                                                    <div className="write_wrap">
                                                        <textarea placeholder="댓글 입력" value="금주 중으로 확인 후 안내해 드리겠습니다." />
                                                        <Button type="button" className="medium" onClick={() => setModComment2(false)}>등록</Button>
                                                    </div> :
                                                    <div className="text_wrap">
                                                        <p><span className="name">@홍길동</span> 금주 중으로 확인 후 안내해 드리겠습니다.</p>
                                                        <Button type="button" className="small reply_btn">답글</Button>
                                                    </div>
                                                }
                                            </li>
                                            <li>
                                                <div className="write_info">
                                                    <span className="writer">홍길동(exa****)</span>
                                                    <span className="company_name">LG</span>
                                                    <span className="reg_date">2023-06-05 10:16</span>
                                                </div>
                                                <div className="text_wrap">
                                                    <p><span className="name">@김인스</span> 확인했습니다.</p>
                                                    <Button type="button" className="small reply_btn">답글</Button>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="sub_reply">
                                            <div className="write_info">
                                                <span className="writer">김인스(ins****)</span>
                                                <span className="company_name">인스피언</span>
                                            </div>
                                            <div className="write_wrap">
                                                <textarea placeholder="댓글 입력" />
                                                <Button type="button" className="medium">등록</Button>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="comment">
                                            <div className="write_info">
                                                <p className="no_data">댓글이 삭제되었습니다.</p>
                                            </div>
                                        </div>
                                        <ul className="reply">
                                            <li>
                                                <div className="write_info">
                                                    <span className="writer">홍길동(exa****)</span>
                                                    <span className="company_name">LG</span>
                                                    <span className="reg_date">2023-06-05 10:16</span>
                                                </div>
                                                <div className="text_wrap">
                                                    <p>언제쯤 확인이 가능할까요?</p>
                                                    <Button type="button" className="small reply_btn">답글</Button>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="outline_box">
                                <div className="write_comment">
                                    <div className="write_info">
                                        <span className="writer">작성자명(ID***)</span>
                                        <span className="company_name">소속</span>
                                    </div>
                                    <div className="write_wrap">
                                        <textarea placeholder="댓글 입력" />
                                        <Button type="button" className="large">등록</Button>
                                    </div>
                                </div>
                            </div>
                        </>}
                    </div>
                </div>
                <div className="center_button_wrap">
                    <Button type="button" className="large outline" onClick={() => window.location.href='/qna/list'}>목록</Button>
                </div>
            </div>
            <ConfirmDialog
                visible={visible}
                text="‘처리 완료’ 상태로 변경하시겠습니까?"
                confirmText="변경"
                onConfirm={() => {setVisible(false);setVisible2(true)}}
                onCancel={() => setVisible(false)}
            />
            <ConfirmDialog
                visible={visible2}
                text="‘처리 완료’ 상태로 변경되었습니다."
                onConfirm={() => setVisible2(false)}
            />
            <ConfirmDialog
                visible={visible4}
                text="댓글을 삭제하시겠습니까?"
                confirmText="삭제"
                //onConfirm={}
                onCancel={() => setVisible4(false)}
            />
        </BoardWrap>
    )
};

export default QnaDetail;