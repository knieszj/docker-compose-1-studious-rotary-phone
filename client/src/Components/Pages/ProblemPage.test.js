import {render, screen, fireEvent, within, waitFor} from '@testing-library/react';
import ProblemPage from "./ProblemPage";
import {unmountComponentAtNode} from "react-dom";

describe(`The Problem Page has`, () => {
    let container = null;
    beforeEach(() => {
        container = document.createElement("div");
        document.body.appendChild(container);
        render(<ProblemPage/>)
    })
    afterEach(() => {
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    })


    test(`a main wrapper element`, () => {
        const mainWrapper = screen.getByTestId(`problem-page-wrapper-test`)
        expect(mainWrapper).toBeInTheDocument()
    })

})
