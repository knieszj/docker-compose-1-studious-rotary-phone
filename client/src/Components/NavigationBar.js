import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";


const NavigationBar = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
    }));

    const classes = useStyles();

    return (
        <Router>
            <div data-testid={"navigation-bar-test"} className={classes.root}>
                <Button
                    variant="outlined"
                    color="primary"
                    href="#outlined-buttons"
                    data-testid={"go-home-button"}
                >
                    Go Home
                </Button>
                <Button
                    variant="outlined"
                    color="primary"
                    href="#outlined-buttons"
                    data-testid={'first-nav-element-test'}
                >
                    Journey
                </Button>
                <Button
                    variant="outlined"
                    color="primary"
                    href="#outlined-buttons"
                    data-testid={'second-nav-element-test'}
                >
                    Problem
                </Button>
                <Button
                    variant="outlined"
                    color="primary"
                    href="#outlined-buttons"
                    data-testid={'third-nav-element-test'}
                >
                    Resolution
                </Button>
            </div>
        </Router>
    )
}


export default NavigationBar;

