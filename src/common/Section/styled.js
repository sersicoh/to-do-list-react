import styled from "styled-components";

export const Sections = styled.section`
    background-color: white;
    margin-bottom: 10px;
`;

export const SectionsHeader = styled.header`
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    grid-gap: 8px;
    padding: 8px;
    border-bottom: 1px solid #ccc;

    @media(max-width:767px) {
        grid-template-columns: 1fr;
        grid-gap: 0;
    }
`;

export const SectionsTitle = styled.h2`
    padding: 10px;
    margin: 0;
`;

export const SectionsBody = styled.div`
    padding: 18px;
`;