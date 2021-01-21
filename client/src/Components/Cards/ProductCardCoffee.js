import React from "react";

const ProductCardCoffee = (props) => {
    return (
        <div data-testid={'product-card-wrapper-test'}>
            <div data-testid={'card-image-wrapper-test'}>
                <img data-testid={'card-image-element-test'}/>
            </div>
            <div data-testid={'card-text-wrapper-test'}>
                <div data-testid={'product-name-element-test'}></div>
                <div data-testid={'card-product-description-test'}></div>
                <div data-testid={"card-product-price-and-weight-wrapper-test"}></div>
            </div>
        </div>
    )
}

export default ProductCardCoffee;
