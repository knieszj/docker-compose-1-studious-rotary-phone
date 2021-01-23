import React, {useEffect, useState} from 'react'

const ResolutionPage = () => {

    const temporaryText = `Lorem ipsum dolor sit amet, consectetur.`

    const [coffeeBeanList, setCoffeeBeanList] = useState([]);

    useEffect(() => {
        let isActive = true;
        fetch(
            `http://localhost:3001/api/CoffeeBeans`, {
                method: "GET"
            }
        )
            .then(response => response.json())
            .then(coffeeBeanData => {
                if (isActive) {
                    setCoffeeBeanList(coffeeBeanData)
                    console.log(coffeeBeanList)
                }
            })
            .catch(error => console.log("fetch error", error))
        return () => {
            isActive = false;
        }
    }, [])



    return (

        <div data-testid={`resolution-page-main-wrapper-test`}>
            {temporaryText}
        </div>
    )
}

export default ResolutionPage
