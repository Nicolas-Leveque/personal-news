import { useState } from 'react';
import { Box, Container } from '@mui/system';
import { ButtonGroup, Button } from '@mui/material';
import Article from './Article';
import Header from './Header';


const Content = () => {

  const [data, setData] = useState([]);
  const scrapMonde = () => {
    fetch('http://localhost:5000/api/lemonde')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  }
  const scrapMinutes = () => {
    fetch('http://localhost:5000/api/20minutes')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  }
  const scrapBfm = () => {
    fetch('http://localhost:5000/api/bfmtv')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  }

  return (
    <Container maxWidth='false' sx={{ bgcolor: '#424242' }}>
      <Header />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <ButtonGroup sx={{}}>
          <Button variant='contained' onClick={scrapMonde}>Le monde</Button>
          <Button variant='contained' onClick={scrapMinutes}>20 minutes</Button>
          <Button variant='contained' onClick={scrapBfm}>Bfmtv</Button>
        </ButtonGroup>
      </Box>
      <Box maxWidth="xl" sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {data && data.map((article, idx) => <Article key={idx} article={article} />)}
      </Box>

    </Container >
  );
}

export default Content;