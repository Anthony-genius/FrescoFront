import styled from "styled-components"

export const HeaderContainer = styled.div`
    width: 100%;
    height: 60px;
    justify-content: center;
    align-items: center;
    display: flex;
    border-bottom: 2px solid black;
`;

export const ContentContainer = styled.div`
    width: 90%;
    align-self: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const LogoContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const LogoTitle = styled.h2`
    
`;

export const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
`

export const CommentBadge = styled.div`
    position: absolute;
    top: 0;
    right: 20px;
    width: 15px;
    height: 15px;
    border-radius: 15px;
    border: 1px solid black;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`