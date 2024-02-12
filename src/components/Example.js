import React, {useMemo, useState} from "react";
import styled from "styled-components";
import Checkbox from "components/Checkbox/Checkbox";
import Radiobox from "components/Radio/RadioButton";
import SwitchToggle from "components/SwitchToggle/SwitchToggle";
import SelecBox from "components/SelectBox/SelectBox";
import Button from "components/Button/Button";
import UserIco from "images/ico/ico_user2.svg";
import UserGrayIco from "images/ico/ico_user_gray.svg";
import {customerTheme, inspienTheme, partnerTheme} from "../theme";
import Filter from "./SelectBox/Filter";
import CustomDatePicker from "./datepicker/CustomDatePicker";
import Pagination from "./Pagination/Pagination";
import PopupImg1 from "images/sample/popup_sample1.png";
import PopupImg2 from "images/sample/popup_sample2.png";
import PopupImg3 from "images/sample/popup_sample3.png";
import PopupImg4 from "images/sample/popup_sample4.png";
import PopupImg5 from "images/sample/popup_sample5.png";
import PopupImg6 from "images/sample/popup_sample6.png";
import PopupImg7 from "images/sample/popup_sample7.png";
import PopupImg8 from "images/sample/popup_sample8.png";
import PopupImg9 from "images/sample/popup_sample9.png";
import PopupImg10 from "images/sample/popup_sample10.png";
import Dialog from "./Modal/Dialog";
import DialogCheck from "images/ico/ico_check_bg.svg";
import DialogWarning from "images/ico/ico_warn_bg.svg";
import DialogX from "images/ico/ico_x_bg.svg";
import {Link} from "react-router-dom";
import { ModalWrap } from "styles/modal.styled";
import SearchImg from "../images/ico/ico_search.svg";
import DataTable from "./Table/DataTable";
import ConfirmDialog from "./Modal/ConfirmDialog";
// import Table from "components/Table/Table";

const ButtonWrap = () => {
    return (
        <div className="outline_box">
            <p>버튼 스타일은 Button 컴포넌트에서 수정할 수 있습니다.</p>
            <p>파일위치 : /src/components/Button/Button.js</p><br /><br />
            <div className="title">
                <h4>Filled</h4>
            </div>
            <table className="data_tb">
                <thead>
                <tr>
                    <th style={{width: "20rem"}}></th>
                    <th style={{width: "20rem"}}>Default (enabled) / hover</th>
                    <th style={{width: "20rem"}}>Disabled</th>
                    <th style={{width: "20rem"}}>gray / dark gray</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <p className="size">Large (20px)</p>
                        <p>height : 48px</p>
                        <p>radius : 24px</p>
                    </td>
                    <td>
                        <p><Button className="large">Text</Button></p>
                        <p><Button className="large" addicon>Text</Button></p>
                    </td>
                    <td>
                        <p><Button className="large disabled">Text</Button></p>
                        <p><Button className="large disabled" addicon>Text</Button></p>
                    </td>
                    <td>
                        <p><Button className="large dark_gray">Text</Button></p>
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        <p className="size">Medium (16px)</p>
                        <p>height : 36px</p>
                        <p>radius : 20px</p>
                    </td>
                    <td>
                        <p><Button className="medium">Text</Button></p>
                        <p><Button className="medium" addicon>Text</Button></p>
                    </td>
                    <td>
                        <p><Button className="medium disabled">Text</Button></p>
                        <p><Button className="medium disabled" addicon>Text</Button></p>
                    </td>
                    <td>
                        <p><Button className="medium dark_gray">Text</Button></p>
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        <p className="size">Small (14px)</p>
                        <p>height : 28px</p>
                        <p>radius : 18px</p>
                    </td>
                    <td>
                        <p><Button className="small">Text</Button></p>
                        <p><Button className="small" addicon>Text</Button></p>
                    </td>
                    <td>
                        <p><Button className="small disabled">Text</Button></p>
                        <p><Button className="small disabled" addicon>Text</Button></p>
                    </td>
                    <td>
                        <p><Button className="small dark_gray">Text</Button></p>
                    </td>
                    <td></td>
                </tr>
                </tbody>
            </table>
            <div className="title">
                <h4>outlined</h4>
            </div>
            <table className="data_tb">
                <thead>
                <tr>
                    <th style={{width: "20rem"}}></th>
                    <th style={{width: "20rem"}}>Default (enabled) / hover</th>
                    <th style={{width: "20rem"}}>Disabled</th>
                    <th style={{width: "20rem"}}>black</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <p className="size">Large (20px)</p>
                        <p>height : 48px</p>
                        <p>radius : 24px</p>
                    </td>
                    <td>
                        <p><Button className="large outline">Text</Button></p>
                        <p><Button className="large outline" addicon>Text</Button></p>
                    </td>
                    <td>
                        <p><Button className="large outline disabled">Text</Button></p>
                        <p><Button className="large outline disabled" addicon>Text</Button></p>
                    </td>
                    <td>
                        <p><Button className="large gray">Text</Button></p>
                        <p><Button className="large outline black">Text</Button></p>
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        <p className="size">Medium (16px)</p>
                        <p>height : 36px</p>
                        <p>radius : 20px</p>
                    </td>
                    <td>
                        <p><Button className="medium outline">Text</Button></p>
                        <p><Button className="medium outline" addicon>Text</Button></p>
                    </td>
                    <td>
                        <p><Button className="medium outline disabled">Text</Button></p>
                        <p><Button className="medium outline disabled" addicon>Text</Button></p>
                    </td>
                    <td>
                        <p><Button className="medium gray">Text</Button></p>
                        <p><Button className="medium outline black">Text</Button></p>
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        <p className="size">Small (14px)</p>
                        <p>height : 28px</p>
                        <p>radius : 18px</p>
                    </td>
                    <td>
                        <p><Button className="small outline">Text</Button></p>
                        <p><Button className="small outline" addicon>Text</Button></p>
                    </td>
                    <td>
                        <p><Button className="small outline disabled">Text</Button></p>
                        <p><Button className="small outline disabled" addicon>Text</Button></p>
                    </td>
                    <td>
                        <p><Button className="small gray">Text</Button></p>
                        <p><Button className="small outline black">Text</Button></p>
                    </td>
                    <td></td>
                </tr>
                </tbody>
            </table>
            <div className="title">
                <h4>Text</h4>
            </div>
            <table className="data_tb">
                <thead>
                <tr>
                    <th style={{width: "20rem"}}></th>
                    <th style={{width: "20rem"}}>Default (enabled) / hover</th>
                    <th style={{width: "20rem"}}>Disabled</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <p className="size">Large (20px)</p>
                        <p>height : 48px</p>
                        <p>radius : 24px</p>
                    </td>
                    <td>
                        <p><Button className="large text_only">Text</Button></p>
                        <p><Button className="large text_only" addicon>Text</Button></p>
                    </td>
                    <td>
                        <p><Button className="large text_only disabled">Text</Button></p>
                        <p><Button className="large text_only disabled" addicon>Text</Button></p>
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        <p className="size">Medium (16px)</p>
                        <p>height : 36px</p>
                        <p>radius : 20px</p>
                    </td>
                    <td>
                        <p><Button className="medium text_only">Text</Button></p>
                        <p><Button className="medium text_only" addicon>Text</Button></p>
                    </td>
                    <td>
                        <p><Button className="medium text_only disabled">Text</Button></p>
                        <p><Button className="medium text_only disabled" addicon>Text</Button></p>
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        <p className="size">Small (14px)</p>
                        <p>height : 28px</p>
                        <p>radius : 18px</p>
                    </td>
                    <td>
                        <p><Button className="small text_only">Text</Button></p>
                        <p><Button className="small text_only" addicon>Text</Button></p>
                    </td>
                    <td>
                        <p><Button className="small text_only disabled">Text</Button></p>
                        <p><Button className="small text_only disabled" addicon>Text</Button></p>
                    </td>
                    <td></td>
                </tr>
                </tbody>
            </table>
            <div className="title">
                <h4>CTA (login, cart 영역에서만 활용)</h4>
            </div>
            <p><Button className="full">Text</Button></p><br />
            <p><Button className="full outline">Text</Button></p><br />
            <p><Button className="full point">Text</Button></p><br />
            <p><Button className="full disabled">Text</Button></p><br /><br />
            <div className="title">
                <h4>검색영역, 페이지 하단 가운데 정렬 버튼</h4>
            </div>
            <div className="center_button_wrap">
                <Button type="button" className="large outline">이전</Button>
                <Button type="button" className="large">확인</Button>
            </div>
        </div>
    )
};

const BoxWrap = () => {
    const options = [
        {value: 1, label: "option1"},
        {value: 2, label: "option2"}
    ]
    const languages = [
        {value: 1, label: "한국어"},
        {value: 2, label: "영어"}
    ]
    return (
        <div className="outline_box">
            <p>버튼 스타일은 각 컴포넌트에서 수정할 수 있습니다.</p><br /><br />
            <div className="title">
                <h4>Check box</h4>
                <p className="desc">/src/components/Checkbox/Checkbox.js</p>
            </div>
            <table className="data_tb">
                <thead>
                <tr>
                    <th style={{width: "20rem"}}></th>
                    <th style={{width: "20rem"}}>Default (enabled)</th>
                    <th style={{width: "20rem"}}>Selected</th>
                    <th style={{width: "20rem"}}>Disabled</th>
                    <th style={{width: "20rem"}}>error</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td><p className="size">Switch only</p></td>
                    <td><Checkbox id="chk0" /></td>
                    <td><Checkbox id="chk2" checked /></td>
                    <td><Checkbox id="chk2" disabled /></td>
                    <td><Checkbox id="chk3" error /></td>
                    <td></td>
                </tr>
                <tr>
                    <td><p className="size">Label large</p></td>
                    <td><Checkbox id="chk4" size="large" label="Label" /></td>
                    <td><Checkbox id="chk4" size="large" label="Label" checked /></td>
                    <td><Checkbox id="chk6" size="large" label="Label" disabled /><br /></td>
                    <td><Checkbox id="chk7" size="large" label="Label" error /><br /></td>
                    <td></td>
                </tr>
                <tr>
                    <td><p className="size">Label small</p></td>
                    <td><Checkbox id="chk8" size="medium" label="Label" /></td>
                    <td><Checkbox id="chk8" size="medium" label="Label" checked /></td>
                    <td><Checkbox id="chk10" size="medium" label="Label" disabled /><br /></td>
                    <td><Checkbox id="chk11" size="medium" label="Label" error /><br /></td>
                    <td></td>
                </tr>
                </tbody>
            </table>
            <div className="title">
                <h4>Radio</h4>
                <p className="desc">/src/components/Radio/RadioButton.js</p>
            </div>
            <table className="data_tb">
                <thead>
                <tr>
                    <th style={{width: "20rem"}}></th>
                    <th style={{width: "20rem"}}>Default (enabled)</th>
                    <th style={{width: "20rem"}}>Selected</th>
                    <th style={{width: "20rem"}}>Disabled</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td><p className="size">Switch only</p></td>
                    <td><Radiobox id="radio0" name="radios1" /></td>
                    <td><Radiobox id="radio1" name="radios1" /></td>
                    <td><Radiobox id="radio2" name="radios1" disabled /><br /></td>
                    <td></td>
                </tr>
                <tr>
                    <td><p className="size">Label large</p></td>
                    <td><Radiobox id="radio3" name="radios2" size="large" label="Label" /></td>
                    <td><Radiobox id="radio4" name="radios2" size="large" label="Label" /></td>
                    <td><Radiobox id="radio5" name="radios2" size="large" label="Label" disabled /><br /></td>
                    <td></td>
                </tr>
                <tr>
                    <td><p className="size">Label small</p></td>
                    <td><Radiobox id="radio6" name="radios3" size="medium" label="Label" /></td>
                    <td><Radiobox id="radio7" name="radios3" size="medium" label="Label" /></td>
                    <td><Radiobox id="radio8" name="radios3" size="medium" label="Label" disabled /><br /></td>
                    <td></td>
                </tr>
                </tbody>
            </table>
            <div className="title">
                <h4>Toggle</h4>
                <p className="desc">/src/components/SwitchToggle/SwitchToggle.js</p>
            </div>
            <table className="data_tb">
                <thead>
                <tr>
                    <th style={{width: "20rem"}}></th>
                    <th style={{width: "20rem"}}>Default (enabled)</th>
                    <th style={{width: "20rem"}}>Selected</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td><p className="size">Switch only</p></td>
                    <td><SwitchToggle /></td>
                    <td><SwitchToggle checked /></td>
                    <td></td>
                </tr>
                </tbody>
            </table>
            <div className="title">
                <h4>셀렉트박스</h4>
                <p className="desc">일반 : /src/components/SelecBox/SelecBox.js, 언어설정 : /src/components/SelecBox/Filter.js</p>
            </div>
            <table className="data_tb select">
                <thead>
                <tr>
                    <th style={{width: "10%"}}></th>
                    <th style={{width: "15%"}}>Default (enabled)</th>
                    <th style={{width: "15%"}}>Focused</th>
                    <th style={{width: "15%"}}>Filled</th>
                    <th style={{width: "15%"}}>Disabled</th>
                    <th style={{width: "15%"}}>error</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <p className="size">Large</p>
                        <p>flexible*48</p>
                    </td>
                    <td><SelecBox size="large" options={options} /></td>
                    <td><SelecBox size="large" open options={options} /></td>
                    <td><SelecBox size="large" options={options} value={options[0]} /></td>
                    <td><SelecBox size="large" options={options} isDisabled /></td>
                    <td>
                        <SelecBox className="select error" size="large" options={options} value={options[0]} />
                        <p className="vali_msg">Supporting text</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p className="size">Small</p>
                        <p>flexible*36</p>
                    </td>
                    <td><SelecBox size="medium" options={options} /></td>
                    <td><SelecBox size="medium" open options={options} /></td>
                    <td><SelecBox size="medium" options={options} value={options[0]} /></td>
                    <td><SelecBox size="medium" options={options} isDisabled /></td>
                    <td>
                        <SelecBox className="select error" size="medium" options={options} value={options[0]} />
                        <p className="vali_msg">Supporting text</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p className="size">X-Small</p>
                        <p>flexible*28</p>
                    </td>
                    <td><SelecBox size="small" options={options} /></td>
                    <td><SelecBox size="small" open options={options} /></td>
                    <td><SelecBox size="small" options={options} value={options[0]} /></td>
                    <td><SelecBox size="small" options={options} isDisabled /></td>
                    <td>
                        <SelecBox className="select error" size="small" options={options} value={options[0]} />
                        <p className="vali_msg">Supporting text</p>
                    </td>
                </tr>
                <tr className="bg">
                    <td>
                        <p className="size" style={{ color: "#fff"}}>언어설정</p>
                        <p style={{ color: "#fff"}}>flexible*28</p>
                    </td>
                    <td><Filter options={languages} value={languages[0]} /></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                </tbody>
            </table>
        </div>
    )
};

const InputWrap = () => {
    return (
        <div className="outline_box">
            <div className="title">
                <h4>input</h4>
                <p className="desc">스타일은 GlobalStyle.js에서 수정 할 수 있습니다.</p>
            </div>
            <table className="data_tb input">
                <thead>
                <tr>
                    <th style={{width: "10%"}}></th>
                    <th style={{width: "15%"}}>Default (enabled)</th>
                    <th style={{width: "15%"}}>Focused</th>
                    <th style={{width: "15%"}}>Filled</th>
                    <th style={{width: "15%"}}>Disabled</th>
                    <th style={{width: "15%"}}>error</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <p className="size">Large</p>
                        <p>flexible*48</p>
                    </td>
                    <td>
                        <input type="text" placeholder="placeholder" />
                        <p className="msg">Supporting text</p>
                    </td>
                    <td>
                        <input type="text" placeholder="placeholder" /><br />
                        <p className="msg">Supporting text</p>
                    </td>
                    <td>
                        <input type="text" placeholder="placeholder" value="value" /><br />
                        <p className="msg">Supporting text</p>
                    </td>
                    <td>
                        <input type="text" placeholder="placeholder" disabled /><br />
                        <p className="msg">Supporting text</p>
                    </td>
                    <td>
                        <input type="text" className="error" placeholder="placeholder" />
                        <p className="vali_msg">Supporting text</p>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <div className="id_input"><img src={UserIco} alt="" /><input type="text" placeholder="placeholder" /></div>
                        <p className="msg">Supporting text</p>
                    </td>
                    <td>
                        <div className="id_input"><img src={UserIco} alt="" /><input type="text" placeholder="placeholder" /></div>
                        <p className="msg">Supporting text</p>
                    </td>
                    <td>
                        <div className="id_input"><img src={UserIco} alt="" /><input type="text" placeholder="placeholder" value="value" /></div>
                        <p className="msg">Supporting text</p>
                    </td>
                    <td>
                        <div className="id_input"><img src={UserGrayIco} alt="" /><input type="text" placeholder="placeholder" disabled /></div>
                        <p className="msg">Supporting text</p>
                    </td>
                    <td>
                        <div className="id_input"><img src={UserIco} alt="" /><input type="text" className="error" placeholder="placeholder" /></div>
                        <p className="vali_msg">Supporting text</p>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <div className="del_input"><input type="text" placeholder="placeholder"/><button type="button">지우기</button></div>
                        <p className="msg">Supporting text</p>
                    </td>
                    <td>
                        <div className="del_input"><input type="text" placeholder="placeholder"/><button type="button">지우기</button></div>
                        <p className="msg">Supporting text</p>
                    </td>
                    <td>
                        <div className="del_input"><input type="text" placeholder="placeholder"value="value" /><button type="button">지우기</button></div>
                        <p className="msg">Supporting text</p>
                    </td>
                    <td>
                        <div className="del_input"><input type="text" placeholder="placeholder" disabled /><button type="button">지우기</button></div>
                        <p className="msg">Supporting text</p>
                    </td>
                    <td>
                        <div className="del_input"><input type="text" className="error" placeholder="placeholder"/><button type="button">지우기</button></div>
                        <p className="vali_msg">Supporting text</p>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <div className="id_input del_input"><img src={UserIco} alt="" /><input type="text" placeholder="placeholder" /><button type="button">지우기</button></div>
                        <p className="msg">Supporting text</p>
                    </td>
                    <td>
                        <div className="id_input del_input"><img src={UserIco} alt="" /><input type="text" placeholder="placeholder" /><button type="button">지우기</button></div>
                        <p className="msg">Supporting text</p>
                    </td>
                    <td>
                        <div className="id_input del_input"><img src={UserIco} alt="" /><input type="text" placeholder="placeholder" value="value" /><button type="button">지우기</button></div>
                        <p className="msg">Supporting text</p>
                    </td>
                    <td>
                        <div className="id_input del_input"><img src={UserGrayIco} alt="" /><input type="text" placeholder="placeholder" disabled /><button type="button">지우기</button></div>
                        <p className="msg">Supporting text</p>
                    </td>
                    <td>
                        <div className="id_input del_input"><img src={UserIco} alt="" /><input type="text" placeholder="placeholder" className="error" /><button type="button">지우기</button></div>
                        <p className="vali_msg">Supporting text</p>
                    </td>
                </tr>
                </tbody>
            </table>
            <table className="data_tb input">
                <thead>
                <tr>
                    <th style={{width: "20rem"}}>width</th>
                    <th style={{width: "auto"}}>Default (enabled)</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <p className="size">xs</p>
                        <p>flex: 1 1 20rem</p>
                    </td>
                    <td><input type="text" className="xs" /></td>
                </tr>
                <tr>
                    <td>
                        <p className="size">s</p>
                        <p>flex: 1 1 48.7rem</p>
                    </td>
                    <td><input type="text" className="s" /></td>
                </tr>
                <tr>
                    <td>
                        <p className="size">ssm</p>
                        <p>flex: 1 1 57rem</p>
                    </td>
                    <td><input type="text" className="ssm" /></td>
                </tr>
                <tr>
                    <td>
                        <p className="size">sm</p>
                        <p>flex: 1 1 59.5rem</p>
                    </td>
                    <td><input type="text" className="sm" /></td>
                </tr>
                <tr>
                    <td>
                        <p className="size">m</p>
                        <p>flex: 1 1 68rem</p>
                    </td>
                    <td><input type="text" className="m" /></td>
                </tr>
                <tr>
                    <td>
                        <p className="size">l</p>
                        <p>flex: 1 1 88rem</p>
                    </td>
                    <td><input type="text" className="l" /></td>
                </tr>
                <tr>
                    <td>
                        <p className="size">xl</p>
                        <p>flex: 1 1 66.4rem</p>
                    </td>
                    <td><input type="text" className="xl" /></td>
                </tr>
                </tbody>
            </table>
            <div className="title">
                <h4>Data Picker</h4>
            </div>
            <table className="data_tb input">
                <thead>
                <tr>
                    <th style={{width: "20rem"}}></th>
                    <th style={{width: "20rem"}}>Default (enabled)</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <p className="size">Small</p>
                        <p>flexible*36</p>
                    </td>
                    <td><CustomDatePicker /></td>
                    <td></td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

const OtherWrap = () => {
    return (
        <div className="outline_box">
            <div className="title">
                <h4>Label</h4>
                <p className="desc">헤더/장바구니/상점/마이페이지 이용상품 등에 사용되는 라벨입니다. 스타일은 GlobalStyle.js에서 수정할 수 있습니다.</p>
            </div>
            <div className="label_ico">
                <ul>
                    <li><span className="ico_label main">관리자</span></li>
                </ul>
                <ul>
                    <li><span className="small_label purple">패키지</span></li>
                    <li><span className="small_label blue">워크스페이스</span></li>
                    <li><span className="small_label green">부가서비스</span></li>
                    <li><span className="small_label yellow">어댑터</span></li>
                    <li><span className="small_label orange">인터페이스</span></li>
                    <li><span className="small_label blue2">LABEL</span></li>
                    <li><span className="small_label gray">LABEL</span></li>
                    <li><span className="small_label green2">LABEL</span></li>
                </ul>
            </div><br /><br />
            <div className="title">
                <h4>Pagination</h4>
                <p className="desc">스타일은 /src/components/Pagination/Pagination.js에서 수정할 수 있습니다.</p>
            </div>
            <span style={{display: "inline-block"}}><Pagination /></span>
        </div>
    )
}

const PopupWrap = () => {
    const [visible, setVisible] = useState(null);
    const columnData = [
        {
            accessor: "name",
            Header: "성명 (아이디)",
            width: "100%",
        },
    ]

    const columns = useMemo(() => columnData, []);

    const datas = useMemo(() => [
        {"name": <button type="button"><span className="link">박전자 (samsung02)</span></button>,},
        {"name": <button type="button"><span className="link">박전자 (samsung02)</span></button>,},
        {"name": <button type="button"><span className="link">최민준 (samsung02)</span></button>,},
        {"name": <button type="button"><span className="link">이서연 (samsung02)</span></button>,},
        {"name": <button type="button"><span className="link">정도윤 (samsung02)</span></button>,},
        {"name": <button type="button"><span className="link">정도윤 (samsung02)</span></button>,},
        {"name": <button type="button"><span className="link">정도윤 (samsung02)</span></button>,},
    ], [])

    return (
        <div className="outline_box">
            <div className="title">
                <h4>팝업</h4>
                <p className="desc">이미지 클릭 시 팝업 노출</p>
            </div>
            <ul className="popup_list">
                <li>
                    <p>성공/결과(완료)</p>
                    <p><img src={PopupImg1} alt="" onClick={() => setVisible(1)} /></p>
                </li>
                <li>
                    <p>경고</p>
                    <p><img src={PopupImg2} alt="" onClick={() => setVisible(2)} /></p>
                </li>
                <li>
                    <p>에러</p>
                    <p><img src={PopupImg3} alt="" onClick={() => setVisible(3)} /></p>
                </li>
                <li>
                    <p>테이블 호출</p>
                    <p><img src={PopupImg4} alt="" onClick={() => setVisible(4)} /></p>
                </li>
                <li>
                    <p>상세 (입력)</p>
                    <p><img src={PopupImg5} alt="" onClick={() => setVisible(5)} /></p>
                </li>
                <li>
                    <p>안내</p>
                    <p><img src={PopupImg7} alt="" onClick={() => setVisible(6)} /></p>
                </li>
                <li>
                    <p>안내 - 추가케이스 (입력 항목)</p>
                    <p><img src={PopupImg6} alt="" onClick={() => setVisible(7)} /></p>
                </li>
            </ul>
            <ul className="popup_list">
                <li>
                    <p>컨펌</p>
                    <p><img src={PopupImg8} alt="" onClick={() => setVisible(8)} /></p>
                </li>
                <li>
                    <p>컨펌2</p>
                    <p><img src={PopupImg9} alt="" onClick={() => setVisible(9)} /></p>
                </li>
                <li>
                    <p>알럿</p>
                    <p><img src={PopupImg10} alt="" onClick={() => setVisible(10)} /></p>
                </li>
            </ul>
            <ModalWrap>
                <Dialog visible={visible === 1 ? true : false} size="small" onCancel={() => setVisible(null)}>
                    <div className="modal_text">
                        <img src={DialogCheck} alt="" />
                        <p className="main_text">[처리 내용 입력]가 완료되었습니다.</p>
                        <p className="sub_text">안내 문구 입력<br />안내 문구 입력</p>
                    </div>
                    <div className="button_wrap">
                        <Button type="button" className="large" onClick={() => setVisible(false)}>button</Button>
                    </div>
                </Dialog>
            </ModalWrap>
            <ModalWrap>
                <Dialog visible={visible === 2 ? true : false} size="small" onCancel={() => setVisible(null)}>
                    <div className="modal_text">
                        <img src={DialogWarning} alt="" />
                        <p className="main_text">[처리 내용 입력]에 문제가 있습니다.</p>
                        <p className="sub_text">안내 문구 입력<br />안내 문구 입력</p>
                    </div>
                    <div className="button_wrap">
                        <Button type="button" className="large outline" onClick={() => setVisible(null)}>button</Button>
                    </div>
                </Dialog>
            </ModalWrap>
            <ModalWrap>
                <Dialog visible={visible === 3 ? true : false} size="small" onCancel={() => setVisible(null)}>
                    <div className="modal_text">
                        <img src={DialogX} alt="" />
                        <p className="main_text">[처리 내용 입력]를 실패하였습니다.</p>
                        <p className="sub_text">안내 문구 입력<br />안내 문구 입력</p>
                    </div>
                    <div className="button_wrap">
                        <Button type="button" className="large outline" onClick={() => setVisible(null)}>button</Button>
                    </div>
                </Dialog>
            </ModalWrap>
            <ModalWrap className="select_tb_modal">
                <Dialog
                    title={"권한 부여"}
                    visible={visible === 4 ? true : false}
                    onCancel={() => setVisible(null)}
                    size="sm"
                    scroll={true}
                >
                    <div className="scroll_inner">
                        <div className="search_input">
                            <input type="text" placeholder="이름 입력" />
                            <button type="button"><img src={SearchImg} alt="검색" /></button>
                        </div>
                        <div className="data_wrap">
                            <p className="cnt">총 10개</p>
                            <DataTable
                                columns={columns}
                                data={datas}
                            />
                        </div>
                    </div>
                </Dialog>
            </ModalWrap>
            <ModalWrap className="submit_modal">
                <Dialog
                    visible={visible === 5 ? true : false}
                    onCancel={() => setVisible(false)}
                    title={"[항목 제목] - 없을 경우 생략"}
                    size="ml"
                >
                    <p className="main_text">영역 제목</p>
                    <table className="form_tb">
                        <tr>
                            <th>필수항목</th>
                            <td><input type="text" placeholder="입력" /></td>
                        </tr>
                        <tr>
                            <th>선택항목</th>
                            <td><input type="text" placeholder="입력" /></td>
                        </tr>
                    </table>
                    <div className="guide_wrap">
                        <p>거절 사유를 입력하신 후 거절 버튼을 클릭해 주세요.</p><br />
                        <ul className="dot_msg">
                            <li>해당 회원의 이메일 주소로 가입 거절 안내 메일이 발송됩니다.</li>
                            <li>메일 발송 이후 <span className="red_txt">해당 회원의 기업 정보는 전체 삭제됩니다.</span></li>
                        </ul>
                    </div>
                    <div className="center_button_wrap">
                        <Button className="large outline" onClick={() => setVisible(false)}>button</Button>
                        <Button className="large" onClick={() => setVisible(false)}>button</Button>
                    </div>
                </Dialog>
            </ModalWrap>
            <ModalWrap className="guide_modal">
                <Dialog visible={visible === 6 ? true : false} size="medium" onCancel={() => setVisible(null)}>
                    <div className="modal_text">
                        <p className="sub_title">부제목 입력</p>
                        <p className="main_text">[처리 내용 입력] 하시겠습니까?</p>
                        <p className="small_sub_text">확인 시 처리할 <b>데이터 연계 안내</b> 또는 결과 안내 문구 입력</p>
                    </div>
                    <div className="guide_wrap">
                        <ul className="dot_msg">
                            <li>부가 안내 사항</li>
                            <li>부가 안내 관련 <span className="red_txt">주의사항</span> 입력</li>
                            <li>부가 안내 관련 <span className="blue_txt">강조할 내용</span> 입력</li>
                        </ul>
                    </div>
                    <Checkbox label=" 필요 시 체크박스 표시 영역" id="chk" />
                    <div className="button_wrap">
                        <Button type="button" className="large outline" onClick={() => setVisible(null)}>button</Button>
                        <Button type="button" className="large" onClick={() => setVisible(null)}>button</Button>
                    </div>
                </Dialog>
            </ModalWrap>
            <ModalWrap className="login_modal guide_modal">
                <Dialog
                    visible={visible === 7 ? true : false}
                    onCancel={() => setVisible()}
                >
                    <div className="modal_text top_area">
                        <p className="sub_text">부제목 입력</p>
                        <p className="main_text">[처리 내용 입력] 하시겠습니까?</p>
                        <p className="small_sub_text">확인 시 처리할 <b>데이터 연계 안내</b> 또는 결과 안내 문구 입력</p>
                    </div>
                    <div className="bottom_area">
                        <div className="input_wrap time_input">
                            <input type="number" placeholder="입력" />
                        </div>
                        <div className="guide_wrap">
                            <ul className="dot_msg">
                                <li>부가 안내 사항</li>
                                <li>부가 안내 관련 <span className="red_txt">주의사항</span> 입력</li>
                                <li>부가 안내 관련 <span className="blue_txt">강조할 내용</span> 입력</li>
                            </ul>
                        </div>
                    </div>
                    <div className="button_wrap">
                        <Button className="large outline">button</Button>
                        <Button className="large">button</Button>
                    </div>
                </Dialog>
            </ModalWrap>
            <ConfirmDialog
                visible={visible === 8 ? true : false}
                text={"판매 재개는 불가합니다. \n 상품의 판매를 중지하시겠습니까?"}
                onCancel={() => setVisible(null)}
                onConfirm={() => setVisible(null)}
            />
            <ConfirmDialog
                visible={visible === 9 ? true : false}
                text="김인스님의 가입을 승인하시겠습니까?"
                subText="(ID : inspien10)"
                confirmText="승인"
                onCancel={() => setVisible(null)}
                onConfirm={() => setVisible(null)}
            />
            <ConfirmDialog
                visible={visible === 10 ? true : false}
                text={"[EDI 워크스페이스 구축] 상품이 \n 판매중지 처리되었습니다."}
                onConfirm={() => setVisible(null)}
            />
        </div>
    )
}

const Example = ({ setTheme }) => {

    const tabLists = [
        {id: 0, title: "버튼"},
        {id: 1, title: "체크/라디오/셀렉트"},
        {id: 2, title: "input/날짜"},
        {id: 3, title: "other"},
        {id: 4, title: "팝업"}
    ]
    const [index, setIndex] = useState(0);

    return (
        <Wrapper className="inner">
            <div className="cont_box">
                <div className="tab_menu_wrap">
                    <ul className="tab_menu">
                        {tabLists.map((list) => {
                            return (
                                <li
                                    key={list.id}
                                    className={index === list.id ? "on" : null}
                                    onClick={() => setIndex(list.id)}><span>{list.title }</span></li>
                            )
                        })}
                    </ul>
                    <ul className="theme_color">
                        <li className="blue" onClick={() => setTheme(inspienTheme)}></li>
                        <li className="purple" onClick={() => setTheme(partnerTheme)}></li>
                        <li className="green" onClick={() => setTheme(customerTheme)}></li>
                    </ul>
                </div>
                {index === 0 ? <ButtonWrap setTheme={setTheme} /> : null}
                {index === 1 ? <BoxWrap setTheme={setTheme} /> : null}
                {index === 2 ? <InputWrap setTheme={setTheme} /> : null}
                {index === 3 ? <OtherWrap setTheme={setTheme} /> : null}
                {index === 4 ? <PopupWrap setTheme={setTheme} /> : null}
            </div>
            {/*<Table />*/}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    .tab_menu_wrap {
        position: relative;
    }
    .theme_color {
        display: flex;
        position: absolute;
        right: 0;
        bottom: 1rem;
        li {
            width: 4rem;
            height: 4rem;
            margin-left: 1rem;
            border-radius: 50%;
            cursor: pointer;
            &.blue {
                background-color: #4F63E3;
            }
            &.purple {
                background-color: #9963F7;
            }
            &.green {
                background-color: #00BF85;
            }
        }
    }
    .data_tb {
        margin-bottom: 5rem;
        td {
            text-align: left;
            &:first-child {
                .size {
                    color: #222;
                    font-size: 1.8rem;
                    font-weight: 600;
                }
                p:not(.size) {
                    color: #999;
                }       
            }
            p {
                margin-top: 0.7rem;
                margin-bottom: 0.7rem;
            }
        }
        &.select td {
            height: 20rem;
            vertical-align: top;
        }
    }
    tr.bg td {
        background-color: ${(props) => props.theme.main1};
        color: ${(props) => props.theme.white1};
    }
    .label_ico {
        ul {
            display: flex;
            margin-bottom: 2rem;
            li {
                margin-right: 1rem;
            }
        }
    }
    .popup_list {
        display: flex;
        flex-wrap: wrap;
        li {
            width: 25%;
            margin: 1.5rem 0;
            p {
                font-size: 1.8rem;
                font-weight: 500;
            }
            img {
                margin-top: 1rem;
                border-radius: 1rem;
                cursor: pointer;
                &:hover {
                    box-shadow: 0 0 5px rgba(0,0,0,0.1);
                }
            }
            & + li {
                padding: 0 1.5rem;
            }
        }
    }
`

export default Example;