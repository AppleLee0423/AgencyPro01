import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ArticleList from './components/ArticleList';
import Article from './components/Article';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ArticleList/>} />
                <Route path="/api/articles/:id" element={<Article/>} />
            </Routes>
        </Router>
    );
};

export default App;