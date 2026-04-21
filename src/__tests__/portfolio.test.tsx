import { render, screen } from "@testing-library/react";
import PortfolioPage from "@/app/portfolio/page";

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

describe("PortfolioPage", () => {
  test("wraps content in operating surface", () => {
    const { container } = render(<PortfolioPage />);
    expect(container.querySelector('[data-surface="operating"]')).not.toBeNull();
  });

  test("hero introduces the portfolio", () => {
    render(<PortfolioPage />);
    expect(
      screen.getByRole("heading", {
        name: /what we are building, operating, and shipping/i,
        level: 1,
      })
    ).toBeInTheDocument();
  });

  test("ventures section lists three flagship ventures", () => {
    render(<PortfolioPage />);
    expect(screen.getByRole("heading", { name: /tribal bank/i, level: 3 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /tribal trade/i, level: 3 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /fishing & processing/i, level: 3 })).toBeInTheDocument();
  });

  test("ventures section has #ventures anchor", () => {
    const { container } = render(<PortfolioPage />);
    expect(container.querySelector("#ventures")).not.toBeNull();
  });

  test("Portfolio technology island lists four shipped products", () => {
    render(<PortfolioPage />);
    expect(screen.getByText(/software shipped into real operations/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /legacycompass/i, level: 3 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /meridian ai/i, level: 3 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /luxusai/i, level: 3 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /forward-deployed agent builds/i, level: 3 })).toBeInTheDocument();
  });

  test("Portfolio technology island has #tech anchor and links to /technology", () => {
    const { container } = render(<PortfolioPage />);
    expect(container.querySelector("#tech")).not.toBeNull();
    const techLink = screen.getByRole("link", { name: /go deeper on the technology division/i });
    expect(techLink).toHaveAttribute("href", "/technology");
  });
});
