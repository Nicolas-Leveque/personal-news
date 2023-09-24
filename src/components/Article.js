import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CarMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography';



const Article = ({ article }) => {
  return (
    <Card variant='outlined' sx={{ height: 270, width: 300, margin: 1, padding: 2, borderRadius: '15px', bgcolor: '#424242' }}>
      {article.image && <CarMedia
        component='img'
        height='150'
        image={article.image}
        sx={{ borderRadius: '15px' }}
      />}
      <CardActions>
        <a href={article.url} target="_blank" rel="noreferrer">
          <Typography sx={{ color: 'white', textDecoration: 'none' }}>
            {article.title}
          </Typography>
        </a>
      </CardActions>

    </Card>
  );
}

export default Article
