import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import {useParams} from "react-router-dom";
import axios from "axios";

const NewArticle = () => {
    const { id } = useParams();
    // const id = useParams().id; // 다른 방식으로도 사용 가능

    const [article, setArticle] = useState({ id: '', title: '', content: '' });

    useEffect(() => {
        if (id) {
            axios.get(`/api/articles/new?id=${id}`)
                .then((response) => {
                    console.log('update Article');
                    console.log(response.data);
                    setArticle(response.data);
                })
                .catch((error) => {
                    console.log('article error:');
                    console.log(error);
                });
        }
    }, [id]);

    // article이 변경될 때마다 해당 값을 업데이트
    const handleChange = (e) => {
        const { name, value } = e.target;
        setArticle(prevArticle => ({ ...prevArticle, [name]: value }));
    };

    // 등록
    const handleCreate = async () => {
        try {
            const title = document.getElementById("title").value;
            const content = document.getElementById("content").value;
            await axios.post(`/api/articles`, { title, content });
            alert('등록이 완료되었습니다.');
            window.location.replace(`/`);
        } catch (error) {
            console.log('등록 실패');
            alert('등록에 실패했습니다.');
            window.location.replace(`/`);
        }
    }

    // 수정
    const handleModify = async () => {
        try {
            const title = document.getElementById("title").value;
            const content = document.getElementById("content").value;
            await axios.put(`/api/articles/${id}`, { title, content });
            alert('수정이 완료되었습니다.');
            // 수정이 완료되면 해당 글의 상세 페이지로 이동
            window.location.replace(`/api/articles/${id}`);
        } catch (error) {
            console.log('수정 실패');
            alert('수정에 실패했습니다.');
            window.location.replace(`/api/articles/${id}`);
        }
    };

    return (
        <div className="p-5 mb-5 text-center bg-light">
            <h1 className="mb-3">My Blog</h1>
            <h4 className="mb-3">블로그에 오신 것을 환영합니다.</h4>
            <Container className="mt-5">
                <Row>
                    <Col lg={8}>
                        <Form>
                            <Form.Group controlId="title">
                                <Form.Control
                                    type="text"
                                    placeholder="제목"
                                    name="title"
                                    value={article.title}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="content">
                                <Form.Control
                                    as="textarea"
                                    rows={10}
                                    placeholder="내용"
                                    name="content"
                                    value={article.content}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            {article.id ? (
                                <Button variant="primary" type="button" onClick={handleModify}>
                                    수정
                                </Button>
                            ) : (
                                <Button variant="primary" type="button" onClick={handleCreate}>
                                    등록
                                </Button>
                            )}
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default NewArticle;