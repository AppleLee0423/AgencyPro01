import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import ArticleList from './components/ArticleList';
import NewArticle from './components/NewArticle';
import Article from './components/Article';
import Signup from './components/Signup';
import Login from './components/Login';

const PrivateRoute = ({ element: Element, isLoggedIn, ...rest }) => {
    // 로그인 여부에 따라 리다이렉트 또는 보호된 경로 렌더링
    return isLoggedIn ? (
        <Element {...rest} />
    ) : (
        <Navigate to="/login" replace />
    );
};

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogin = () => {
        setIsLoggedIn(true);
        //window.location.href = '/api/articles';
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/api/articles" />} />
                <Route path="/api/articles" element={<PrivateRoute element={ArticleList} isLoggedIn={isLoggedIn} />} />

                <Route path="/api/articles/new" element={<NewArticle />} />
                <Route path="/api/articles/:id" element={<Article />} />
                <Route path="/api/articles/new/:id" element={<NewArticle />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login handleLogin={handleLogin}/>} />
            </Routes>
        </Router>
    );
};

export default App;
