import React, {useEffect, useState} from 'react';
import { BoardWrap } from 'styles/service.styled';
import Button from "components/Button/Button";
import ConfirmDialog from "components/Modal/ConfirmDialog";
import {customerTheme} from "theme";
import Editor from "components/Editor";
import BackConfirmDialog from "../../components/Modal/BackConfirmDialog";

const QnaWrite = ({ setTheme }) => {
    useEffect(() => {
        if(setTheme){
            setTheme(customerTheme);
        }
    }, []);
    const [visible, setVisible] = useState(false);
    return (
        <BoardWrap>
            <div className="inner">
                <div className="title_area">
                    <h2>Q&A</h2>
                    <div className="path">홈 > 서비스 지원 > Q&A > 등록</div>
                </div>
                <div className="content">
                    <div className="cont_box">
                        <div className="outline_box search_box">
                            <table className="form_tb">
                                <tbody>
                                <tr>
                                    <th>제목</th>
                                    <td><input type="text" placeholder="제목 입력" /></td>
                                </tr>
                                <tr>
                                    <th>내용</th>
                                    <td><Editor /></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="center_button_wrap">
                        <Button type="button" className="large gray" onClick={() => setVisible(true)}>취소</Button>
                        <Button type="button" className="large" onClick={() => window.location.href='/qna/list'}>목록</Button>
                    </div>
                </div>
            </div>
            <BackConfirmDialog visible={visible} onConfirm={() => window.location.href = '/qna/list'} />
        </BoardWrap>
    )
};

export default QnaWrite;