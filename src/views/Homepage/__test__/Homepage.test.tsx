import React from "react";
import { render, screen } from "~utils/index";

import Homepage from "../Homepage";

describe("<Homepage />", () => {
  it("renders a homepage", () => {
    render(<Homepage />);

    const heading = screen.getByText("Homepage");

    expect(heading).toBeInTheDocument();
    expect(heading).toMatchSnapshot();
  });
});
