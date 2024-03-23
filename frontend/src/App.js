import {useEffect, useState} from 'react';
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ArticleList from "./components/ArticleList";
import NewArticle from "./components/NewArticle";
import Article from "./components/Article";
import Signup from "./components/Signup";
import Login from "./components/Login";

const PrivateRoute = ({ component: Component, isLoggedIn, setIsLoggedIn, ...rest }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const interceptor = axios.interceptors.response.use(
            (response) => response,
            (error) => {
                if (error.response.status === 401) {
                    setIsLoggedIn(false);
                    navigate('/login');
                }
                return Promise.reject(error);
            }
        );

        return () => axios.interceptors.response.eject(interceptor);
    }, [navigate, setIsLoggedIn]);

    return (
        <Route
            {...rest}
            render={(props) =>
                isLoggedIn ? (
                    <Component {...props} />
                ) : (
                    <Navigate
                        to={{
                            pathname: '/login',
                            state: { from: props.location?.pathname },
                        }}
                    />
                )
            }
        />
    );
};

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to={isLoggedIn ? '/api/articles' : '/login'} />} />
                <Route
                    path="/api/articles"
                    element={<PrivateRoute component={ArticleList} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
                />
                <Route path="/api/articles/new" element={<NewArticle />} />
                <Route path="/api/articles/:id" element={<Article />} />
                <Route path="/api/articles/new/:id" element={<NewArticle />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login onLogin={handleLogin} />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;