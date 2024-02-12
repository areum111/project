import React from 'react';
import styled from "styled-components";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronDoubleLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import { BsChevronDoubleRight } from "react-icons/bs";

const Pagination = () => {
    return (
        <PaginationWrap className="paging">
            <button className="prev"><BsChevronDoubleLeft size={16} /></button>
            <button className="prev"><BsChevronLeft size={16} /></button>
            <div className="page">
                <button className="page_num active">1</button>
                <button className="page_num">2</button>
            </div>
            <button className="next"><BsChevronRight size={16} /></button>
            <button className="next"><BsChevronDoubleRight size={16} /></button>
        </PaginationWrap>
    )
}

const PaginationWrap = styled.div`
    margin-top: 32px;
    display: flex;
    justify-content: center;

    & .prev,
    & .next{
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
        border-radius: 2px;
        opacity: 0.5;

        & + button {
            margin-left: 0.4rem;
        }
    }

    & .page {
        margin: 0 0.4rem;

        & .page_num {
            display: inline-block;
            width: 30px;
            height: 30px;
            line-height: 30px;
            border-radius: 50%;
            color: ${(props) => props.theme.gray4};
            text-align: center;

            &.active {
                background: ${(props) => props.theme.main1};
                color: ${(props) => props.theme.white1};
            }
        }
    }
`;

export default Pagination;