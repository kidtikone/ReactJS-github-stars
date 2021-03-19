import { makeStyles } from  '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(4, 0, 6)
    },
    content: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2, 1, 1, 4)
        
    },
    // card: {
    //     padding: theme.spacing(2),
    // },
    
}));

export default useStyles;