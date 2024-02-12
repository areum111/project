import React from 'react';
import styled, { css } from 'styled-components';
import Select from 'react-select';
import select_arrow from 'images/ico/ico_down_arr_wh.svg';
import select_arrow_close from 'images/ico/ico_down_arr.svg';
import LanIco from 'images/ico/ico_language.svg';
import checkIco from 'images/ico/ico_checked.svg';

const SelectContainer = styled.div`
    display: inline-block;

    & > div {
        width: 100%;
        height: 100%;
        
        &.error {
            & .select__control {
                border-color: ${(props) => props.theme.warn1};
            }
        }

        & .select__control {
            min-height: 2.8rem;
            width: 11rem;
            padding: 0 1rem 0 2.4rem;
            background-color: transparent;
            border: none;
            box-sizing: border-box;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            outline: none !important;
            box-shadow: none;
            cursor: pointer;
            
            background-image: url(${LanIco});
            background-repeat: no-repeat;
            background-position: left center;
            

            // 셀렉트 박스 텍스트
            & .select__value-container {
                padding: 0 1.2rem 0 0;
                text-align: left;
                
                & .select__placeholder {
                    margin: 0;
                    color: ${(props) => props.theme.gray3};
                }
            }
                
            & .select__single-value {
                margin: 0;
                color: ${(props) => props.theme.white1};
            }

            & .select__input-container {
                padding: 0;
                margin: 0;
                color: #282B39;

                & input {
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
                    background: transparent url(${ select_arrow }) no-repeat center;
                    transition: .3s;

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
                border-bottom: none;
                border-color: ${(props) => props.theme.gray3};

                & .select__indicator {
                    transform: rotate(180deg);
                        //background:#fff url(${ select_arrow_close }) no-repeat right center;
                }
            }
        }

        // 옵션리스트
        & .select__menu {
            top: 2.8rem;
            left: 0;
            width: 9.5rem;
            overflow: hidden;
            margin: 0;
            padding: 0.4rem 0;
            border-radius: 1.2rem;
            box-shadow: none;
            background-color: ${(props) => props.theme.main5};
            border-top: none;
            text-align: left;
            
            & .select__menu-list {
                width: 100%;
                padding: 0;
            }

            & .select__option {
                width: 100%;
                padding: 0.4rem 1.6rem;
                color: ${(props) => props.theme.white1};
                font-size: 1.2rem;

                &.select__option--is-selected {
                    background: url(${checkIco}) no-repeat right 1rem center;
                }

                &.select__option--is-focused {
                    background-color: ${(props) => props.theme.main6};
                }
            }
        }
    }
`

function SelectBox({ options, onChange, isDisabled, value, width, className }) {

    return (
        <SelectContainer style={ { width: width } }>
            <Select
                value={ value }
                options={ options }
                onChange={ onChange }
                className={className}
                classNamePrefix="select"
                isDisabled={isDisabled}
            />
        </SelectContainer>
    );
};

export default SelectBox;