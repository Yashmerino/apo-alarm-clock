import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import SleepButton from "../components/Clock/SleepButton";

test("checks the text of button", async () => {
  render(<SleepButton light={true} sleeping={false} />);

  expect(screen.getByRole("button")).toHaveTextContent("Go to Sleep");
});

test("checks the text of button 2", async () => {
  render(<SleepButton light={false} sleeping={true} />);

  expect(screen.getByRole("button")).toHaveTextContent("Wake up");
});
