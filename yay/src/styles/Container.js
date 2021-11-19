import styled from "styled-components";
import Container from "react-bootstrap/Container";

const CustomContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
    @media (min-width: ${(props) => props.theme.widths.small}) {
    height: 800px;
    }
    @media (min-width: ${(props) => props.theme.widths.medium}) {
        height: 700px;
    }     
`
export default CustomContainer;