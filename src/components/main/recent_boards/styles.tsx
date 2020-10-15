import styled from 'styled-components';

export const Container = styled.div`
    width: 90%;
    
`

export const ContainerHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const HeaderButtons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const ContentContainer = styled.div`
    width: 100%;
    display: -webkit-box;
    flex-direction: row;
    overflow-x: scroll;
`

export const BoardContainer = styled.div`
    width: 200px;
    border: 1px solid black;
`

export const DropDown = styled.select`
    border: none;
`

export const BoardImage = styled.div`
    width: 100%;
    height: 150px;
    display: -webkit-box;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid black;
`

export const MoreButton = styled.div`
    position: absolute;
    right: 5px;
    top: 0px;
    cursor: pointer;
`