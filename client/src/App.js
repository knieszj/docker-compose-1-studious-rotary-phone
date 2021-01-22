import './App.css';
import {useState} from "react";
import {BrowserRouter as Router, Link, Switch, Route, Redirect} from "react-router-dom";
import NavigationBar from "./Components/NavigationBar";
import LandingPage from "./Components/Pages/LandingPage";
import Journey from "./Components/Pages/Journey";


const App = () => {

    return (
        <div className="App" data-testid={"main-div-test"}>
            <Router>
                <NavigationBar/>
                <Switch>
                    <Route exact path={'/'}>
                        <Redirect to={'/home'}/>
                    </Route>
                    <Route path={`/journey`}>
                        <Journey/>
                    </Route>
                    <Route path={`/home`}>
                        <LandingPage/>
                    </Route>
                </Switch>

            </Router>
        </div>
    );
}

export default App;
