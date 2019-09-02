import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root:{
        flexGrow:1
    },
    paper:{
        textAlign:"center",
        padding: theme.spacing(1,1,1,2),
        color:'white',
    },
    cardTitle:{
        fontSize:"18px",
        alignItems:"center",
        justifyContent:"center",
        display:"flex",
        "&>*":{
            marginRight:"5px"
        }
    },
    card1:{
        background: "#00BCD4",
    },
    card2:{
        background: "#FF5252",
    },
    card3:{
        background: "#FFA726"
    },
    card4:{
        background: "#66Ba6A"
    },
    card: {
        marginTop: "10px",
        marginRight: "10px",
    },
    cardBody:{
        fontSize:"30px",
        margin:"10px 0px 10px 0px"
    },
    cardFooter:{
        fontSize: "14px",
        display: "flex",
        justifyContent:"center",
        alignItems: "center"
    }
}))

export default useStyles;