import './App.css';
import {useState} from "react";
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import NavigationBar from "./Components/NavigationBar";
import LandingPage from "./Components/Pages/LandingPage";


const App = () => {

    return (
        <div className="App" data-testid={"main-div-test"}>
            <Router>
                <NavigationBar/>
                <Switch>
                    <Route exact path={'/'}>
                        <LandingPage/>
                    </Route>
                </Switch>

            </Router>
        </div>
    );
}

export default App;
