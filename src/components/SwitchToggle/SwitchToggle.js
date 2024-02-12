import React from 'react';
import styled from 'styled-components';

const SwitchToggleContainer = styled.div`
    position: relative;
    display: inline-flex;
    margin-top: 0.2rem;
    .react-switch-checkbox {
        position: absolute;
        height: 0;
        width: 0;
        visibility: hidden;
    }
    
    .react-switch-label {
        display: inline-flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        width: 2.8rem;
        height: 1.6rem;
        background: ${(props) => props.theme.gray2};
        border-radius: 2.8rem;
        position: relative;
        transition: background-color .2s;
      
        &.on {
            background: ${(props) => props.theme.main1};
        }
    }
    
    .react-switch-label .react-switch-button {
        content: '';
        position: absolute;
        top: 0.2rem;
        left: 0.2rem;
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 50%;
        transition: 0.2s;
        background: ${(props) => props.theme.white1};
    }
    
    .react-switch-checkbox:checked + .react-switch-label .react-switch-button {
        left: calc(100% - 0.2rem);
        transform: translateX(-100%);
    }
    
    .react-switch-label:active .react-switch-button {
        width: 1.2rem;
    }
`

function SwitchToggle({ checked, id, handleToggle }) {
    return (
        <SwitchToggleContainer>
            <input
                type="checkbox"
                id={id}
                checked={checked}
                onChange={handleToggle}
                className="react-switch-checkbox"
            />
            <label
                className={checked ? "react-switch-label on" : "react-switch-label"}
                htmlFor={id}
            >
                <span className={`react-switch-button`}></span>
            </label>
        </SwitchToggleContainer>
    );
};

export default SwitchToggle;