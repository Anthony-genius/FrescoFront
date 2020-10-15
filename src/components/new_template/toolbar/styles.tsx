import styled from "styled-components"
import React from 'react';

export const HeaderContainer = styled.div`
    width: 100%;
    height: 80px;
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
    justify-content: flex-start;
    align-items: center;
`;

type ButtonComponentProps = {
    active: boolean,
    children?: JSX.Element[],
    onClick: (e?: React.MouseEvent) => void
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const ButtonComponent = ({ onClick, children, ...otherProps }: ButtonComponentProps) => {
    return (
        <Button onClick={onClick} {...otherProps}>{children}</Button>
    );
}

const Button = styled.button<ButtonComponentProps>`
    background-color: ${({ active }) => active ? '#e9e9e9' : '#fff'};
    width: 78px;
    height: 78px;
    border: 0px;
    cursor: pointer;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;