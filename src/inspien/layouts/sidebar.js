import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import LogoImg from "../images/logo.svg";
import dashboardIco from "../images/ico/ico_dashboard.svg";
import userIco from "../images/ico/ico_user.svg";
import storeIco from "../images/ico/ico_store.svg";
import receiptIco from "../images/ico/ico_receipt.svg";
import supportIco from "../images/ico/ico_support.svg";

const Sidebar = () => {

    const menuLists = [
        {
            id: 1,
            image: dashboardIco,
            name: "대시보드",
            depth2: [
                {
                    id: 1,
                    name: "대시보드",
                    url: "/dashboard/dashboard_inspien1"
                }
            ]
        },
        {
            id: 2,
            image: userIco,
            name: "사용자",
            depth2: [
                {
                    id: 1,
                    name: "가입 승인 관리",
                    url: "/user/user1"
                },
                {
                    id: 2,
                    name: "그룹 관리",
                    url: "/user/user3"
                }
            ]
        },
        {
            id: 3,
            image: storeIco,
            name: "상점",
            depth2: [
                {
                    id: 1,
                    name: "상점",
                    url: "/store/store1"
                }
            ]
        },
        {
            id: 4,
            image: receiptIco,
            name: "정산",
            depth2: [
                {
                    id: 1,
                    name: "인보이스 관리",
                    url: "/receipt/invoice"
                },
                {
                    id: 2,
                    name: "판매 실적 관리",
                    url: "/receipt/sales"
                },
                {
                    id: 3,
                    name: "판매 내역 관리",
                    url: "/receipt/sales_history"
                }
            ]
        },
        {
            id: 5,
            image: supportIco,
            name: "서비스 지원",
            depth2: [
                {
                    id: 1,
                    name: "Q&A",
                    url: "/qna/list"
                },
                {
                    id: 2,
                    name: "고객 관리",
                    url: "/customer/list"
                },
                {
                    id: 3,
                    name: "사용량 조회",
                    url: "/service/usage"
                }
            ]
        },
    ]

    const [isMouseEnter, setMouseEnter] = useState("");
    const [openSubmenu, setOpenSubmenu] = useState(false);


    return (
        <Container>
            <div className="logo"><Link to="/dashboard/dashboard_inspien1"><h1><img src={LogoImg} alt="back office" /></h1></Link></div>
            <ul>
                {menuLists.map((list, index) => {
                    return (
                        <MenuList
                            key={list.id}
                            data-no={list.id}
                            onMouseEnter={() => setMouseEnter(list.id)}
                            onMouseLeave={() => setMouseEnter("")}
                            >
                            <p
                                id={list.id}
                                style={{backgroundImage: `url(${list.image})`}}
                            >{list.name}</p>
                            <div className={openSubmenu ? "submenu open" : "submenu"}>
                                <ul>
                                    {list.depth2 && list.depth2.map((sublist) => {
                                        return (
                                            <li key={sublist.id}><Link to={sublist.url}>{ sublist.name }</Link></li>
                                        )
                                    })}
                                    {/*<li><Link to="/">2depth</Link></li>*/}
                                    {/*<li><Link to="/">2depth</Link></li>*/}
                                    {/*<li><Link to="/">2depth</Link></li>*/}
                                </ul>
                            </div>
                        </MenuList>
                    )
                })}
            </ul>
        </Container>
    );
}

const MenuList = styled.li`
    padding: 1.8rem 0;
    transition: 0.3s;
    & > p {
        padding-top: 2.8rem;
        background-repeat: no-repeat;
        background-size: 2.8rem auto;
        background-position: top center;
        text-align: center;
        line-height: 1.5;
        font-size: 1.2rem;
        letter-spacing: -0.03em;
        font-weight: 500;
        cursor: pointer;
    }
    &[data-no="1"]:hover > p {
        background-image: url(${ (props) => props.theme.menuImg1 }) !important;
    }

    &[data-no="2"]:hover > p {
        background-image: url(${ (props) => props.theme.menuImg2 }) !important;
    }

    &[data-no="3"]:hover > p {
        background-image: url(${ (props) => props.theme.menuImg3 }) !important;
    }

    &[data-no="4"]:hover > p {
        background-image: url(${ (props) => props.theme.menuImg4 }) !important;
    }

    &[data-no="5"]:hover p {
        background-image: url(${ (props) => props.theme.menuImg5 }) !important;
    }
    &:hover {
        & > p {
            color: ${ (props) => props.theme.main1 };
            font-weight: 700;   
        }
        .submenu {
            display: block;
        }
    }
    .submenu {
        display: none;
        position: fixed;
        left: 8rem;
        top: 0;
        height: 100%;
        width: 20rem;
        padding-top: 10.7rem;
        background-color: ${(props) => props.theme.main7};
        &.open {
            display: block;
        }
        & li {
            & a {
                display: block;
                padding: 1.6rem 2rem;
                font-size: 1.6rem;
                font-weight: 500;
                color: ${(props) => props.theme.white1};
            }
            &:hover {
                background-color: ${(props) => props.theme.main2};
            }
        }
    }
    & + li{
        //margin-top: 3.5rem;
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    justify-items: center;
    min-height: 100vh;
    width: 8rem;
    background-color: ${(props) => props.theme.white1};
    z-index: 9001;
    
    .logo {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 8rem;
        width: 100%;
        h1 {
            img {
                width: 5.8rem;
                height: 5.8rem;
            }
            color: ${(props) => props.theme.black1};
        }   
    }
    
    & > ul {
        margin-top: 2.7rem;
    }
    .submenu_toggle {
        position: absolute;
        bottom: 2.2rem;
        right: 1.2rem;
        cursor: pointer;
    }
`;

export default Sidebar;