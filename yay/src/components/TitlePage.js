import React from 'react'

function TitlePage(props) {
    console.log(props);
    return (
        <h1>{props.content}</h1>
    )
}

export default TitlePage
