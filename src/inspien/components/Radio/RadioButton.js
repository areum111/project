import React from 'react';
import styled, { css } from 'styled-components';

const sizes = {
    large: {
        fontSize: '1.8rem',
        fontWeight: '700'
    },
    medium: {
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

const RadioBox = styled.div`
    display: inline-flex;
    align-items: center;
    
    &.radio_wrap:not(:last-child) {
        margin-right: 3.4rem;
    }

    & input[type="radio"] {
        position: relative;
        flex: 0 0 2rem;
        width: 2rem;
        height: 2rem;
        clip: rect(0, 0, 0, 0);
        border: 2px solid ${(props) => props.theme.gray2};
        border-radius: 50%;
        outline: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        -ms-appearance: none;
        &::after {
            content: '';
            position: absolute;
            display: inline-block;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 1rem;
            height: 1rem;
            box-sizing: border-box;
            background-color: ${(props) => props.theme.white1};
            border-radius: 50%;
        }
        &:checked {
            border-color: ${(props) => props.theme.main1};
        }
        &:checked::after{
            background-color: ${(props) => props.theme.main1};
        }
        &:disabled {
            border-color: ${(props) => props.theme.gray2};
        }
        &:disabled::after{
            background-color: ${(props) => props.theme.gray2};
        }
        
        & + label {
            display: inline-flex;
            align-items: center;
            position: relative;
            padding-left: 0.8rem;
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

function RadioButton({ name, id, size, checked, onChange, label, disabled }) {

    return (
        <RadioBox size={size} className="radio_wrap">
            <input
                type="radio"
                name={name}
                id={id}
                defaultChecked={checked}
                onChange={onChange}
                disabled={disabled}
            />
            <label htmlFor={id}>{label}</label>
        </RadioBox>
    )
}

RadioButton.defaultProps = {
    size: 'medium',
    disabled: false,
    checked: false,
}

export default RadioButton;