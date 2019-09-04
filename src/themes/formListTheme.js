import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper:{
        // padding: theme.spacing(1,1,1,1),
        textAlign: 'center',
    },
    tableHead:{
        fontSize: "20px"
    },
    gridContainer:{
        overflowY: 'scroll',
        height:"calc(100vh - 120px)",
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
    toolbar:{
        display:"flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "25px",
    },
    ListIcon:{
        minWidth: "25px"
    }
}));

export default useStyles;