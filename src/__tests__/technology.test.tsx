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

  test("Cornerstone spotlight is present with anchor and real facts", () => {
    const { container } = render(<TechnologyPage />);
    expect(container.querySelector("#cornerstone")).not.toBeNull();
    expect(
      screen.getByRole("heading", { name: /cornerstone/i, level: 2 })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/ai crm for frontline insurance agents/i)
    ).toBeInTheDocument();
    // Fact blocks — real, defensible claims only
    expect(screen.getByText(/live in production/i)).toBeInTheDocument();
    expect(screen.getByText(/rag \+ knowledge graph/i)).toBeInTheDocument();
    expect(screen.getByText(/fna engine/i)).toBeInTheDocument();
    expect(screen.getByText(/claude-powered/i)).toBeInTheDocument();
  });

  test("Cornerstone links out to cornerstone.gold", () => {
    render(<TechnologyPage />);
    const link = screen.getByRole("link", { name: /cornerstone\.gold/i });
    expect(link).toHaveAttribute("href", "https://cornerstone.gold");
  });

  test("projects index keeps #shipped anchor and demotes the small projects", () => {
    const { container } = render(<TechnologyPage />);
    expect(container.querySelector("#shipped")).not.toBeNull();
    expect(screen.getByText(/legacycompass/i)).toBeInTheDocument();
    expect(screen.getByText(/meridian/i)).toBeInTheDocument();
    expect(screen.getByText(/luxusai/i)).toBeInTheDocument();
    // They are rows, not feature cards — no h3 headings for them
    expect(
      screen.queryByRole("heading", { name: /legacycompass/i, level: 3 })
    ).toBeNull();
    // Framed as demos
    expect(screen.getAllByText(/demo/i).length).toBeGreaterThanOrEqual(3);
  });

  test("no fabricated metrics appear", () => {
    const { container } = render(<TechnologyPage />);
    const text = (container.textContent ?? "").toLowerCase();
    expect(text).not.toContain("soc2");
    expect(text).not.toContain("99.9%");
    expect(text).not.toContain("45ms");
    expect(text).not.toMatch(/\bslas?\b/);
  });

  test("how-we-build section keeps the Claude Partner Network callout", () => {
    render(<TechnologyPage />);
    expect(screen.getAllByText(/claude partner network/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/the stack/i)).toBeInTheDocument();
  });

  test("terminal CTA renders the prompt and links to technology contact", () => {
    render(<TechnologyPage />);
    expect(screen.getByText(/root@gpsl:~\$/)).toBeInTheDocument();
    const links = screen.getAllByRole("link", { name: /initiate contact/i });
    links.forEach((link) => {
      expect(link).toHaveAttribute("href", "/contact?topic=technology");
    });
    expect(links.length).toBeGreaterThanOrEqual(2); // hero + terminal CTA
  });
});
