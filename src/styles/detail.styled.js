import styled from "styled-components";

export const Detail = styled.div`
    padding-top: 15rem;
    .top_info {
        .inner {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            padding-bottom: 7rem;
        }
        .thumb_img {
            overflow: hidden;
            width: 40%;
            border: 1px solid ${(props) => props.theme.gray2};
            border-radius: 1.5rem;
        }
        .info {
            width: 50%;
            .sub_title {
                font-size: 2rem;
                color: ${(props) => props.theme.black2};
            }
            h2 {
                font-size: 5rem;
                font-weight: 700;
            }
            .chart {
                display: flex;
                align-items: flex-end;
                margin: 2rem 0;
                p {
                    margin-right: 0.5rem;
                    margin-bottom: 0.3rem;
                    font-size: 1.8rem;
                }
            }
            .description {
                margin-top: 2.5rem;
                font-size: 1.8rem;
                word-break: keep-all;
            }
            .tag {
                margin-top: 3rem;
                span {
                    display: inline-block;
                    margin: 0.5rem 1rem 0.5rem 0;
                    padding: 0.3rem 1rem;
                    border-radius: 1em;
                    border: 1px solid ${(props) => props.theme.black2};
                    font-size: 1.4rem;
                    color: ${(props) => props.theme.black2};
                }
            }
        }
    }
    .bottom_info {
        padding: 7rem 0;
        background: #FCF4F1;
        &.dark {
            h3 {
                color: #Fff;
            }
            .button_wrap a {
                background: #Fff;
                color: #222;
                &:hover {
                    box-shadow: 1px 2px 15px 1px rgba(256,256,256,0.3)
                }
            }
        }
        h3 {
            margin-bottom: -1rem;
            font-size: 3rem;
            font-weight: 600;
            color: #0D0D0D;
        }
        .img_wrap {
            display: flex;
            flex-wrap: wrap;
            width: calc(100% + 4rem);
            margin-left: -2rem;
            & + h3 {
                margin-top: 3rem;
            }
        }
        ul {
            width: calc((100% - 16rem) / 4);
            margin: 0 2rem;
            li {
                overflow: hidden;
                margin: 4rem 0;
                border-radius: 1rem;
            }
        }
    }
    .button_wrap {
        display: flex;
        justify-content: center;
        margin-top: 5rem;
        a {
            display: inline-block;
            padding: 1rem 5rem;
            font-size: 2rem;
            font-weight: 500;
            background: #0D0D0D;
            border-radius: 4rem;
            color: #fff;
            transition: .3s;
            &:hover {
                box-shadow: 1px 2px 15px 1px rgba(0,0,0,0.2);
            }
        }
    }
    @media screen and (max-width:1023px) {
        
    }
    @media screen and (max-width:767px) {
        padding-top: 8rem;
        .top_info {
            .inner {
                flex-direction: column;
                padding-bottom: 5rem;
            }
            .thumb_img {
                width: 100%;
            }
            .info {
                width: 100%;
                margin-top: 2rem;
                .sub_title {
                    font-size: 1.6rem;
                }
                h2 {
                    font-size: 2.5rem;
                    font-weight: 600;
                }
                .chart {
                    margin: 1.5rem 0;
                }
                .description {
                    font-size: 1.4rem;
                }
                .tag {
                    margin-top: 2rem;
                    span {
                        border-radius: 1.2em;
                        font-size: 1.2rem;
                    }
                }
            }
        }
        .bottom_info {
            padding: 4rem 0;
            h3 {
                font-size: 2.5rem;
            }
            .img_wrap {
                width: calc(100% + 2rem);
                margin-left: -1rem;
                & + h3 {
                    margin-top: 4rem;
                }
            }
            ul {
                width: calc((100% - 4rem) / 2);
                margin: 0 1rem -2rem 1rem;
                li {
                    margin: 2rem 0;
                }
            }
        }
        .button_wrap {
            a {
                padding: 0.8rem 3rem;
                font-size: 1.4rem;
                font-weight: 500;
                transition: none;
                &:hover {
                    box-shadow: none;
                }
            }
        }
    }
`