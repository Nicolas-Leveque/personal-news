import { useState } from 'react';
import { Box, Container } from '@mui/system';
import { Button } from '@mui/material';
import ListeArticle from './ListeArticle';

const Content = () => {

  const [ journal, setJournal ] = useState('')


  return (
    <Container maxWidth="false">
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', margin: 2 }}>

        <Button variant='contained' onClick={() => setJournal('lemonde')}>Le Monde</Button>
        <Button variant='contained' onClick={() => setJournal('20minutes')}>20 Minutes</Button>
        <Button variant='contained' onClick={() => setJournal('bfmtv')}>Bfmtv</Button>
        <Button variant='contained' onClick={() => setJournal('lefigaro')}>Le Figaro</Button>
        {/* <Button variant='contained' onClick={() => setJournal('franceTV')}>France TV Info</Button>
          <Button variant='contained' onClick={() => setJournal('france24')}>France 24</Button> */}

      </Box>
      <ListeArticle journal={journal} />
    </Container >
  );
}

export default Content;