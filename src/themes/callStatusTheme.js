import { makeStyles } from '@material-ui/core/styles';

//Material-ui Core
import yellow from '@material-ui/core/colors/yellow';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';

const useStyles = makeStyles(theme => ({
    callBase:{
        padding:"8px 16px",
        border:"2px solid",
        textAlign:"center",
        borderRadius: "6px",
        minWidth:"10px",
        color:"#7f8c8d",
        borderColor: "#7f8c8d",
        fontSize:"13px",
        fontWeight:"500",
        textTransform:"uppercase"
    },
    yellowCase:{
        color:"#ff8a01",
        borderColor:"#ff8a01"
    },
    redCase: {
        color: "#dd3834",
        borderColor: "#dd3834"
    },
    greenCase: {
        color: "#008759",
        borderColor: "#008759"
    }
}))

export default useStyles;