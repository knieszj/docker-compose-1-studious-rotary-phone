import './App.css';
import {useState} from "react";
import {Router as BrowserRouter, Link, Switch, Route} from "react-router-dom";
import NavigationBar from "./Components/NavigationBar";

const App = () => {



    return (
            <div className="App" data-testid={"main-div-test"}>
                <NavigationBar/>

            </div>
    );
}

export default App;
