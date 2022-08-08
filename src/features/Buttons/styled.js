import styled from "styled-components";

export const ActionButtons = styled.div`
display: grid;
grid-template-columns: 1fr auto;
    @media(max-width:767px){
        display: grid;
        grid-template-columns: auto;
    }
`;

export const ActionButton = styled.button`
    font-style: normal;
    border: none;
    color: teal;
    background-color: white;
    transition: 0.5s;

    @media(max-width:767px) {
        padding: 8px;
    };

    &:hover {
        color: rgba(0, 128, 128, 0.5);
        transition: 0.5s;
    };

    &:disabled {
        color: rgba(0, 128, 128, 0.2);
    };
`;

