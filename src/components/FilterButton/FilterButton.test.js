import React from 'react';
import { render } from "@testing-library/react";
import Filter from './FilterButton';

describe("filter tests", () => {
  it("should render", () => {
    expect(render(<Filter />)).toBeTruthy();
  });
});
