import { makeStyles} from '@material-ui/core/styles';

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
    root: {
        display:'flex',
    },
    appBar:{
        zIndex:theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        // background: 'linear-gradient(45deg, #9227a6, #fb6b44)',
        background: '#1e3799',
        boxShadow:'8px 2px 20px rgba(0, 0, 0, .02)'
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      menuButton: {
        marginRight: 36,
        marginLeft: -16
      },
      hide: {
        display: 'none',
      },
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
      },
      drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      drawerClose: {
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(7) + 1,
        },
      },
      toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
      },
      links:{
          "&>a":{
            color: "inherit",
            textDecorationLine: "none"
          },
          color: "inherit",
          textDecorationLine: "none"
      },
      logo:{
          width:"180px",
          height:"40px",
          marginRight:"30px"
      },
      active:{
        background: theme.palette.action.selected
      }
}))

export default useStyles;