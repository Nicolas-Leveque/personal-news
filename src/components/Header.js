import { Typography } from '@mui/material';

const Header = () => {
  const title = 'My news'
  return (
    <>
      <Typography variant='h1' sx={{ textAlign: 'center', marginBottom: '20px', color: 'white' }}>{title}</Typography>
    </>
  );
}

export default Header;