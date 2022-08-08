import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const TaskList = styled.ul`
    margin: 0;
    padding: 0;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 8px;
    padding: 10px;
    border-bottom: 1px solid #ccc;
    align-items: center;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    ${({ done }) => done && css`
        text-decoration-line: line-through;
    `}
    
`;

export const Button = styled.button`
    color: white;
    padding: 0;
    width: 30px;
    height: 30px;
    border: none;

    ${({ remove }) => remove && css`
        background-color: red;
        transition: 0.5s;

        &:hover {
            background-color: rgba(255, 0, 0, 0.781);
        }
    `}

    ${({ done }) => done && css`
        background-color: green;
        transition: 0.5s;

        &:hover {
            background-color: rgba(0, 128, 0, 0.781);
        }
    `}
`;

export const StyledTaskLink = styled(Link)`

    text-decoration: none;
    color: teal;

    &:hover{
        color: rgba(0,128,128,0.5);
        transition: 0.5s;
    }

`;