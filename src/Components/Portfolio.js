import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    expandedPanel: {
        backgroundColor: theme.palette.primary.main
    }
}));

export default function Portfolio() {
    const classes = useStyles();

    return (
        <section id = 'portfolio'>
        <Typography component="h1" variant="h1" align="center" color="textPrimary" gutterBottom>FAQs</Typography>
        <div className={classes.root}>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    classes={{ expanded: classes.expandedPanel }}
                >
                    <Typography variant="h4">What all dishes can the product cook?</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography variant="h5">
                        Foodin' can cook almost all types of curries.
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    classes={{ expanded: classes.expandedPanel }}
                >
                    <Typography variant="h4">Is the product food safe?</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography variant="h5">
                        All the materials used in foodin' are food safe.
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    classes={{ expanded: classes.expandedPanel }}
                >
                    <Typography variant="h4">Where can I buy the product?</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails >
                    <Typography variant="h5">
                        You can book the product on our website or via email. You can also reach out to us at our office or call us.
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    classes={{ expanded: classes.expandedPanel }}
                >
                    <Typography variant="h4">How big is foodin'?</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography variant="h5">
                        It is the size of your microwave and can easily fit on the kitchen counter.
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
        </section>
    );
}
