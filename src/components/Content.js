import { useState, useEffect } from 'react';
import { Box } from '@mui/system';
import Article from './Article';


const Content = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/20minutes')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <Box maxWidth="xl" sx={{ display: 'flex', flexWrap: 'wrap' }}>
      {data && data.map((article, idx) => <Article key={idx} article={article} />)}
    </Box >
  );
}

export default Content;