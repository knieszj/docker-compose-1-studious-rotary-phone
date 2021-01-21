import React from "react";

const NavigationBar = () => {
    return (
        <div data-testid={"navigation-bar-test"}>
            <div data-testid={"go-home-button"}>Go Home</div>
            <div data-testid={'first-nav-element-test'}>Journey</div>
            <div data-testid={'second-nav-element-test'}>Problem</div>
            <div data-testid={'third-nav-element-test'}>Resolution</div>
        </div>
    )
}

export default NavigationBar;

