import styled from 'styled-components';

export const TemplateContainer = styled.div`
    width: 90%;
    border: 1px solid black;
    overflow-x: scroll;
`

export const RowContainer = styled.div`
    flex-direction: row;
    display: -webkit-box;
`

export const BlankTemplate = styled.div`
    width: 200px;
    height: 150px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
`