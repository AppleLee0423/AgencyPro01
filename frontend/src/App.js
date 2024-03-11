import React, {useEffect, useState} from 'react';
import axios from "axios";

function App() {
  const [data, setData] = useState('')

  useEffect(() => {
    axios.get('/api/test')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
  }, []);

  return (
      <div>
        {data}
      </div>
  );
}

export default App;