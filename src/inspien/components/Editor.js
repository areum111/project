import React from 'react';
import styled from 'styled-components';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const ToastEditor = () => {

    return (
        <EditorWrap>
            <ReactQuill
                placeholder="내용 입력"
            />
        </EditorWrap>
    );
}

const EditorWrap = styled.div`
    .quill {
        .ql-snow {
            border-color: ${(props) => props.theme.gray2};
            &.ql-toolbar {
                border-radius: 0.4rem 0.4rem 0 0;
            }
            &.ql-container {
                border-radius: 0 0 0.4rem 0.4rem;
            }
            &.ql-editor {
                height: 100%;
            }
        }
        .ql-editor.ql-blank::before {
            font-style: normal;
        }
    }
`

export default ToastEditor;