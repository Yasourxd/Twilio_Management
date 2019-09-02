import React from 'react';

//Material-ui Core
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';


//Material-ui Icons
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import ContactPhoneOutlinedIcon from '@material-ui/icons/ContactPhoneOutlined';
import PhoneForwardedOutlinedIcon from '@material-ui/icons/PhoneForwardedOutlined';
import PhonelinkEraseOutlinedIcon from '@material-ui/icons/PhonelinkEraseOutlined';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';


import useStyles from '../themes/dashboardTheme';

export default function HandleDashboard(props){
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container xs={12} spacing={2}>
                <Grid item xs={6} md={3}>
                    <Paper className={[classes.paper,classes.card1].join(' ')}>
                        <Typography
                            variant="h6"
                            className={classes.cardTitle}
                        >
                            <AssignmentTurnedInOutlinedIcon fontSize="inherit" />Submissions
                        </Typography>
                        <Typography
                            variant="body1"
                            className={classes.cardBody}
                        >
                            432
                        </Typography>
                        <Typography
                            variant="h6"
                            className={classes.cardFooter}
                        >
                            <ExpandLessIcon />15% from last week
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Paper className={[classes.paper,classes.card2].join(' ')}>
                        <Typography
                            variant="h6"
                            className={classes.cardTitle}
                        >
                            <ContactPhoneOutlinedIcon fontSize="inherit" />Saved Number
                        </Typography>
                        <Typography
                            variant="body1"
                            className={classes.cardBody}
                        >
                            152
                        </Typography>
                        <Typography
                            variant="h6"
                            className={classes.cardFooter}
                        >
                            <ExpandLessIcon />7% from last week
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Paper className={[classes.paper,classes.card3].join(' ')}>
                        <Typography
                            variant="h6"
                            className={classes.cardTitle}
                        >
                            <PhoneForwardedOutlinedIcon fontSize="inherit" />Outbound Call
                        </Typography>
                        <Typography
                            variant="body1"
                            className={classes.cardBody}
                        >
                            202
                        </Typography>
                        <Typography
                            variant="h6"
                            className={classes.cardFooter}
                        >
                            <ExpandLessIcon />20% from last week
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Paper className={[classes.paper,classes.card4].join(' ')}>
                        <Typography
                            variant="h6"
                            className={classes.cardTitle}
                        >
                            <PhonelinkEraseOutlinedIcon fontSize="inherit" /> Declined Call
                        </Typography>
                        <Typography
                            variant="body1"
                            className={classes.cardBody}
                        >
                            102
                        </Typography>
                        <Typography
                            variant="h6"
                            className={classes.cardFooter}
                        >
                            <ExpandLessIcon />10% from last week
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
            
        </div>

    )
}
