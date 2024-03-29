import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, Row, Col, Card} from "react-bootstrap";

const ArticleList = () => {
    const [articles, setArticles] = useState([]);

    const getArticles = async () => {
        await axios.get('/api/articles')
            .then((response) => {
                console.log('articles');
                console.log(response.data);

                setArticles(response.data);
            })
            .catch((error) => {
                console.log('articles error:<');
                console.log(error);
            });
    }

    useEffect(() => {
        getArticles();
    }, []);

    const logout = () => {
        // 로그아웃 로직 구현
        window.location.href = '/logout';
    };

    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={8}>
                    <div className="p-5 mb-5 text-center bg-light">
                        <h1 className="mb-3">My Blog</h1>
                        <h4 className="mb-3">블로그에 오신 것을 환영합니다.</h4>
                    </div>
                    <Link to="/api/articles/new" className="btn btn-secondary btn-sm mb-3">
                        글 등록
                    </Link>
                    {articles.map((article) => (
                        <Card key={article.id} className="mb-3">
                            <Card.Header>{article.id}</Card.Header>
                            <Card.Body>
                                <Card.Title>{article.title}</Card.Title>
                                <Card.Text>{article.content}</Card.Text>
                                <Link to={`/api/articles/${article.id}`} className="btn btn-primary">
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