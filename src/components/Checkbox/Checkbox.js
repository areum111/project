import React from 'react';
import styled, { css } from 'styled-components';
import checkIco from 'images/ico/ico_checked.svg';


const sizes = {
    large: {
        lineHeight: '2.8rem',
        fontSize: '1.8rem',
        fontWeight: '700'
    },
    medium: {
        lineHeight: '2.4rem',
        fontSize: '1.6rem',
        fontWeight: '400'
    }
}

const fontSizeStyles = css`
    ${ ({ size }) => css`
        font-size: ${ sizes[size].fontSize };
        font-weight: ${ sizes[size].fontWeight };
    ` }
`

const CheckboxWrapper = styled.div`
    display: inline-flex;
    align-items: center;

    & input[type="checkbox"] {
        flex: 0 0 2rem;
        width: 2rem;
        height: 2rem;
        clip: rect(0, 0, 0, 0);
        border: 0;
        outline: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        -ms-appearance: none;
        &::after {
            content: '';
            display: inline-block;
            width: 100%;
            height: 100%;
            text-align: center;
            border-radius: 2px;
            border: 2px solid ${(props) => props.theme.gray2};
            background-color: ${(props) => props.theme.white1};
            background-repeat: no-repeat;
            background-position: center;
            box-sizing: border-box;
        }
        &:disabled::after{
            background-color: ${(props) => props.theme.gray2};
            background-image: url(${ checkIco });
        }
        &:checked::after{
            background-color: ${(props) => props.theme.main1};
            background-image: url(${ checkIco });
            border-color: ${(props) => props.theme.main1};
        }
        &.error::after {
            border-color: ${(props) => props.theme.warn1};
        }
        & + label {
            display: inline-flex;
            flex: 1 1 auto;
            align-items: center;
            position: relative;
            padding-left: 0.8rem;
            margin-bottom: 0.2rem;
            cursor: pointer;
            line-height: 1.5;
            color: ${(props) => props.theme.black2};
            ${ fontSizeStyles };
        }

        &:disabled + label {
            color: ${(props) => props.theme.gray2};
        }
    }

    & input[type="checkbox"]:checked + label {
        color: ${(props) => props.theme.black1};
    }
`

function Checkbox({ id, checked, onChange, label, size, disabled, error }) {

    return (
        <CheckboxWrapper className="check_wrap" size={size}>
            <input
                type="checkbox"
                id={id}
                defaultChecked={checked}
                onChange={onChange}
                disabled={disabled}
                className={error ? "error" : ""}
            />
            {label && <label htmlFor={id}>{ label }</label>}
        </CheckboxWrapper>
    )
}

Checkbox.defaultProps = {
    size: 'medium',
    disabled: false,
    error: false
}

export default Checkbox;
