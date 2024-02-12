import React from 'react';
import styled, { css } from 'styled-components';
import Select from 'react-select';
import select_arrow from 'images/ico/ico_up_arr.svg';
import select_arrow_close from 'images/ico/ico_down_arr.svg';
import select_arrow_close_wh from 'images/ico/ico_down_arr_wh.svg';

const sizes = {
    large    : {
        width: "24rem",
        height: "4.8rem",
        borderRadius: "0.4rem",
        paddingLeft: "2rem",
        paddingRight: "1.2rem"
    },
    medium: {
        width: "24rem",
        height: "3.6rem",
        borderRadius: "0.4rem",
        paddingLeft: "2rem",
        paddingRight: "1.2rem"
    },
    small : {
        width: "11.6rem",
        height: "2.8rem",
        borderRadius: "1.5rem",
        paddingLeft: "1.6rem",
        paddingRight: "0.8rem"
    }
}

const sizeStyles = css`
    /* 크기 */
    ${ ({ size }) => css`
        max-width: ${ sizes[size].width };
        height: ${ sizes[size].height };
    ` }
`

const radiusStyles = css`
    /* 크기 */
    ${ ({ size }) => css`
        border-radius: ${ sizes[size].borderRadius };
        padding-left: ${ sizes[size].paddingLeft };
        padding-right: ${ sizes[size].paddingRight };
    ` }
`

const optionStyles = css`
    /* 크기 */
    ${ ({ size }) => css`
        top: ${ sizes[size].height };
        border-radius: ${ sizes[size].borderRadius };
    ` }
`

const optionListStyles = css`
    /* 크기 */
    ${ ({ size }) => css`
        line-height: ${ sizes[size].height };
        padding-left: ${ sizes[size].paddingLeft };
        padding-right: ${ sizes[size].paddingLeft };
    ` }
`

const SelectContainer = styled.div`
    ${ sizeStyles };

    & > div {
        width: 100%;
        height: 100%;
        
        &.select--is-disabled {
            & .select__control {
                background-color: ${(props) => props.theme.gray1};   
            }
            
            & .select__control {
                & .select__single-value {
                    color: ${(props) => props.theme.gray3};
                }   
            }
            
            & .select__indicator {
                opacity: 0.3;
            }
        }
        
        &.error {
            & .select__control {
                border-color: ${(props) => props.theme.warn1};
            }
        }
        
        &.no_border {
            & .select__control {
                border: none !important;
            }
            & .select__menu {
                border-radius: 0.4rem;
            }
        }

        & .select__control {
            min-height: 100%;
            padding: 0 1.2rem 0 2rem;
            background: transparent;
            border: 1px solid ${(props) => props.theme.gray2};
            background: ${(props) => props.theme.white1};
            box-sizing: border-box;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            outline: none !important;
            box-shadow: none;
            ${radiusStyles}
            &:hover {
                border: 1px solid ${(props) => props.theme.gray2};
            }

            // 셀렉트 박스 텍스트
            & .select__value-container {
                padding: 0;
                text-align: left;
                
                & .select__placeholder {
                    margin: 0;
                    color: ${(props) => props.theme.gray3};
                }
                
                &[class*="has-value"] + .select__indicators .select__indicator {
                    opacity: 1;
                }
            }
                
            & .select__single-value {
                margin: 0;
                color: ${(props) => props.theme.black1};
                font-size: 1.4rem;
            }

            & .select__input-container {
                dipslay: none;
                padding: 0;
                margin: 0;
                color: ${(props) => props.theme.black1};

                & .select__input {
                    color: transparent !important;
                    text-shadow: 0 0 0 #2196f3;
                    width: 1px;
                    height: 1px;

                    &:focus {
                        outline: none;
          
                    }
                }

                &::after {
                    content: none;
                }
            }

            // 셀렉트 박스 화살표
            & .select__indicators {
                padding-right: 0;

                & .select__indicator {
                    display: inline-block;
                    padding: 0;
                    width: 2rem;
                    height: 2rem;
                    transition: .3s;
                    background: transparent url(${ select_arrow }) no-repeat center;
                    opacity: 0.4;

                    & svg {
                        display: none;
                    }
                }

                & .select__indicator-separator {
                    display: none;
                }
            }

            &.select__control--menu-is-open {
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
                border-color: ${(props) => props.theme.gray3};
                border-bottom-color: transparent;

                & .select__indicator {
                    transform: rotate(180deg);
                        //background:#fff url(${ select_arrow_close }) no-repeat right center;
                }
            }
        }

        // 옵션리스트
        & .select__menu {
            ${ optionStyles };
            overflow: hidden;
            margin: 0;
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            box-shadow: none;
            border: 1px solid ${(props) => props.theme.gray3};
            border-top: none;
            text-align: left;

            & .select__option {
                padding-top: 0;
                padding-bottom: 0;
                color: ${(props) => props.theme.black1};
                font-size: 1.4rem;
                ${optionListStyles};

                &.select__option--is-selected {
                    background: none;
                    color: ${(props) => props.theme.black1};

                    &:hover {
                        color: ${(props) => props.theme.white1};
                    }
                }

                &.select__option--is-focused {
                    background: ${(props) => props.theme.main1};
                    color: ${(props) => props.theme.white1};
                }
            }

            & [class*="MenuList"] {
                max-height: 19.2rem;
                padding: 0;
                &::-webkit-scrollbar {
                    position: absolute;
                    right: 0;
                    top: 0;
                    width: 5px;
                    height: 5px;
                    border-radius: 15px;
                    cursor: pointer;
                }
                &::-webkit-scrollbar-thumb {
                    background-color: #E0E0E0;
                }
                &::-webkit-scrollbar-track {
                    background-color: transparent;
                }
            }
        }

        &.outline {
            & .select__single-value {
                color: ${(props) => props.theme.white1};
            }
            & .select__control .select__indicators .select__indicator {
                background-image: url(${select_arrow_close_wh});
            }
        }

        &.no_border .select__menu {
            border-top: 1px solid ${(props) => props.theme.gray3};
            border-top-left-radius: 0.4rem;
            border-top-right-radius: 0.4rem;
        }
    }
`

function SelectBox({ options, onChange, isDisabled, value, size, className, open }) {

    return (
        <SelectContainer size={ size } className="select_wrap">
            <Select
                value={ value }
                options={ options }
                onChange={ onChange }
                className={className}
                classNamePrefix="select"
                isDisabled={isDisabled}
                placeholder="선택"
                defaultMenuIsOpen={open ? true : false}
            />
        </SelectContainer>
    );
};

SelectBox.defaultProps = {
    size: "medium"
}

export default SelectBox;