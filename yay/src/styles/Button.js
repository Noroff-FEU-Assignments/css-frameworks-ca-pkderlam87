import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";

export const CustomButton = styled(Button)`
    color: ${(props) => props.theme.colours.secondaryColour};
    background: ${(props) => props.theme.colours.primaryColour};
    border: none;
    &:hover{
        background: ${(props) => props.theme.colours.primaryColour};
        font-weight: 700;
    }
`;

export const CustomButtonCarousel = styled(Carousel)`
    background: ${(props) => props.theme.colours.primaryColour};
    padding: 10px;
`;
