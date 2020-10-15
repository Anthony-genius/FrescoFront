import styled from 'styled-components';

export const Container = styled.div`
    width: 600px;
    display: flex;
`
export const TemplateContainer = styled.div`
    flex: 2;
    border: 1px solid black;
    flex-direction: row;
    display: -webkit-box;
    flex-wrap: wrap;
    overflow-y: scroll;
    height: 400px;
    justify-content: center;
    align-items: center;
    display: flex;
`

export const Template = styled.div`
    width: 40%;
    height: 150px;
    border: 1px solid black;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`