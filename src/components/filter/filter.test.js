import React from 'react';
import { render } from "@testing-library/react";
import filter from './Filter';

describe("filter tests", () => {
  it("should render", () => {
    expect(render(<filter />)).toBeTruthy();
  });
});
