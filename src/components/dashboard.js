import React from 'react';
import { ResponsiveBump } from '@nivo/bump'
import { ResponsiveLine } from '@nivo/line';

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
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


import useStyles from '../themes/dashboardTheme';

export default function HandleDashboard(props){
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container xs={12} spacing={2}>
                <Grid item xs={6} md={3}>
                    <Paper className={[classes.paper,classes.card1].join(' ')} elevation={0} style={{border:"none"}}>
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
                            {props.cards.totalSub}
                        </Typography>
                        <Typography
                            variant="h6"
                            className={classes.cardFooter}
                        >
                            {((props.cards.sub2 - props.cards.sub1) <= props.cards.sub1) ? <ExpandLessIcon/>: <ExpandMoreIcon/> }{Math.round(Math.abs(((props.cards.sub2 - 2 * props.cards.sub1) / (props.cards.sub2 - props.cards.sub1)) * 100))}% from last week
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Paper className={[classes.paper,classes.card2].join(' ')} elevation={0}>
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
                            {props.cards.totalNumber}
                        </Typography>
                        <Typography
                            variant="h6"
                            className={classes.cardFooter}
                        >
                            {((props.cards.number2 - props.cards.number1) <= props.cards.number1) ? <ExpandLessIcon/>: <ExpandMoreIcon/> }{Math.round(Math.abs(((props.cards.number2 - 2 * props.cards.number1) / (props.cards.number2 - props.cards.number1)) * 100))}% from last week
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Paper className={[classes.paper,classes.card3].join(' ')} elevation={0}>
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
                            {props.cards.totalCall}
                        </Typography>
                        <Typography
                            variant="h6"
                            className={classes.cardFooter}
                        >
                            {((props.cards.call2 - props.cards.call1) <= props.cards.call1) ? <ExpandLessIcon/>: <ExpandMoreIcon/> }{Math.round(Math.abs(((props.cards.call2 - 2 * props.cards.call1) / (props.cards.call2 - props.cards.call1)) * 100))}% from last week
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Paper className={[classes.paper,classes.card4].join(' ')} elevation={0}>
                        <Typography
                            variant="h6"
                            className={classes.cardTitle}
                        >
                            <PhonelinkEraseOutlinedIcon fontSize="inherit" /> Failed Call
                        </Typography>
                        <Typography
                            variant="body1"
                            className={classes.cardBody}
                        >
                            {props.cards.totalFailed}
                        </Typography>
                        <Typography
                            variant="h6"
                            className={classes.cardFooter}
                        >
                            {((props.cards.failed2 - props.cards.failed1) <= props.cards.failed1) ? <ExpandLessIcon/>: <ExpandMoreIcon/> }{Math.round(Math.abs(((props.cards.failed2 - 2 * props.cards.failed1) / (props.cards.failed2 - props.cards.failed1)) * 100))}% from last week
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Paper  style={{height:"400px"}} elevation={0}>
                    <ResponsiveLine
                        data={Array(props.graph)}
                        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                        xScale={{ type: 'point' }}
                        yScale={{ type: 'linear', stacked: true, min: 'auto', max: 'auto' }}
                        curve="linear"
                        axisTop={null}
                        axisRight={null}
                        axisBottom={{
                            orient: 'bottom',
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: 'Date',
                            legendOffset: 36,
                            legendPosition: 'middle'
                        }}
                        axisLeft={{
                            orient: 'left',
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: 'Count',
                            legendOffset: -40,
                            legendPosition: 'middle'
                        }}
                        enableGridX={false}
                        colors={{ scheme: 'nivo' }}
                        pointSize={10}
                        pointColor={{ from: 'color', modifiers: [] }}
                        pointBorderWidth={2}
                        pointBorderColor={{ from: 'serieColor' }}
                        pointLabel="y"
                        pointLabelYOffset={-12}
                        useMesh={true}
                        legends={[
                            {
                                anchor: 'bottom-right',
                                direction: 'column',
                                justify: false,
                                translateX: 100,
                                translateY: 0,
                                itemsSpacing: 0,
                                itemDirection: 'left-to-right',
                                itemWidth: 80,
                                itemHeight: 20,
                                itemOpacity: 0.75,
                                symbolSize: 12,
                                symbolShape: 'circle',
                                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                                effects: [
                                    {
                                        on: 'hover',
                                        style: {
                                            itemBackground: 'rgba(0, 0, 0, .03)',
                                            itemOpacity: 1
                                        }
                                    }
                                ]
                            }
                        ]}
                    />
                    </Paper>
                </Grid>
            </Grid>
            
        </div>

    )
}
