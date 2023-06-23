import { render, screen } from "@testing-library/react";
import Navbar from "../pages/components/Navbar";
import "@testing-library/jest-dom/extend-expect";

// Teste: exibir os links corretamente
describe("Navbar", () => {
    test("exibe os links corretamente", () => {
      render(<Navbar />);
      // Obtendo os elementos que contêm os textos "Home" e "New Note"  
      const homeLink = screen.getByText("Home");
      const newNoteLink = screen.getByText("New Note");
    
      expect(homeLink).toBeInTheDocument();
      expect(newNoteLink).toBeInTheDocument();
    });
  });
