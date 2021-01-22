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

                <Button
                    variant="outlined"
                    color="primary"
                    data-testid={"go-home-button"}
                >
                    <Link to={`/`}>
                        Go Home
                    </Link>
                </Button>


                <Button
                    variant="outlined"
                    color="primary"
                    data-testid={'first-nav-element-test'}
                >
                    <Link to={'/journey'}>
                        Journey
                    </Link>
                </Button>


                <Button
                    variant="outlined"
                    color="primary"
                    data-testid={'second-nav-element-test'}
                >
                    <Link to={`/problem`}>
                        Problem
                    </Link>
                </Button>


                <Button
                    variant="outlined"
                    color="primary"
                    data-testid={'third-nav-element-test'}
                >
                    <Link to={`/resolution`}>
                        Resolution
                    </Link>
                </Button>

            </div>
    )
}


export default NavigationBar;

