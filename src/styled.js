import styled from "styled-components"
import { NavLink} from "react-router-dom"

export const StyledNavListItem = styled.li`
padding: 0px 10px;
`;

export const StyledNavList = styled.ul`
    background-color: teal;
    padding: 20px;
    margin: -20px -20px 0px -20px;
    display: flex;
    justify-content: center;
    list-style-type: none;

`;

export const StyledNavLink = styled(NavLink)`
    color:white;
    font-weight: 400;
    text-decoration: none;
    
    &.active{
        font-weight: 700;;
    }
`;
