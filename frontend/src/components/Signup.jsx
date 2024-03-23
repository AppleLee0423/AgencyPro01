import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

const Signup = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // 회원 가입 로직 구현
    };

    return (
        <Container fluid className="d-flex vh-100 justify-content-center align-items-center">
            <Row>
                <Col>
                    <Card bg="dark" style={{ borderRadius: '1rem' }}>
                        <Card.Body className="p-5 text-center">
                            <h2 className="text-white">SIGN UP</h2>
                            <p className="text-white-50 mt-2 mb-5">서비스 사용을 위한 회원 가입</p>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formBasicEmail" className="mb-3">
                                    <Form.Label className="text-white">Email address</Form.Label>
                                    <Form.Control type="email" name="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword" className="mb-3">
                                    <Form.Label className="text-white">Password</Form.Label>
                                    <Form.Control type="password" name="password" placeholder="Password" />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Signup;