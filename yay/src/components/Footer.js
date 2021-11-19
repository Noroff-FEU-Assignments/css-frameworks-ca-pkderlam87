import React from 'react';
import VideoMedia from './VideoMedia';
import styled from 'styled-components';

const StyledFooter = styled.div`
@media (min-width: ${(props) => props.theme.widths.small}) {
    background: ${(props) => props.theme.colours.secondaryColour};
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    justify-content: space-around;
    color: ${(props) => props.theme.colours.darkGray};
    margin-top: 20%;
}
@media (min-width: ${(props) => props.theme.widths.medium}) {
    flex-direction: row;
    justify-content: space-around;
    margin-top:0;
}`;

const InfoFooter = styled.div`
@media (min-width: ${(props) => props.theme.widths.small}) {
    display: flex;
    justify-content: space-around;
    margin: 30px 30px 30px 20px;
    font-size: 1em;
}
@media (min-width: ${(props) => props.theme.widths.medium}) {
    margin: 0;
    gap: 380px;
}`;

function Footer() {
    return (
        <StyledFooter>
            <VideoMedia />
            <InfoFooter>
                <h6>hello@yay.com</h6>
                <h6>Copyright 2020</h6>
            </InfoFooter>
        </StyledFooter>
    )
}

export default Footer
