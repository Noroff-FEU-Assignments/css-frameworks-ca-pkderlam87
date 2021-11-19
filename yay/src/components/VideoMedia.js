import React from 'react'
import styled from 'styled-components';

const IconsFooter = styled.div`
@media (min-width: ${(props) => props.theme.widths.small}) {
    display:flex;
    gap: 50%;
    margin: 4% auto 2% auto;
    font-size: 2em;
}
@media (min-width: ${(props) => props.theme.widths.medium}) {
    margin: 0 2%;
}`;


function VideoMedia() {
    return (
        <IconsFooter>
            <i class="fab fa-vimeo-v"></i>
            <i class="fab fa-youtube"></i>
        </IconsFooter>
    )
}

export default VideoMedia
