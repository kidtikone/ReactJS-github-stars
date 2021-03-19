import { makeStyles } from  '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        
    },
    card:{
        padding: theme.spacing(4,1),
    },
    cardContent:{
        padding: theme.spacing(5,5),
        margin: theme.spacing(1, 'auto'),
    },
    avatar: {
        width : theme.spacing(8),
        height: theme.spacing(8)
    },
    body: {
        padding: '1px 78px',    
    },
    count: {
        padding: theme.spacing(2),
    }

    
}));

export default useStyles;