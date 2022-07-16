import styled, { css } from "styled-components";

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