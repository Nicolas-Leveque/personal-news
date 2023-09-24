import { Container } from '@mui/system';

import Header from './Header';
import Content from './Content';


function Layout () {
  return (
    <Container maxWidth="false" sx={{ minHeight: '100vh', bgcolor: '#121212', height: '100%' }}>
      <Header />
      <Content />
    </Container>

  )
}

export default Layout