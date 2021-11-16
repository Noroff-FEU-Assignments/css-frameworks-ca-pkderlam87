import React from 'react'

function Paragraph(props) {
    console.log(props);
    return (
        <p>{props.content}</p>
    )
}

export default Paragraph
