import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import memories from './images/memories-img.png';
import Posts from './Components/Posts/Posts';
import Form from './Components/Form/Form';
import useStyles from './style';

const App = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography variant='h2' className={classes.heading} align='center'>Memories</Typography>
        <img src={memories} className={classes.image} alt="memories" height='60' />
      </AppBar>
      <Grow in>
          <Container>
            <Grid container justifyContent='space-between' alignItems='stretch' spacing={3}>
                <Grid item xs={12} sm={7}>
                  <Posts/>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Form/>
                </Grid>
            </Grid>
          </Container>
      </Grow>
    </Container>
  )
}

export default App
