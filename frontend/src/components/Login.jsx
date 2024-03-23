import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

const Login = ({ handleLogin  }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // 로그인 로직 구현
        handleLogin();
    };

    const handleSignUp = () => {
        // 회원가입 페이지로 이동
        window.location.href = '/signup';
    };

    return (
        <Container fluid className="d-flex vh-100 justify-content-center align-items-center">
            <Row>
                <Col>
                    <Card bg="dark" style={{ borderRadius: '1rem' }}>
                        <Card.Body className="p-5 text-center">
                            <h2 className="text-white">LOGIN</h2>
                            <p className="text-white-50 mt-2 mb-5">서비스를 사용하려면 로그인을 해주세요!</p>
                            <Form onSubmit={handleSubmit}>
                                <input type="hidden" name="_csrf.parameterName" value="_csrf.token" />
                                <Form.Group controlId="formBasicEmail" className="mb-3">
                                    <Form.Label className="text-white">Email address</Form.Label>
                                    <Form.Control type="email" name="username" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword" className="mb-3">
                                    <Form.Label className="text-white">Password</Form.Label>
                                    <Form.Control type="password" name="password" placeholder="Password" />
                                </Form.Group>

                                <Button variant="primary" type="submit" className="me-3">
                                    Submit
                                </Button>
                                <Button variant="secondary" onClick={handleSignUp}>
                                    회원가입
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;