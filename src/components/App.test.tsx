import * as React from "react";
import { renderWithStore } from "../test-utils";
import App from "./App";

test("renders learn react link", () => {
  const { getByText } = renderWithStore(<App />);
  const buttonElement = getByText(/Hello/i);
  expect(buttonElement).toBeInTheDocument();
});
