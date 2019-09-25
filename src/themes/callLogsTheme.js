import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root:{
        display:"grid",
        marginTop:"20px",
        position: "relative"
    },
    gridContainer:{
        overflow: 'hidden',
        overFlowX: 'hidden',
        maxHeight:"calc(100vh - 280px)",
        "&::-webkit-scrollbar":{
            width: "0.5em",
            height: "0.5em",
        },
        "&::-webkit-scrollbar-thumb":{
            backgroundColor: "rgb(194, 70, 120, 0.3)",
            borderRadius: "3px" 
        },
        "&::-webkit-scrollbar-thumb:hover": {
            background: "rgb(194, 70, 120, 0.5)",
            cursor: "pointer"
         }
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
        padding: theme.spacing(0),
    },
    headingID:{
        fontSize: theme.typography.pxToRem(13),
        width:"100px",
        flexShrink: 0,
        textAlign:"left",
        color: "rgba(0, 0, 0, 0.54)",
    },
    heading: {
        fontSize: theme.typography.pxToRem(13),
        flexBasis: '16.6%',
        flexShrink: 0,
        textAlign:"left",
        color: "rgba(0, 0, 0, 0.8)",
    },
    collapseBody: {
        fontSize: theme.typography.pxToRem(13),
        flexBasis: 'calc(calc(100% + 30px)/6)',
        flexShrink: 0,
        textAlign:"left",
        color: "rgba(0, 0, 0, 0.54)",
    },
    toolbar:{
        // borderBottom:"1px solid rgba(224, 224, 224)",
        minHeight: "40px"
    },
}))

export default useStyles;