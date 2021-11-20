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
    .nav-link.active{
        border-radius: ${(props) => props.theme.borderRadius};
        color: ${(props) => props.theme.colours.darkGray};
    }
    .nav-link{
        color: ${(props) => props.theme.colours.primaryColour};
    }
    .tab-content > .active{
        margin-top: 1%;
    }
`;

//Card Button
export const CustomButtonCard = styled(Button)`
        position: relative;
        background: ${(props) => props.theme.colours.primaryColour};
        color: ${(props) => props.theme.colours.secondaryColour};   
        border: none;
        width: 100%;
        height: 40px;        
        
        &:after{
            content: attr(CustomButtonCard);
            position: absolute;
            Right:0;
            Top:0;
            width: 15%;
            height: 100%;
            background: ${(props) => props.theme.colours.darkGray};
            border-top-right-radius: 3px;
            border-bottom-right-radius: 3px;
        }
        
        &:hover{
            background: ${(props) => props.theme.colours.secondaryColour};
            color: ${(props) => props.theme.colours.primaryColour};
            border: 2px solid ${(props) => props.theme.colours.primaryColour};
        }
        &:hover::after{
            background: ${(props) => props.theme.colours.secondaryColour};
        }
`

//Form Contact Button
export const FormButton = styled(CustomButtonCard)`
    background: ${(props) => props.theme.colours.darkGray};
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    width: 100%;

    &:hover{
        border: 2px solid ${(props) => props.theme.colours.darkGray};
        background: ${(props) => props.theme.colours.secondaryColour};
        font-weight: 700;
    }
`