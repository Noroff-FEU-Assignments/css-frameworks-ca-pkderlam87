import styled from "styled-components";
import AccordionHeader from "react-bootstrap/AccordionHeader";
import AccordionBody from "react-bootstrap/AccordionBody";

//Accordion Header
export const CustomAccordionHeader = styled(AccordionHeader)`
    .accordion-button:not(.collapsed){
        border-radius: ${(props) => props.theme.borderRadius};
        background: ${(props) => props.theme.colours.secondaryColour};
        color: ${(props) => props.theme.colours.primaryColour};
        border-bottom: 2px solid ${(props) => props.theme.colours.primaryColour};
    }
    .accordion-button{
        background: ${(props) => props.theme.colours.secondaryColour};
        color: ${(props) => props.theme.colours.primaryColour};
    }
    .accordion-button::after{
        display:none;
    }
`
//Accordion body
export const CustomAccordionBody = styled(AccordionBody)`
    background: ${(props) => props.theme.colours.backgroundColour};
`

//Tab body
export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 0.5fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 2%;
    padding: 1% 2%;
    background: ${(props) => props.theme.colours.secondaryColour};
    box-shadow: ${(props) => props.theme.colours.shadow};
    img{
        grid-row-start: 1;
        grid-row-end: span 2;
        max-width: 70%;
        margin:0 auto;
    }
    .cOXXdb{
        margin: 0;
        justify-content: left;
        gap: 3%;
    }
`