import React from "react";

const NavigationBar = () => {
    return (
        <div data-testid={"navigation-bar-test"}>
            <div data-testid={"go-home-button"}>Go Home</div>
            <div data-testid={'first-nav-element-test'}>first</div>
            <div data-testid={'second-nav-element-test'}>second</div>
            <div data-testid={'third-nav-element-test'}>third</div>
        </div>
    )
}

export default NavigationBar;

