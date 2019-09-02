import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root:{
        flexGrow: 1,
        marginTop:"20px"
    },
    paper:{
        padding: theme.spacing(1,1,1,2),
        textAlign: 'center',
    },
    test:{
        background:"black"
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        transition: theme.transitions.create('width'),
        width: '100%',
        // [theme.breakpoints.up('md')]: {
        //     width: 400,
        //     '&:focus': {
        //     width: 400,
        //     },
        // },
    },
}))

export default useStyles;