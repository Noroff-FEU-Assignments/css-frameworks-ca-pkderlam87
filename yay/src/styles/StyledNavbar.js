import styled from "styled-components";
import { Title } from "../components/TitlePage";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

export const MainTitleNav = styled(Title)`
    font-style: italic;
`
export const CustomNavLink = styled(NavLink)`
    color: ${(props) => props.theme.colours.blackColour};
    text-decoration: none;
    padding: 2%;
    &:hover{
        color: ${(props) => props.theme.colours.blackColour};
        font-weight: 700;
    }
    &.active{
        background: ${(props) => props.theme.colours.secondaryColour};
        width: 100%;
    }
`
export const CustomNav = styled(Nav)`
@media (min-width: ${(props) => props.theme.widths.small}) {
    position: absolute;
    padding-bottom: 4%;
    left:0;
    z-index: 1000;
    background: ${(props) => props.theme.colours.lightGray};
    width: 100%;
    margin: 0;
    box-shadow: ${(props) => props.theme.colours.shadow};
}
@media (min-width: ${(props) => props.theme.widths.medium}) {
    position: inherit;
    padding-bottom: 0;
    box-shadow: none;
    background: none;
    justify-content:space-between;
} 
`