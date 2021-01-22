import React from 'react'

const randomText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore illum impedit itaque labore natus nobis nostrum optio quia recusandae rerum? Delectus doloribus est illum nesciunt nulla quisquam? Accusamus, at labore?"
const Journey = () =>{

    return(
        <div data-testid={'journey-wrapper-element-test'}>
            <div data-testid={'journey-text-wrapper-test'}>
                {randomText}
            </div>
        </div>
    )
}

export default Journey;
