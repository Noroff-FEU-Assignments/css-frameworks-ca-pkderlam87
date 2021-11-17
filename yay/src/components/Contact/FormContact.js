import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

function FormContact() {
    return (
        <>
            <Container>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Website</Form.Label>
                        <Form.Control type="url" className="mb-3 d-md-none" />
                        <InputGroup className="d-none d-md-flex">
                            <InputGroup.Text>https://</InputGroup.Text>
                            <FormControl id="inlineFormInputGroupUsername" />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={6} />
                    </Form.Group>
                    <Form.Group>
                        {['checkbox'].map((type) => (
                            <div key={type} className="mb-3">
                                <Form.Check type={type} id={`check-api-${type}`}>
                                    <Form.Check.Input type={type} isValid />
                                    <Form.Check.Label>{`Allow us to sell your personal details
to whomever we want`}</Form.Check.Label>
                                </Form.Check>
                            </div>
                        ))}
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </>
    )
}

export default FormContact
