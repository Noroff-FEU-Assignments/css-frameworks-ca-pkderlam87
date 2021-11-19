import React from 'react';
import styled from 'styled-components';

const StyledSocialMedia = styled.div`
    color: ${(props) => props.theme.colours.blackColour};
    display: flex;
    justify-content: space-evenly;
    margin: 4% auto 2% auto;
    font-size: 1.2em;
`;

function SocialMedia() {
    return (
        <StyledSocialMedia>
            <h6>SHARE</h6>
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-twitter"></i>
        </StyledSocialMedia>
    )
}

export default SocialMedia
