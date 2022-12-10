import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import CustomTimePicker from "../components/Clock/CustomTimePicker";

test("checks the text of timepicker", async () => {
  render(<CustomTimePicker light={true} />);

  expect(
    screen.getByLabelText("Set Time")
  ).toBeInTheDocument();
});

test("checks the text of timepicker 2", async () => {
  render(<CustomTimePicker light={false} />);

  expect(screen.getByLabelText("Sleep well :)")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("hh:mm")).toBeDisabled();
});
