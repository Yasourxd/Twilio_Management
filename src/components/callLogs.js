import React from 'react';

import CallLogsSchema from './callLogsSchema';
import CallStatusComponent from './callStatusComponent'

import useStyles from '../themes/callLogsTheme';

//Material-ui Core
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Toolbar from '@material-ui/core/Toolbar';


//Material-ui Icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



export default function CallLogs(props){
    const classes = useStyles();
    const [urlExpanded, setUrlExpanded] = React.useState(window.location.href.slice(28));
    const [urlShow, setUrlShow] = React.useState(window.location.href.slice(28));
    // const [urlCallSID, setUrlCallSID] = React.useState(window.location.href.slice(29 + window.location.href.slice(28).indexOf('/')));
    const [callUrlFirst, setCallUrlFirst] = React.useState(true);

    const handleChange = panel => (event, newExpanded) => {
        setUrlExpanded(newExpanded ? panel : false);
      };
      (() => {
          if(callUrlFirst){
            setCallUrlFirst(false);
            props.handleAddLogDetail(null, urlExpanded)
          }
      })();
    
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <InputBase 
                            placeholder="Search..."
                            className={[classes.inputRoot, classes.inputInput].join(' ')}
                            inputProps = {{'arial-label': 'search'}}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className = {[classes.gridContainer, classes.space].join(' ')}>
                        <Toolbar className={classes.toolbar}>
                            <Typography className={classes.heading}>ID</Typography>
                            <Typography className={classes.heading}>First Name</Typography>
                            <Typography className={classes.heading}>Last Name</Typography>
                            <Typography className={classes.heading}>Phone Number</Typography>
                            <Typography className={classes.heading}>Call Status</Typography>
                            <Typography className={classes.heading}>Actions</Typography>
                        </Toolbar>
                        </Paper>
                            {(urlShow ? props.callLogs.filter(item => item.CALLSID == urlShow) : props.callLogs).map((item, count = 0) => {
                                return (
                                    <ExpansionPanel
                                        expanded = {urlExpanded == item.CALLSID}
                                        className={classes.expansionBase}
                                        onChange = {handleChange(item.CALLSID)}
                                        onClick = {() => props.handleAddLogDetail(item.LOGID, item.CALLSID)}>
                                        <ExpansionPanelSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1bh-content"
                                            id="panel1bh-header"
                                        >
                                            <Typography className={classes.collapseBody}>{++count}</Typography>
                                            <Typography className={classes.collapseBody}>{item.FNAME.charAt(0).toUpperCase() + item.FNAME.slice(1)}</Typography>
                                            <Typography className={classes.collapseBody}>{item.LNAME.charAt(0).toUpperCase() + item.LNAME.slice(1)}</Typography>
                                            <Typography className={classes.collapseBody}>{item.PHONE}</Typography>
                                            <Typography className={classes.collapseBody}>
                                                <CallStatusComponent 
                                                    status = {item.CALLSTATUS}
                                                />
                                            </Typography>
                                            <Typography className={classes.collapseBody}>Actions</Typography>
                                        </ExpansionPanelSummary>
                                        <ExpansionPanelDetails style={{display:"flex",justifyContent:"center",alignItems:"center", width:"100%"}}>
                                            <CallLogsSchema 
                                                logDetails = {props.logDetails}
                                                handleAddLogDetail = {props.handleAddLogDetail}
                                                callLog = {item}
                                            />
                                        </ExpansionPanelDetails>
                                    </ExpansionPanel>
                                )
                            })}
                            
                            
                    
                    
                </Grid>
            </Grid>
        </div>
    )
}