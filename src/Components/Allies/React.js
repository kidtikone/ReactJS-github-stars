import React, {useState, useEffect} from 'react'
import 
    {
        Typography, Container, Grid, Card, Button,
        CardMedia, CardContent, CardActions, CardHeader,
        Avatar, CssBaseline, Paper

    } from '@material-ui/core';

import useStyles from './styles'
import axios from 'axios'


const GitHubReact = () => {
    const classes = useStyles();

    
    function fetchData(){
    return axios.get('https://api.github.com/repos/reactjs/reactjs.org')
        .then(({data}) => {
            // handle success
            // console.log(data)
            // return JSON.stringify(data, null, 2);
            return data;
        })
        .catch(error => {
            // handle error
            console.error(error)
        })

}
    // const [reactData, setReactData] = useState("");
    const [avatarInfo, setAvatarInfo] = useState([]);
    const [nameInfo, setNameInfo] = useState("");
    const [des, setDes] = useState("");
    const [stargazers, setStargazers] = useState("");
    const [folks, setFolks] = useState("");
    const [subscribers, setSubscribers] = useState("");

    useEffect(() =>{
        fetchData().then(githubData => {
            // setReactData(JSON.stringify(githubData, null, 2) || 'NOT FOUND');
            // fetch Data
            setNameInfo(githubData.full_name);
            setAvatarInfo(githubData.owner.avatar_url)
            setDes(githubData.description)
            setStargazers(githubData.stargazers_count)
            setFolks(githubData.forks_count)
            setSubscribers(githubData.subscribers_count)
        });
    }, []);

    return (
        <div className={classes.container}>
         
            <Grid item xs={12} sm={12} md={12}>
                <Card className={classes.card}>
                    <CardHeader  
                        avatar={
                            <Avatar aria-label="react" className={classes.avatar}
                            src={avatarInfo}
                            />
                        }  
                            title= {nameInfo}> 
                        </CardHeader> 
                        <Typography className={classes.body}>
                            {des}
                        </Typography>
                        <CardContent className={classes.cardContent}>
                            <Grid container spacing={1} justify='center'>
                                <Grid item xs={4} >
                                    <Typography variant="h6" align="center"  gutterBottom >
                                        stars
                                    </Typography>
                                    <Typography className={classes.count} variant="h5" align="center"  gutterBottom >
                                        {stargazers} 
                                    </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography variant="h6" align="center"  gutterBottom >
                                        folked
                                    </Typography>
                                    <Typography className={classes.count} variant="h5" align="center"  gutterBottom >
                                        {folks} 
                                    </Typography> 
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography variant="h6" align="center"  gutterBottom >
                                        subscription
                                    </Typography>
                                    <Typography className={classes.count} variant="h5" align="center"  gutterBottom >
                                        {subscribers}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent> 
                    </Card>  
            </Grid>
        </div>
    )
}

export default GitHubReact
