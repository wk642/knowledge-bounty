import React from "react";
import { render, describe } from "@testing-library/react";
import ListPosts from "../components/ListPosts";

describe("ListPosts", () => {
  it("renders without errors", () => {
    render(<ListPosts />);
  });
});
