import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root:{
        flexGrow: 1,
        position: "relative",
    },
    gridContainer:{
        overflowY: "auto",
        maxHeight:"calc(100vh - 250px)",
        // "&::-webkit-scrollbar":{
        //     width: "0.5em",
        //     height: "0.5em",
        // },
        // "&::-webkit-scrollbar-thumb":{
        //     backgroundColor: "rgb(194, 70, 120, 0.3)",
        //     borderRadius: "3px" 
        // },
        // "&::-webkit-scrollbar-thumb:hover": {
        //     background: "rgb(194, 70, 120, 0.5)",
        //     cursor: "pointer"
        //  }
    },
    paper:{
        padding: theme.spacing(1,1,1,2),
        textAlign: 'center',
        color:"#b2b5c8",
    },
    test:{
        background:"black"
    },
    inputRoot: {
        color: "#b2b5c8",
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
    deleteButton:{
        marginLeft: "10px"
    },
    rightButtonWidth: {
        width: "150px"
    },
    header: {
        backgroundColor: '#fff',
        position: 'sticky',
        top: 0,
    },
    space:{
        padding: theme.spacing(0,1,1,2),
    }
}))

export default useStyles;