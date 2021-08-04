import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "./Navbar";
import { title } from "../../containers/Navbar";

describe("Navbar Component", () => {
  it("should render Navbar titile", () => {
    const { getByTestId } = render(<Navbar />);
    const titleIdTest = getByTestId("titleId");
    expect(title).toBe(titleIdTest.textContent);
  });
  it("Navbar button click test", () => {
    const { getByTestId } = render(<Navbar />);
    const contactIdTest = screen.getByTestId("contactId");
    fireEvent.click(contactIdTest);
  });
});
