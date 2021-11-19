import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

export const CustomCard = styled(Card)`
    border-radius: 10px;
    width: 15rem;
    @media (min-width: ${(props) => props.theme.widths.medium}) {
         width: 13rem;
    }
    img{
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
    .card-title{
        color: ${(props) => props.theme.colours.blackColour};
    }
    p{
        color: ${(props) => props.theme.colours.darkGray};
    }
`;
export const CustomRow = styled(Row)`
@media (min-width: ${(props) => props.theme.widths.small}) {
    margin: 0 auto;
    max-width: 70%;
}
@media (min-width: ${(props) => props.theme.widths.medium}) {
    max-width: 100%;
}
`
