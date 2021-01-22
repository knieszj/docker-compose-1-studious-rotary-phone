import './App.css';
import {useState} from "react";
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import NavigationBar from "./Components/NavigationBar";
import LandingPage from "./Components/Pages/LandingPage";
import Journey from "./Components/Pages/Journey";


const App = () => {

    return (
        <div className="App" data-testid={"main-div-test"}>
            <Router>
                <NavigationBar/>
                <Switch>
                    <Route exact path={`/`}>
                        <LandingPage/>
                    </Route>
                    <Route path={`/journey`}>
                        <Journey/>
                    </Route>
                </Switch>

            </Router>
        </div>
    );
}

export default App;
