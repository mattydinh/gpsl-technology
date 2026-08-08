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

describe("TechnologyPage — Monolith", () => {
  test("wraps content in technology surface", () => {
    const { container } = render(<TechnologyPage />);
    expect(container.querySelector('[data-surface="technology"]')).not.toBeNull();
  });

  test("hero shows division kicker and Monolith headline", () => {
    render(<TechnologyPage />);
    expect(screen.getByText(/division 02 \/\/ technology/i)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /software that ships/i, level: 1 })
    ).toBeInTheDocument();
  });

  test("hero CTAs link to technology contact and Cornerstone anchor", () => {
    render(<TechnologyPage />);
    const contact = screen.getAllByRole("link", { name: /initiate contact/i })[0];
    expect(contact).toHaveAttribute("href", "/contact?topic=technology");
    const explore = screen.getByRole("link", { name: /explore cornerstone/i });
    expect(explore).toHaveAttribute("href", "#cornerstone");
  });

  test("services grid lists the three offerings with forward-deployed leading", () => {
    render(<TechnologyPage />);
    expect(
      screen.getByRole("heading", { name: /forward-deployed/i, level: 3 })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /full-lifecycle/i, level: 3 })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /maintenance/i, level: 3 })
    ).toBeInTheDocument();
    // Forward-deployed carries the most weight — its manifesto line is present
    expect(screen.getByText(/no prototypes in prod/i)).toBeInTheDocument();
    expect(screen.getByText(/not a ticket queue/i)).toBeInTheDocument();
  });

  test("page keeps banned content out", () => {
    const { container } = render(<TechnologyPage />);
    expect(container.querySelector("#philosophy")).toBeNull();
    const text = (container.textContent ?? "").toLowerCase();
    expect(text).not.toContain("philosophy");
    const links = Array.from(container.querySelectorAll("a"));
    links.forEach((link) => {
      const href = link.getAttribute("href") ?? "";
      expect(href.startsWith("/portfolio")).toBe(false);
    });
  });
});
