import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { CustomForm } from '../../styles/FormContact/FormContactStyled';
import { CustomFormControl } from '../../styles/FormContact/FormContactStyled';
import { CustomFormCheckLabel } from '../../styles/FormContact/FormContactStyled';
import { CustomFormCheckInput } from '../../styles/FormContact/FormContactStyled';
import { WrapperFlex } from '../../styles/layout';
import { FormButton } from '../../styles/Button';

function FormContact() {
    return (
        <>
            <CustomForm>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <CustomFormControl type="name" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <CustomFormControl type="email" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Website</Form.Label>
                    <CustomFormControl type="url" className="mb-3 d-md-none" />
                    <InputGroup className="d-none d-md-flex">
                        <InputGroup.Text>https://</InputGroup.Text>
                        <CustomFormControl id="inlineFormInputGroupUsername" />
                    </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <CustomFormControl as="textarea" rows={6} />
                </Form.Group>
                <Form.Group>
                    {['checkbox'].map((type) => (
                        <WrapperFlex key={type} className="mb-3">
                            <WrapperFlex type={type} id={`check-api-${type}`}>
                                <CustomFormCheckInput type={type} />
                                <CustomFormCheckLabel>{`Allow us to sell your personal details
to whomever we want`}</CustomFormCheckLabel>
                            </WrapperFlex>
                        </WrapperFlex>
                    ))}
                </Form.Group>
                <FormButton variant="primary" type="submit">
                    Submit
                </FormButton>
            </CustomForm>
        </>
    )
}

export default FormContact
