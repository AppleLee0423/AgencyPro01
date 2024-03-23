import React, {useState} from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Login = ({ handleLogin  }) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        // 로그인 로직 구현
        try {
            // 로그인 요청 보내기
            //const response = await axios.post('/login', formData);

            // 로그인 성공 시 로직
            //console.log('로그인 성공:', response.data);

            // 로그인 상태 업데이트
            handleLogin();

            // 예를 들어, 로그인 후 /api/articles 페이지로 이동
            navigate('/api/articles'); // 로그인 성공 시 페이지 이동
            //history.push('/api/articles');
        } catch (error) {
            // 로그인 실패 시 에러 처리
            console.error('로그인 실패:', error);
            // 예를 들어, 사용자에게 오류 메시지를 보여주는 등의 작업 수행
        }
    };

    const handleSignUp = () => {
        // 회원가입 페이지로 이동
        window.location.href = '/signup';
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
                            <h2 className="text-white">LOGIN</h2>
                            <p className="text-white-50 mt-2 mb-5">서비스 사용을 위한 로그인</p>
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