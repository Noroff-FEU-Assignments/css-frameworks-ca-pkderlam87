import React from 'react';
import styled from 'styled-components';

const DivFlex = styled.div`
    color: ${(props) => props.theme.colours.darkGray};
    display: flex;
    gap: 5%;
    margin: 5% 0;
`

function InfoContact() {
    return (
        <>
            <DivFlex>
                <i class="fas fa-envelope"></i>
                <h6>hello@yay.com</h6>
            </DivFlex>
            <DivFlex>
                <i class="fas fa-phone"></i>
                <h6>123 456 7890</h6>
            </DivFlex>
            <DivFlex>
                <i class="fas fa-map-marker-alt"></i>
                <div>
                    <h6>123 Some Street</h6>
                    <h6>Somewhere</h6>
                    <h6>Some City</h6>
                    <h6>10000</h6>
                </div>
            </DivFlex>
        </>
    )
}

export default InfoContact
