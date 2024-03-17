import React, {useState, useEffect} from 'react';
import axios from "axios";
import {useParams} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, Row, Col} from "react-bootstrap";

const Article = () => {
    const { id } = useParams();
    const [article, setArticle] = useState([]);

    const getArticle = async () => {
        await axios.get(`/api/articles/${id}`)
            .then((response) => {
                console.log('article');
                console.log(response.data);

                setArticle(response.data);
            })
            .catch((error) => {
                console.log('article error:<');
                console.log(error);
            });
    }

    useEffect(() => {
        getArticle();
        // eslint-disable-next-line
    }, []);

    return (
        <Container className="mt-5">
            <Row>
                <Col lg={8}>
                    <article>
                        <header className="mb-4">
                            <h1 className="fw-bolder mb-1">{article.title}</h1>
                            <div className="text-muted fst-italic mb-2">
                                Posted on {article.createdAt}
                                {/* Posted on {formattedDate} By {article.author} */}
                            </div>
                        </header>
                        <section className="mb-5">
                            <p className="fs-5 mb-4">{article.content}</p>
                        </section>
                        <Button variant="primary" size="sm" className="me-2" href={`/new-article?id=${article.id}`}>
                            수정
                        </Button>
                        <Button variant="secondary" size="sm" id="delete-btn">
                            삭제
                        </Button>
                    </article>
                </Col>
            </Row>
        </Container>
    );
};

export default Article;