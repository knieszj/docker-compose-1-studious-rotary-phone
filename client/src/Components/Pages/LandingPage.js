import React from 'react';

const LandingPage = () =>{
    const titleTextContent = `Kay Zee's Historic Spices`
    const subtitleTextContent = `Experience History Today`

    return (
        <div data-testid={'landingpage-main-wrapper-div-test'}>
            <div data-testid={'landingpage-title-text-test'}>
                {titleTextContent}
            </div>
            <div data-testid={'landingpage-subtitle-text-test'}>
                {subtitleTextContent}
            </div>
        </div>
    )
}

export default LandingPage;
