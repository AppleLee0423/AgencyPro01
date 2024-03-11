import React , { useState, useEffect }  from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ArticleList from './components/ArticleList';
import axios from 'axios';

const App = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('/api/articles')
        .then(response => setArticles(response.data))
        .catch(error => console.error(error));
  }, []);

  return (
      <Router>
        <Routes>
            <Route path="/" element={<ArticleList articles={articles} />} />
        </Routes>
      </Router>
  );
};

export default App;