import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { MdOutlineClose } from 'react-icons/md';

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

const dialogsizes = {
    large    : {
        width: '87.2rem'
    },
    ml: {
        width: '70rem'
    },
    medium: {
        width: '56rem'
    },
    sm: {
        width: '52rem'
    },
    small : {
        width: '48rem',
    }
}

const dialogSizeStyle = css`
    /* 크기 */
    ${ ({ $dialogsize }) => css`
        width: ${ dialogsizes[$dialogsize].width };
        height: ${ dialogsizes[$dialogsize].height };

        @media only screen and (max-width: 960px) {
            max-width: ${ dialogsizes[$dialogsize].width };
        }
    ` }
`

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
    height: auto;
    background: white;
    border-radius: 2rem;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
    ${ dialogSizeStyle };

    .title_wrap {
        display: flex;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 7.2rem;
        line-height: 7.2rem;
        padding: 0 4rem;
        z-index: 99;

        h3 {
            font-size: 1.8rem;
            font-weight: 700;
        }
        
        .close {
            position: absolute;
            top: 2.4rem;
            right: 4rem;
        }
    }
    

    .dialog_inner {
        max-height: 100%;
        padding: 7.2rem 3.6rem 4rem 3.6rem;

        .modal_text {
            text-align: center;
            & > img {
                margin-bottom: 2rem;
            }
            .main_text {
                font-size: 2rem;
                font-weight: 700;
            }
            .sub_text {
                margin-top: 1.6rem;
                font-size: 1.6rem;
                color: ${(props) => props.theme.gray4};
                & b {
                    font-weight: 500;
                    color: ${(props) => props.theme.black2};
                }
            }
            .small_sub_text {
                margin-top: 1.2rem;
                text-align: center;
                font-size: 1.2rem;
                b {
                    color: ${(props) => props.theme.black1};
                    font-weight: 500;
                }
            }
            strong {
                color: ${(props) => props.theme.main1};
                font-weight: 500;
            }
            button {
                margin-top: 2.8rem;
            }
        }

        .button_wrap {
            display: flex;
            justify-content: center;
            & button + button {
                margin-left: 1.6rem;
            }
        }
    }

    animation-duration: 0.25s;
    animation-timing-function: ease-out;
    animation-name: ${ slideUp };
    animation-fill-mode: forwards;

    ${ props => props.disappear && css`
        animation-name: ${ slideDown }
    ` }
`;

function Dialog({ title, children, visible, onCancel, size, className, scroll }) {
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

    return (
        <DarkBackground $disappear={ visible ? false : undefined } className={className}>
            <DialogBlock $disappear={ visible ? false: undefined } $dialogsize={ size } className="dialog_wrap">
                <div className="title_wrap">
                    {title && <h3>{title}</h3>}
                    <button type="button" className="close" onClick={onCancel}><MdOutlineClose size={24} /></button>
                </div>
                <div className={scroll ? "dialog_inner custom_scroll" : "dialog_inner"}>
                    { children }
                </div>
            </DialogBlock>
        </DarkBackground>
    );
}

Dialog.defaultProps = {
    cancelText: '취소',
    confirmText: '저장',
    size: 'medium'
}

export default Dialog;