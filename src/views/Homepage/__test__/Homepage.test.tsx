import React from "react";
import { render, screen } from "~utils/test-utils";

import Homepage from "../homepage";

describe("<Homepage />", () => {
  it("renders a homepage", () => {
    render(<Homepage />);

    const heading = screen.getByText("Homepage");

    expect(heading).toBeInTheDocument();
    expect(heading).toMatchSnapshot();
  });
});
