import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CarMedia from '@mui/material/CardMedia'


const Article = ({ article }) => {
  return (
    <Card variant='outlined' sx={{ height: 270, width: 300, margin: 5, padding: 2, borderRadius: '15px', bgcolor: '#90A4AE' }}>
      {article.image && <CarMedia
        component='img'
        height='150'
        image={article.image}
        sx={{ borderRadius: '15px' }}
      />}
      <CardActions>
        <a href={article.url} target="_blank" rel="noreferrer">{article.title}</a>
      </CardActions>

    </Card>
  );
}

export default Article
