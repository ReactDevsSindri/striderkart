import { render, screen } from "@testing-library/react";
import App from "../App";
// import App from "./App.1";

test("renders learn react link", () => {
  const app = render(<App />);
  expect(app).toMatchSnapshot();
});
