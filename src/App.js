import {React,Fragment} from 'react';
import {Typography, AppBar, Button, Card, CardContent, CardActions, CardMedia, CssBaseline, Grid, Toolbar, Container} from '@mui/material'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import useStyles from './Styles';
function App() {
  const classes = useStyles()
  const cards=[1,2,3,4,5,6,7,8,9,10,11,12]
  return (
    <Fragment>
      <CssBaseline/>
      <AppBar position='relative' >
        <Toolbar>
        <PhotoCameraIcon className={classes.icon}/>
        <Typography >
          Album
        </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm" className={classes.container}>
            <Typography variant="h2" color="textPrimary" gutterBottom align="center">
              Photo Album
            </Typography>
            <Typography variant="h5" color="textSecondary" align="center" paragraph>
              Lorem velit labore laboris quis veniam esse in ea nisi non in fugiat ipsum minim. 
            </Typography>
            <div className={classes.button}>
              <Grid container spacing={2}   justifyContent="center"> 
                <Grid item>
                  <Button variant="contained" color="primary">See My Photos</Button>
                </Grid>
                <Grid item>
                  <Button  variant="outlined" color="error">See My Photos</Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container maxWidth="md" className={classes.cardGrid}>
          <Grid container spacing={4}>
            {cards.map((card)=>(
              <Grid item key={card} lg={4} xs={12} md={6}>
              <Card  className={classes.card}>
                <CardMedia 
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h4">this is the title</Typography>
                  <Typography paragraph variant="p">Anim ullamco dolor labore eiusmod do ullamco esse sit nostrud aute ut pariatur sint nostrud. </Typography>
                </CardContent>
                <CardActions>
                  <Button>view</Button>
                  <Button>edit</Button>
                </CardActions> 
              </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </Fragment>
  );
}

export default App;
