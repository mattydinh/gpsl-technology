import { render, screen } from "@testing-library/react";
import ExecutionPage from "@/app/execution/page";

jest.mock("next/link", () => {
  return function MockLink({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
  }) {
    return <a href={href} {...props}>{children}</a>;
  };
});

describe("ExecutionPage", () => {
  test("wraps content in operating surface", () => {
    const { container } = render(<ExecutionPage />);
    expect(container.querySelector('[data-surface="operating"]')).not.toBeNull();
  });

  test("hero shows division eyebrow", () => {
    render(<ExecutionPage />);
    expect(screen.getByText(/division 01 — execution/i)).toBeInTheDocument();
  });

  test("hero shows the operating-arm headline", () => {
    render(<ExecutionPage />);
    expect(
      screen.getByRole("heading", { name: /the operating arm of gpsl/i, level: 1 })
    ).toBeInTheDocument();
  });

  test("hero has primary services anchor and secondary contact link", () => {
    render(<ExecutionPage />);
    const services = screen.getByRole("link", { name: /see what we do/i });
    expect(services).toHaveAttribute("href", "#services");
    const contact = screen.getByRole("link", { name: /start a conversation/i });
    expect(contact).toHaveAttribute("href", "/contact?topic=execution");
  });
});
