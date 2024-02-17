import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ProductCard from "../component/ProductCard";
import renderer from "react-test-renderer";

describe("ProductCard component", () => {
  const product = {
    _id: "69b3258a-faf1-43af-a32a-41ad4e03b329",
    productName: "Shoe1",
    images: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/63c77c04dc6448548ccbae880189e107_9366/Galaxy_6_Shoes_Black_GW3848_01_standard.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/63c77c04dc6448548ccbae880189e107_9366/Galaxy_6_Shoes_Black_GW3848_01_standard.jpg",
    ],
    productDesc: "Great shoe",
    sizes: [
      {
        size: "5",
        price: 599,
        _key: "17dd79cacd2a",
        offerPrice: 499,
      },
    ],
  };

  it("renders without crashing", () => {
    const productCard = render(
      <MemoryRouter>
        <ProductCard product={product} />
      </MemoryRouter>
    );
    expect(productCard).toMatchSnapshot();
  });

  it("changes the URL pathname when NavLink is clicked", () => {
    const { container } = render(
      <MemoryRouter>
        <ProductCard product={product} />
      </MemoryRouter>
    );

    const navLink = container.querySelector("a"); // Find the NavLink element

    fireEvent.click(navLink); // Simulate click on the NavLink
    setTimeout(() => {
      expect(window.location.pathname).toBe(
        `/productpage/${product.productId}`
      );
    }, 100);

    // Assert that the URL pathname has been updated
  });

  it('renders the "Details" button', () => {
    render(
      <MemoryRouter>
        <ProductCard product={product} />
      </MemoryRouter>
    );

    expect(screen.getByText("Details")).toBeInTheDocument();
  });

  it('performs expected action when "Details" button is clicked', async () => {
    const mockOnClick = jest.fn();
    const { container, history } = render(
      <MemoryRouter>
        <ProductCard product={product} onClick={mockOnClick} />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText("Details"));
    // Check that the correct path is navigated to
    setTimeout(() => {
      expect(history.location.pathname).toBe(
        `/productpage/${product.productId}`
      );
    }, 100);
  });
});
