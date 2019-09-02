import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    button: {
        position: 'absolute',
        right: theme.spacing(2),
        bottom: theme.spacing(2)
    }
}));

export default useStyles;