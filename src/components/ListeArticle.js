import Article from "./Article"
import { Box } from '@mui/system';
import { useState, useEffect } from "react";

const ListeArticle = ({ journal }) => {

  const URI = 'https://webscrapper-newspapers.onrender.com/api/'
  const [ data, setData ] = useState([])

  useEffect(() => {
    let mounted = true
    fetch(`${URI}${journal}`).then((res) => res.json()).then((data) => {
      if (mounted)
      {
        setData(data)
      }

    }).catch(err => console.log(err));
    return () => mounted = false
  }, [ journal ])

  return (
    <Box maxWidth="xl" sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {(data && data.map((article, idx) => <Article key={idx} article={article} />)) ?? "Pas d'articles"}
    </Box>
  )
}

export default ListeArticle