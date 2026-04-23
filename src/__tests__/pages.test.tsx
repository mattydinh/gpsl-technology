import { render, screen } from "@testing-library/react";
import Home from "@/app/page";
import Contact from "@/app/contact/page";

// Mock framer-motion to avoid animation issues in tests
jest.mock("framer-motion", () => ({
  motion: {
    div: ({
      children,
      className,
    }: React.HTMLAttributes<HTMLDivElement>) => (
      <div className={className}>{children}</div>
    ),
    span: ({
      children,
      className,
    }: React.HTMLAttributes<HTMLSpanElement>) => (
      <span className={className}>{children}</span>
    ),
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
}));

// Mock next/link
jest.mock("next/link", () => {
  return function MockLink({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
  }) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  };
});

// Mock next/navigation
jest.mock("next/navigation", () => ({
  usePathname: () => "/",
  useSearchParams: () => ({ get: () => null }),
}));

describe("Home page", () => {
  it("renders the main heading", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { level: 1 })
    ).toBeInTheDocument();
  });

  test("Home hero H1 is 'Transformation needs a pathway, not just ambition.'", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /transformation needs a pathway,\s*not just ambition/i,
      })
    ).toBeInTheDocument();
  });

  test("Home kicker positions GPSL as an operating discipline", () => {
    render(<Home />);
    expect(
      screen.getByText(/GPSL\s*—\s*an operating discipline/i)
    ).toBeInTheDocument();
  });

  test("Home hero has primary and secondary CTAs to Execution and Technology", () => {
    render(<Home />);
    const howWeExecute = screen.getByRole("link", { name: /how we execute/i });
    expect(howWeExecute).toHaveAttribute("href", "/execution");
    const techDivision = screen.getByRole("link", { name: /technology division/i });
    expect(techDivision).toHaveAttribute("href", "/technology");
  });

  test("Home wraps content in data-surface='operating'", () => {
    const { container } = render(<Home />);
    expect(container.querySelector('[data-surface="operating"]')).not.toBeNull();
  });

  test("Home Why-we-exist section names the operating-layer failure", () => {
    render(<Home />);
    expect(screen.getByText(/why gpsl exists/i)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /most transformation fails in the operating layer/i,
      })
    ).toBeInTheDocument();
  });

  test("Home Origin section anchors in Tribal Economic Development", () => {
    render(<Home />);
    expect(screen.getByText(/^origin$/i)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /built inside tribal economic development/i,
      })
    ).toBeInTheDocument();
  });

  test("Home human-logistics framework section appears", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /human logistics is what we do/i,
      })
    ).toBeInTheDocument();
  });

  test("Home Two Pathways section renders Execution + Technology cards", () => {
    render(<Home />);
    expect(screen.getByText(/two pathways/i)).toBeInTheDocument();
    const execLinks = screen
      .getAllByRole("link")
      .filter((el) => el.getAttribute("href") === "/execution");
    expect(
      execLinks.some((el) => /division 01/i.test(el.textContent ?? ""))
    ).toBe(true);
    const techLinks = screen
      .getAllByRole("link")
      .filter((el) => el.getAttribute("href") === "/technology");
    expect(
      techLinks.some((el) => /division 02/i.test(el.textContent ?? ""))
    ).toBe(true);
  });

  test("Home final CTA routes to a single /contact entry point", () => {
    render(<Home />);
    const start = screen.getByRole("link", { name: /start the conversation/i });
    expect(start).toHaveAttribute("href", "/contact");
  });

  test("Home does not surface any priced-package or tier language", () => {
    render(<Home />);
    const body = document.body.textContent ?? "";
    expect(body).not.toMatch(/\$\d/);
    expect(body.toLowerCase()).not.toContain("starting at");
  });
});

describe("Contact page", () => {
  it("renders the Let's talk headline", () => {
    render(<Contact />);
    expect(
      screen.getByRole("heading", { name: /let's talk/i, level: 1 })
    ).toBeInTheDocument();
  });

  it("wraps content in operating surface", () => {
    const { container } = render(<Contact />);
    expect(container.querySelector('[data-surface="operating"]')).not.toBeNull();
  });

  it("shows the GPSL email as a mailto link", () => {
    render(<Contact />);
    expect(
      screen.getByRole("link", { name: /matthew\.dinh@gpsl-ubo\.com/i })
    ).toBeInTheDocument();
  });
});
