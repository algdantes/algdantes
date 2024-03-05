import React from "react"
import {screen, render} from "@testing-library/react"

import {NewJoinersWidget} from "./new-joiners-widget";

describe("NewJoinersWidget", () => {
    it("should render the component", () => {
        render(<NewJoinersWidget contentLanguage="en_US" message="World"/>);

        expect(screen.getByText(/Hello World/)).toBeInTheDocument();
    })
})
