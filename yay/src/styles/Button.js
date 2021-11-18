import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Tabs from "react-bootstrap/Tabs";

//Search button
export const CustomButton = styled(Button)`
    color: ${(props) => props.theme.colours.secondaryColour};
    background: ${(props) => props.theme.colours.primaryColour};
    border: none;
    &:hover{
        background: ${(props) => props.theme.colours.primaryColour};
        font-weight: 700;
    }
`;
//Carousel button
export const CustomButtonCarousel = styled(Carousel)`
    .carousel-indicators [data-bs-target]{
        background:${(props) => props.theme.colours.secondaryColour};
        width:20px;
        height:5px;
        opacity: 1;
    }
    .carousel-indicators .active{
        background: ${(props) => props.theme.colours.primaryColour};
        width:20px;
        height:5px;
    }
`;
//Tab button
export const CustomButtonTab = styled(Tabs)`
    .nav-tabs .nav-link.active{
        border-radius: ${(props) => props.theme.borderRadius};
        background: ${(props) => props.theme.colours.secondaryColour};
        color: ${(props) => props.theme.colours.primaryColour};
    }
`;