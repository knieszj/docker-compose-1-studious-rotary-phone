import React, {useEffect, useState} from 'react'
import ImgMediaCard from "../Cards/MediaCard";

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
                }
            })
            .catch(error => console.log("fetch error", error))

        return () => {
            isActive = false;
        }
    }, [])

    let mediaCard = () => {
        return coffeeBeanList.map(coffeeBeanData => {
            return (
                <>
                    {`${coffeeBeanData.name} \n`}
                </>
            )
        })
    }


    return (

        <div data-testid={`resolution-page-main-wrapper-test`}>
            {temporaryText}
            {mediaCard()}

        </div>
    )
};

export default ResolutionPage
