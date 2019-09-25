import { makeStyles } from '@material-ui/core/styles';

//Material-ui Core
import yellow from '@material-ui/core/colors/yellow';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';

const useStyles = makeStyles(theme => ({
    callBase:{
        padding:"10px 20px",
        border:"1px solid",
        textAlign:"center",
        borderRadius: "10px",
        minWidth:"10px",
    },
    yellowCase:{
        color:yellow[800],
        borderColor:yellow[800]
    },
    redCase: {
        color: red[700],
        borderColor: red[700]
    },
    greenCase: {
        color: green[700],
        borderColor: green[700]
    }
}))

export default useStyles;