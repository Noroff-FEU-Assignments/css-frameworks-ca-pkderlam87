import styled from "styled-components";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
import FormCheckLabel from "react-bootstrap/esm/FormCheckLabel";

export const CustomForm = styled(Form)`
    color: ${(props) => props.theme.colours.darkGray};  
    background: ${(props) => props.theme.colours.lightGray};
    .input-group-text{
        background: ${(props) => props.theme.colours.mediumGray};
        color:  ${(props) => props.theme.colours.secondaryColour};
        border: none;
    }
    @media (min-width: ${(props) => props.theme.widths.small}) {
    margin-left: -5%;
    padding: 9%;
    width: 104%;
    }

`
export const CustomFormControl = styled(FormControl)`
    border: none;
    display: block;
    border-radius: .25rem;
    width: 100%;
`
export const CustomFormCheckInput = styled(FormCheckInput)`
    border: 1px solid ${(props) => props.theme.colours.primaryColour};
    width: 30px;
    height: 23px;    
    
    &:checked{
        background:${(props) => props.theme.colours.primaryColour};
        border: 1px solid ${(props) => props.theme.colours.primaryColour};
    }
    &:checked[type="checkbox"]{
        background-image: none;
    }
`

export const CustomFormCheckLabel = styled(FormCheckLabel)`
    color:${(props) => props.theme.colours.darkGray} !important;
    margin-left:2%;  
`