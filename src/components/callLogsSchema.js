import React from 'react';
import clsx from 'clsx';

//Material-ui Core
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import StepConnector from '@material-ui/core/StepConnector';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider'

//Material-ui Icons
import PhoneForwardedIcon from '@material-ui/icons/PhoneForwarded';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import { Typography } from '@material-ui/core';


const QontoConnector = withStyles({
    alternativeLabel: {
      top: 10,
      left: 'calc(-50% + 16px)',
      right: 'calc(50% + 16px)',
    },
    active: {
      '& $line': {
        borderColor: '#784af4',
      },
    },
    completed: {
      '& $line': {
        borderColor: '#784af4',
      },
    },
    line: {
      borderColor: '#eaeaf0',
      borderTopWidth: 3,
      borderRadius: 1,
    },
  })(StepConnector);

  const useQontoStepIconStyles = makeStyles({
    root: {
      color: '#eaeaf0',
      display: 'flex',
      alignItems: 'center',
      width:"100%",
      background:"transparent",
      justifyContent:"center"
    },
    active: {
      color: '#784af4',
    },
    circle: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      backgroundColor: 'currentColor',
    },
    completed: {
      color: '#784af4',
      zIndex: 1,
      fontSize: 18,
    },
  });

export default function CallLogsSchema(props){
    const classes = useQontoStepIconStyles();
    const [isLoading, setIsLoading] = React.useState(true);

    return(
        <div className={classes.root}>
            {props.logDetails.filter(item => item.LOG.data.data.sid == props.callLog.CALLSID).length != 0 ? null: <p style={{color:"black"}}>Loading...</p>}
            {props.logDetails.map((item, count=0) => {
                if(item.LOG.data.data.sid == props.callLog.CALLSID){
                    return (
                      <div style={{display:"flex", width:"100%",alignItems:"center", justifyContent:"center",flexDirection:"column",border:"1px solid silver", borderRadius:"10px",}}>
                        <Toolbar style={{ width:"100%",color:"black", }}>
                          <Typography variant="body1" style={{marginRight:"50px",fontSize:"17px"}}><b>Duration:</b> <small>{item.LOG.data.data.duration} seconds</small></Typography>
                          {/* <Typography variant="body1" style={{fontSize:"17px"}}><b>Form Name: </b><small>METU MD Donation Event Participation Form</small></Typography> */}
                        </Toolbar>
                        <hr style={{width:"calc(100% - 48px)", marginTop:"-15px"}}/>
                        <Stepper connector={<QontoConnector />} style={{minWidth:"100%",marginTop: "30px", backgroundColor:"transparent"}}>
                            <Step>
                                <StepLabel StepIconComponent={DoneIcon}>Call initialized at {item.LOG.data.data.dateCreated.slice(0,10)} | {item.LOG.data.data.dateCreated.slice(11,19)}</StepLabel>
                            </Step>
                            <Step>
                                <StepLabel StepIconComponent={DoneIcon}>Call answered at {item.LOG.data.data.startTime.slice(0,10)} | {item.LOG.data.data.startTime.slice(11,19)}</StepLabel>
                            </Step>
                            <Step>
                                <StepLabel StepIconComponent={props.callLog.CALLSTATUS == "Success" ? DoneIcon : CloseIcon}>Call end at {item.LOG.data.data.endTime.slice(0,10)} | {item.LOG.data.data.endTime.slice(11,19)}</StepLabel>
                            </Step>
                        </Stepper>
                      </div>
                    )
                }

            })}
            
        </div>
    )
}