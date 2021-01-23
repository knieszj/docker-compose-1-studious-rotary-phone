import {render, screen, fireEvent, within} from '@testing-library/react';
import ResolutionPage from "./ResolutionPage";

describe(`The Resolution Page `,()=>{
    beforeEach(()=>render(<ResolutionPage/>))

    test(`has a main html element that will wrap other elements`,()=>{
        const mainResolutionWrapper = screen.getByTestId(`resolution-page-main-wrapper-test`)
        expect(mainResolutionWrapper).toBeInTheDocument()
    })

})
