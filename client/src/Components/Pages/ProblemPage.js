import React from 'react'

const ProblemPage = () => {

    const tempText = `Lorem ipsum dolor sit amet.`

    return(
        <div data-testid={`problem-page-wrapper-test`}>
            {tempText.split('').reverse().join('')}
        </div>
    )
}

export default ProblemPage;
