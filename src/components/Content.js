import { useState } from 'react';
import { Box, Container } from '@mui/system';
import { ButtonGroup, Button } from '@mui/material';
import Article from './Article';
import Header from './Header';


const Content = () => {

  const [data, setData] = useState([]);
  const scrapMonde = () => {
    fetch('https://webscrapper-newspapers.onrender.com/api/lemonde')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  }
  const scrapMinutes = () => {
    fetch('https://webscrapper-newspapers.onrender.com/api/20minutes')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  }
  const scrapBfm = () => {
    fetch('https://webscrapper-newspapers.onrender.com/api/bfmtv')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  }
  const scrapFigaro = () => {
    fetch('https://webscrapper-newspapers.onrender.com/api/lefigaro')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  }
  const scrapFranceTV = () => {
    fetch('https://webscrapper-newspapers.onrender.com/api/franceTV')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  }
  const scrapFrance24 = () => {
    fetch('https://webscrapper-newspapers.onrender.com/api/france24')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  }

  return (
    <Container maxWidth='false' sx={{ minHeight: '100vh', bgcolor: '#424242', height: '100%' }}>
      <Header />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <ButtonGroup sx={{}}>
          <Button variant='contained' onClick={scrapMonde}>Le Monde</Button>
          <Button variant='contained' onClick={scrapMinutes}>20 Minutes</Button>
          <Button variant='contained' onClick={scrapBfm}>Bfmtv</Button>
          <Button variant='contained' onClick={scrapFigaro}>Le Figaro</Button>
          <Button variant='contained' onClick={scrapFranceTV}>France TV Info</Button>
          <Button variant='contained' onClick={scrapFrance24}>France 24</Button>
        </ButtonGroup>
      </Box>
      <Box maxWidth="xl" sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {data && data.map((article, idx) => <Article key={idx} article={article} />)}
      </Box>
    </Container >
  );
}

export default Content;