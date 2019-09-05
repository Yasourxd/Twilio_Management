import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    dialog: {
        marginTop: "90px",
        overFlowY: "scroll",
        maxHeight: "80%"
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    button: {
        position: 'absolute',
        right: theme.spacing(0),
        bottom: theme.spacing(-1),
        marginBottom: '20px'
    }
}));

export default useStyles;