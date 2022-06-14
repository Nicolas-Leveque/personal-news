import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CarMedia from '@mui/material/CardMedia'


const Article = ({ article }) => {
  return (
    <Card variant='outlined' sx={{ maxWidth: 256, margin: 5, borderRadius: '15px' }}>
      <CarMedia
        component='img'
        height='150'
        image={article.image} />
      <CardActions>
        <a href={article.url}>{article.title}</a>
      </CardActions>

    </Card>
  );
}

export default Article
