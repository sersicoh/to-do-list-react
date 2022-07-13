import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 4fr auto;
    grid-gap: 15px;

    @media(max-width:767px) {
        grid-template-columns: auto;
        grid-gap: 10px;
    }
`;

export const FormInput = styled.input`
    padding: 8px;
`;

export const FormButton = styled.button`
    background-color: teal;
    color: white;
    padding: 8px 20px;
    border: none;
    transition: 0.5s;

    &:hover {
        transform: scale(1.05);
        background-color: rgba(0, 128, 128, 0.788);
    }
`;