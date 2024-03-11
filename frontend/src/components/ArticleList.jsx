import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, Row, Col, Card} from "react-bootstrap";

const ArticleList = ({ articles }) => {
    const logout = () => {
        // 로그아웃 로직 구현
    };

    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={8}>
                    <div className="p-5 mb-5 text-center bg-light">
                        <h1 className="mb-3">My Blog</h1>
                        <h4 className="mb-3">블로그에 오신 것을 환영합니다.</h4>
                    </div>
                    <Link to="/new-article" className="btn btn-secondary btn-sm mb-3">
                        글 등록
                    </Link>
                    {articles.map((article) => (
                        <Card key={article.id} className="mb-3">
                            <Card.Header>{article.id}</Card.Header>
                            <Card.Body>
                                <Card.Title>{article.title}</Card.Title>
                                <Card.Text>{article.content}</Card.Text>
                                <Link to={`/articles/${article.id}`} className="btn btn-primary">
                                    보러 가기
                                </Link>
                            </Card.Body>
                        </Card>
                    ))}
                    <Button variant="secondary" onClick={() => logout()}>
                        로그아웃
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default ArticleList;