import React from 'react';
import Nav from 'react-bootstrap/Nav';
function NavNews() {
    return (
        <>
            <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link to="/News">1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>3</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>4</Nav.Link>
                </Nav.Item>
            </Nav>
        </>
    )
}

export default NavNews
