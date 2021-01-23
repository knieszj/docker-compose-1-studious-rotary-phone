import React from 'react'

const ResolutionPage = () =>{

    const temporaryText = `Lorem ipsum dolor sit amet, consectetur.`

    return(
        <div data-testid={`resolution-page-main-wrapper-test`}>
            {temporaryText.split('').sort((a, b) => a-b).join('')}
        </div>
    )
}

export default ResolutionPage
