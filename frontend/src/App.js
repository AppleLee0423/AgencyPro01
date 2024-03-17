import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ArticleList from './components/ArticleList';
import Article from './components/Article';
import NewArticle from './components/NewArticle';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ArticleList/>} />
                <Route path="/api/articles/new" element={<NewArticle/>} />
                <Route path="/api/articles/:id" element={<Article/>} />
                <Route path="/api/articles/new/:id" element={<NewArticle/>} />
            </Routes>
        </Router>
    );
};

export default App;