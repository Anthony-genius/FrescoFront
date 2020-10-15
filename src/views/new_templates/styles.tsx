import styled from 'styled-components';

export const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ContentContainer = styled.div`
    flex: 1;
    width: 100%;
    position: absolute;
    top: 140px;
    bottom: 0;
`

export const ZoomContainer = styled.div`
    position: absolute;
    right: 10px;
    bottom: 10px;
`