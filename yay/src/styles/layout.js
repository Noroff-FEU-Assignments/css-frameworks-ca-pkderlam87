import styled from "styled-components";
import Container from "react-bootstrap/esm/Container";

export const WrapperFlex = styled.div`
        display: flex;
`
export const WrapperGrid = styled(Container)`
@media (min-width: ${(props) => props.theme.widths.medium}) {
        display: grid;
        grid-template-columns: 1fr 1fr;
}
`