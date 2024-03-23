import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import axios from 'axios';

const Signup = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // 회원 가입 요청 보내기
            const response = await axios.post('/signup', formData);

            // 회원 가입 성공 시 로직
            console.log('회원 가입 성공:', response.data);
            // 예를 들어, 회원가입 후 로그인 페이지로 이동하는 등의 작업 수행
            window.location.href = '/login';
        } catch (error) {
            // 회원 가입 실패 시 에러 처리
            console.error('회원 가입 실패:', error);
            // 예를 들어, 사용자에게 오류 메시지를 보여주는 등의 작업 수행
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
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
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        placeholder="Enter email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword" className="mb-3">
                                    <Form.Label className="text-white">Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
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