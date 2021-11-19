import React from 'react'
import styled from "styled-components";

export const Title = styled.div`
    font-family: 'Playfair Display', sans-serif;
    color: ${(props) => props.theme.colours.primaryColour};
    margin: 4% 0;
`

function TitlePage(props) {
    console.log(props);
    return (
        <Title>
            <h1>{props.content}</h1>
        </Title>
    )
}

export default TitlePage
