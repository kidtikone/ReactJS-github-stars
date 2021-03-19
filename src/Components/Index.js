import React from 'react'
import 
    {
        CssBaseline, Typography, Container,Grid,
        Card, CardMedia, CardContent, CardActions,
        Paper,
    } from '@material-ui/core';
import useStyles from './styles'

import GitHubReact from './Allies/React'
import GitHubVue from './Enemies/Vue/Vue'
import GitHubAngular from './Enemies/Angular/Angular'

const Index = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.container}>
            <Container maxWidtth="sm"> 
                <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
                    GITHUB STARS
                </Typography>
                 <main>
                        <Typography className={classes.content} variant='h4' align="left">
                            Allies
                        </Typography>  
                    <Grid container> 
                        <Grid item xs={12}> 
                            <Card className={classes.card}>
                                <GitHubReact/>
                            </Card>
                        </Grid>           
                    </Grid>
                        <Typography className={classes.content} variant='h4' align="left">
                            Enemies
                         </Typography>
                    <Grid container spacing={4} justify='center'> 
                        <Grid item xs={6} >
                            <Card>
                            <GitHubVue/>
                            </Card>
                        </Grid> 
                        
                        <Grid item xs={6}>
                            <Card>
                            <GitHubAngular/>
                            </Card>
                        </Grid> 
                    </Grid>
                </main>
            </Container>
            </div>
        </>      
    );
}

export default Index
