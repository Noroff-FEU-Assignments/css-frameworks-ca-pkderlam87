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
    display: flex;
`
export const CustomTab = styled.div`
    .tab-pane{
        background: ${(props) => props.theme.colours.secondaryColour};
    }
`