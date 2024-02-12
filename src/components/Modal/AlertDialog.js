import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import Button from '../Button/Button';

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
        transform: translateX(-50%) translateY(200px);
    }
    to {
        transform: translateX(-50%) translateY(0px);
    }
`;

const slideDown = keyframes`
    from {
        transform: translateX(-50%) translateY(0);
    }
    to {
        transform: translateX(-50%) translateY(200px);
    }
`;

const DialogBlock = styled.div`
    position: fixed;
    overflow-y: hidden;
    top: 8rem;
    left: 50%;
    transform: translateX(-50%);
    width: 48rem;
    height: auto;
    padding: 4rem 4rem 2rem;
    background: white;
    border-radius: 10px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
    animation-duration: 0.25s;
    animation-timing-function: ease-out;
    animation-name: ${ slideUp };
    animation-fill-mode: forwards;
    text-align: center;
    
    & p {
        color: ${(props) => props.theme.black2};
        font-size: 1.6rem;
    }

    ${ props => props.disappear && css`
        display: none;
    ` }
    
`;

const ButtonWrap = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2.8rem;
`

function AlertDialog({ children, confirmText, visible, onConfirm }) {
    const [ animate, setAnimate ]           = useState(false);
    const [ localVisible, setLocalVisible ] = useState(visible);

    useEffect(() => {
        // visible true -> flase
        if (localVisible && !visible) {
            setAnimate(true);
            setTimeout(() => setAnimate(false), 250);
        }
        setLocalVisible(visible);
    }, [ localVisible, visible ]);

    if (!localVisible && !animate) return null;

    return (<DialogBlock disappear={ !visible }>
            { children }
            <ButtonWrap>
                <Button onClick={ onConfirm } className="outline large">
                    { confirmText }
                </Button>
            </ButtonWrap>
        </DialogBlock>);
}

AlertDialog.defaultProps = {
    confirmText: '확인'
}

export default AlertDialog;