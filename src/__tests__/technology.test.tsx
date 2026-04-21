import { render, screen } from "@testing-library/react";
import TechnologyPage from "@/app/technology/page";

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

describe("TechnologyPage", () => {
  test("wraps content in technology surface", () => {
    const { container } = render(<TechnologyPage />);
    expect(container.querySelector('[data-surface="technology"]')).not.toBeNull();
  });

  test("hero shows division eyebrow and headline", () => {
    render(<TechnologyPage />);
    expect(screen.getByText(/division 02 — technology/i)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /agentic software, shipped/i, level: 1 })
    ).toBeInTheDocument();
  });

  test("hero CTAs anchor to flagships and link to technology contact", () => {
    render(<TechnologyPage />);
    const flagships = screen.getByRole("link", { name: /see what we ship/i });
    expect(flagships).toHaveAttribute("href", "#flagships");
    const engage = screen.getByRole("link", { name: /engage the team/i });
    expect(engage).toHaveAttribute("href", "/contact?topic=technology");
  });

  test("Technology flagships section lists three products", () => {
    render(<TechnologyPage />);
    expect(screen.getByText(/three products in the water/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /legacycompass/i, level: 3 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /meridian ai/i, level: 3 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /luxusai/i, level: 3 })).toBeInTheDocument();
  });

  test("Technology flagships each link to portfolio tech anchor", () => {
    render(<TechnologyPage />);
    const portfolioLinks = screen.getAllByRole("link", { name: /view in portfolio/i });
    expect(portfolioLinks.length).toBe(3);
    portfolioLinks.forEach((link) => {
      expect(link).toHaveAttribute("href", "/portfolio#tech");
    });
  });
});
