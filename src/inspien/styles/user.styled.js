import styled from "styled-components";

export const UserWrap = styled.div`
    .user_id {
        font-size: 1.4rem;
        color: ${(props) => props.theme.main1};
        text-decoration: underline;
    }
`;

export const UserDetailWrap = styled.div`
    textarea {
        overflow-y: hidden;
    }
`;