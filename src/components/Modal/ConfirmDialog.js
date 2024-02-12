import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import Button from "../Button/Button";

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const fadeOut = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;

const slideUp = keyframes`
    from {
        transform: translateY(200px);
    }
    to {
        transform: translateY(0px);
    }
`;

const slideDown = keyframes`
    from {
        transform: translateY(0);
    }
    to {
        transform: translateY(200px);
    }
`;

const DarkBackground = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
    z-index: 9990;
    animation-duration: 0.25s;
    animation-timing-function: ease-out;
    animation-name: ${ fadeIn };
    animation-fill-mode: forwards;

    ${ props => props.disappear && css`
        animation-name: ${ fadeOut }
    ` }
`;

const DialogBlock = styled.div`
    position: relative;
    overflow-y: hidden;
    max-height: 80vh;
    width: 48rem;
    height: auto;
    padding: 4rem 3rem;
    background: white;
    border-radius: 2rem;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
    animation-duration: 0.25s;
    animation-timing-function: ease-out;
    animation-name: ${ slideUp };
    animation-fill-mode: forwards;

    & > p {
        font-size: 2rem;
        font-weight: 500;
        text-align: center;
        white-space: pre-wrap;
    }

    & .button_wrap {
        display: flex;
        justify-content: center;
        margin-top: 2.8rem;
        & button + button {
            margin-left: 1.6rem;
        }
    }

    ${ props => props.disappear && css`
        animation-name: ${ slideDown }
    ` }
    
    .sub_text {
        margin-top: 1.6rem;
        font-size: 1.6rem;
        font-weight: 400;
    }
`;

function Dialog({ text, subText, children, visible, onCancel, onConfirm, confirmText }) {
    const [ animate, setAnimate ]           = useState(false);
    const [ localVisible, setLocalVisible ] = useState(visible);

    useEffect(() => {
        // visible true -> false
        if (localVisible && !visible) {
            setAnimate(true);
            setTimeout(() => setAnimate(false), 250);
        }
        setLocalVisible(visible);
    }, [ localVisible, visible ]);

    if (!localVisible && !animate) return null;

    return (<DarkBackground $disappear={ !visible }>
            <DialogBlock $disappear={ !visible } className="dialog_wrap">
                {text && <p>{ text }</p>}
                {subText && <p className="sub_text">{ subText }</p>}
                {children}
                <div className="button_wrap">
                    {onCancel && <Button className="outline large" onClick={onCancel}>취소</Button>}
                    <Button className="large" onClick={onConfirm}>{confirmText}</Button>
                </div>
            </DialogBlock>
        </DarkBackground>);
}

Dialog.defaultProps = {
    confirmText: '확인',
}

export default Dialog;