import { render, screen } from "@testing-library/react";
import { Cart } from "./Cart";



jest.mock("react-redux");

describe("Cart > Unit tests", () => {
  it("should render an empty cart correctly", () => {
    render(<Cart showCart={true} cart={[]} />);

    const titleElement = screen.getByRole("heading", { level: 1 });

    const totalElement = screen.getByTestId("total");

    const cartListElement = screen.getByRole("list");

    expect(titleElement).toHaveTextContent("Carrinho");
    expect(totalElement).toHaveTextContent("$0");
    expect(cartListElement).toBeEmptyDOMElement();
  });
});
