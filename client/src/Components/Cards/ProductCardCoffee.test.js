import {render, screen, fireEvent, within} from '@testing-library/react';
import ProductCardCoffee from "./ProductCardCoffee";

//  HERE IS HOW THE CARD IS DESIGNED
// <div> wrapper
//   |- <div> image div wrapper
//        |- <img> product image
//   |- <div> wrapper for text
//        | - <div> product name
//        | - <div> product description
//        | - <div> product weight & price

describe(`The Product Card for Coffee has`, () => {
    beforeEach(() => render(<ProductCardCoffee/>))

    test(`Should have a div container which will wrap the child elements`, () => {
        const wrapperDiv = screen.getByTestId('product-card-wrapper-test');
        expect(wrapperDiv).toBeInTheDocument();
    })

    test(`an initial div (within the div wrapper) that will hold the card image element`, () => {
        const subWrapperDiv = screen.getByTestId('card-image-wrapper-test');
        expect(subWrapperDiv).toBeInTheDocument();
    })

    test(`a second div which will wrap the text information for the card`, () => {
        const secondSubWrapperDiv = screen.getByTestId('card-text-wrapper-test');
        expect(secondSubWrapperDiv).toBeInTheDocument();
    })

    test(`the main div wrapper element contains two divs which wrap the card's image and the card's text`, () => {
        const wrapperDiv = screen.getByTestId('product-card-wrapper-test');
        const subWrapperDiv = screen.getByTestId('card-image-wrapper-test');
        const secondSubWrapperDiv = screen.getByTestId('card-text-wrapper-test');
        expect(wrapperDiv).toContainElement(subWrapperDiv);
        expect(wrapperDiv).toContainElement(secondSubWrapperDiv);
    })

    test(`an image element`, () => {
        const imageElement = screen.getByTestId('card-image-element-test');
        expect(imageElement).toBeInTheDocument();
    })

    test(`the image element within the "card-image-wrapper" test-id element`, () => {
        const subWrapperDiv = screen.getByTestId('card-image-wrapper-test');
        const imageElement = screen.getByTestId('card-image-element-test');
        expect(subWrapperDiv).toContainElement(imageElement);
    })

    test(`an element which houses the product name`, () => {
        const productNameElement = screen.getByTestId('product-name-element-test');
        expect(productNameElement).toBeInTheDocument();
    })

    test(`the 'product-name-element-test' data-testid element resides in the 'card-text-wrapper-test'`, () => {
        const secondSubWrapperDiv = screen.getByTestId('card-text-wrapper-test');
        const productNameElement = screen.getByTestId('product-name-element-test');
        expect(secondSubWrapperDiv).toContainElement(productNameElement);
    })

    test(`an element which houses the product's description`, () => {
        const productDescriptionText = screen.getByTestId('card-product-description-test');
        expect(productDescriptionText).toBeInTheDocument();
    })

    test(`the 'card-product-description-test' data-testid element resides in the 'card-text-wrapper-test'`, () => {
        const secondSubWrapperDiv = screen.getByTestId('card-text-wrapper-test');
        const productDescriptionText = screen.getByTestId('card-product-description-test');
        expect(secondSubWrapperDiv).toContainElement(productDescriptionText);
    })

    test(`an element which houses the product's price and weight`, () => {
        const productPriceAndWeightWrappingElement = screen.getByTestId('card-product-price-and-weight-wrapper-test');
        expect(productPriceAndWeightWrappingElement).toBeInTheDocument();
    })

    test(`the product's wrapping element for weight and price resides in 'card-text-wrapper-test' data-testid element`, () => {
        const secondSubWrapperDiv = screen.getByTestId('card-text-wrapper-test');
        const productPriceAndWeightWrappingElement = screen.getByTestId('card-product-price-and-weight-wrapper-test');
        expect(secondSubWrapperDiv).toContainElement(productPriceAndWeightWrappingElement);
    })

})
