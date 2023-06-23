
import Section from "../pages/components/Section";
import "@testing-library/jest-dom/extend-expect";


import { render, screen } from "@testing-library/react";

test("exibe corretamente o título da seção", () => {
  render(<Section />);

  const title = screen.getByText("Organize seu trabalho e vida, finalmente.");

  expect(title).toBeInTheDocument();
});
