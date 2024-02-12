import React from "react";
import styled, { css } from "styled-components";
import { HiPlusSm } from "react-icons/hi"

const StyledButton = styled.button`
    /* 공통 스타일 */
    display: inline-flex;
    flex: 0 0 auto;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.main1};
    outline: none;
    border: 1px solid ${(props) => props.theme.main1};
    color: ${(props) => props.theme.white1};
    cursor: pointer;
    box-sizing: border-box;
    font-weight: 500;
    white-space: nowrap;
    &:hover {
        box-shadow: 0 1px 3px rgba(0,0,0,0.25);
        border-color: ${(props) => props.theme.main3};
        background-color: ${(props) => props.theme.main3};
        & .ico_plus {
            & svg {
                color: ${(props) => props.theme.main3};
            }
        }
    }
    &.add {
        & .ico_plus {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin-right: 0.8rem;
            background-color: ${(props) => props.theme.white1};
            border-radius: 50%;
            & svg {
                color: ${(props) => props.theme.main1};
            }
        }
    }
    &.large {
        min-width: 10.4rem;
        height: 4.8rem;
        padding: 0.8rem 3.2rem; 
        border-radius: 2.4rem;
        font-size: 2rem;
        font-weight: 500;
        line-height: 1.5;
        &.add {
            padding: 0 1.6rem;
            & .ico_plus {
                width: 2.8rem;
                height: 2.8rem;
                margin-right: 0.8rem;
            }
        }
    }
    &.medium {
        min-width: 8rem;
        height: 3.6rem;
        padding: 0.6rem 2.4rem;
        border-radius: 2rem;
        font-size: 1.6rem;
        font-weight: 500;
        line-height: 1.5;
        &.add {
            padding: 0 1.6rem;
            & .ico_plus {
                width: 2rem;
                height: 2rem;
                margin-right: 0.4rem;
            }
        }
    }
    &.small {
        min-width: 2.8rem;
        height: 2.8rem;
        padding: 0.4rem 1.2rem;
        border-radius: 1.8rem;
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 1.5;
        &.add {
            & .ico_plus {
                width: 1.6rem;
                height: 1.6rem;
                margin-right: 0.4rem;
            }
        }
    }
    &.outline {
        background-color: ${(props) => props.theme.white1};
        color: ${(props) => props.theme.main1};
        &:hover {
            background-color: ${(props) => props.theme.main4};
            & .ico_plus {
                & svg {
                    color: ${(props) => props.theme.main4};   
                }
            }
        }
        & .ico_plus {
            background-color: ${(props) => props.theme.main1};
            & svg {
                color: ${(props) => props.theme.white1};
            }
        }
        &.disabled {
            background-color: ${(props) => props.theme.white1};
            border-color: ${(props) => props.theme.gray2};
            color: ${(props) => props.theme.gray2};
            & .ico_plus {
                background-color: ${(props) => props.theme.gray2};
                & svg {
                    color: ${(props) => props.theme.white1};
                }
            }
        }
        &.black {
            background-color: ${(props) => props.theme.white1};
            border-color: ${(props) => props.theme.black2};
            color: ${(props) => props.theme.black2};
        }
    }
    &.text_only {
        background-color: transparent;
        border: none;
        color: ${(props) => props.theme.main1};
        &:hover {
            background-color: ${(props) => props.theme.gray1};
            box-shadow: none;
            & .ico_plus {
                & svg {
                    color: ${(props) => props.theme.gray1};
                }
            }
        }
        & .ico_plus {
            background-color: ${(props) => props.theme.main1};
            & svg {
                color: ${(props) => props.theme.white1};
            }
        }
        &.disabled {
            background-color: transparent;
            color: ${(props) => props.theme.gray2};
            &:hover {
                box-shadow: none;
            }
            & .ico_plus {
                background-color: ${(props) => props.theme.gray2};
                & svg {
                    color: ${(props) => props.theme.white1};
                }
            }
        }
    }
    
    &.gray {
        background-color: ${(props) => props.theme.white1};
        border-color: ${(props) => props.theme.gray2};
        color: ${(props) => props.theme.gray4};
    }

    &.dark_gray {
        background-color: ${(props) => props.theme.gray4};
        border-color: ${(props) => props.theme.gray4};
        color: ${(props) => props.theme.white1};
    }

    &.full {
        width: 100%;
        height: 4.8rem;
        background-color: ${(props) => props.theme.main1};
        border: 1px solid ${(props) => props.theme.main1};
        border-radius: 2.4rem;
        color: ${(props) => props.theme.white1};
        font-size: 2rem;
        font-weight: 500;
        line-height: 1.5;
        &.point {
            background-color: ${(props) => props.theme.warn1};
            border-color: ${(props) => props.theme.warn1};
        }
        &.outline {
            background-color: ${(props) => props.theme.white1};
            color: ${(props) => props.theme.main1};
        }
    }
    &.disabled {
        background-color: ${(props) => props.theme.gray2};
        border-color: ${(props) => props.theme.gray2};
        color: ${(props) => props.theme.white1};
        cursor: default;
        &:hover {
            box-shadow: none;
        }
        & .ico_plus {
            & svg {
                color: ${(props) => props.theme.gray2};
            }
        }
    }
`;

function Button({ className, children, type, onClick, addicon }) {
    return (
        <StyledButton
            type={type}
            className={addicon ? "add " + className : className}
            onClick={onClick}
            $addicon={addicon}
        >
            {addicon ? <span className="ico_plus"><HiPlusSm /></span> : ''}
            {children}
        </StyledButton>
    );
}

Button.defaultProps = {
    type: "button",
};

export default Button;