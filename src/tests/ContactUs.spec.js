import ContactUs from "../component/ContactUs";
import { render, screen } from "@testing-library/react";

describe("contact us form", () => {
  it("should display contact us header", () => {
    render(<ContactUs />);
    const contactUsText = screen.getByText("Contact Us");
    expect(contactUsText).toBeInTheDocument();
    const nameInput = screen.getByPlaceholderText("Enter Your Name");
    expect(nameInput).toBeInTheDocument();
  });
  it("should display name email and message input labels", () => {
    render(<ContactUs />);
    const nameLabel = screen.getByText(/Name/i);
    const emailLabel = screen.getByText(/Email/i);
    const messageLabel = screen.getByText(/Message/i);
    expect(nameLabel).toBeInTheDocument();
    expect(emailLabel).toBeInTheDocument();
    expect(messageLabel).toBeInTheDocument();
  });
  it("should display name email and message input fields", () => {
    render(<ContactUs />);
    const formInputFields = screen.getAllByRole("textbox");
    expect(formInputFields).toHaveLength(3);
  });
  it("should display the submit button", () => {
    render(<ContactUs />);
    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute("type", "submit");
  });
  it("should call  submit button", () => {
    render(<ContactUs />);
    const submitButton = screen.getByRole("button");
  });
});
