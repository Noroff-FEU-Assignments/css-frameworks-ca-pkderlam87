import React from 'react';
import Nav from 'react-bootstrap/Nav';
import styled from 'styled-components';

export const CustomNavLink = styled(Nav)`
    margin: 5% 0;

    .nav-link{
    color: ${(props) => props.theme.colours.secondaryColour};
    background: ${(props) => props.theme.colours.primaryColour};
    border: 1px solid ${(props) => props.theme.colours.primaryColour};
    border-radius: 0;
    margin: 30% 0;    
    }
    .nav-link.disabled{
        color: ${(props) => props.theme.colours.primaryColour};
        background: ${(props) => props.theme.colours.secondaryColour};
        border: 1px solid ${(props) => props.theme.colours.primaryColour};
    }
`

function NavNews() {
    return (
        <>
            <CustomNavLink variant="pills" defaultActiveKey="/home">
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
            </CustomNavLink>
        </>
    )
}

export default NavNews
