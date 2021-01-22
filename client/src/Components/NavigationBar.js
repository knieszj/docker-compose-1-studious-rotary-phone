import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";


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
        <div data-testid={"navigation-bar-test"} className={classes.root}>
            <Link to={`/home`}>
                <Button
                    variant="outlined"
                    color="primary"
                    data-testid={"go-home-button"}
                >
                    Go Home
                </Button>
            </Link>
            <Link to={'/journey'}>
                <Button
                    variant="outlined"
                    color="primary"
                    data-testid={'journey-button-nav-element-test'}
                >
                    Journey
                </Button>
            </Link>
            <Link to={`/problem`}>
                <Button
                    variant="outlined"
                    color="primary"
                    data-testid={'problem-button-nav-element-test'}
                >
                    Problem
                </Button>
            </Link>
            <Link to={`/resolution`}>
                <Button
                    variant="outlined"
                    color="primary"
                    data-testid={'resolution-button-nav-element-test'}
                >
                    Resolution
                </Button>
            </Link>
        </div>
    )
}


export default NavigationBar;

