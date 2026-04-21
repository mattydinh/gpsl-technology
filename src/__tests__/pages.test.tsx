import { render, screen } from "@testing-library/react";
import Home from "@/app/page";
import Team from "@/app/team/page";
import Contact from "@/app/contact/page";

// Mock framer-motion to avoid animation issues in tests
jest.mock("framer-motion", () => ({
  motion: {
    div: ({
      children,
      className,
      ...rest
    }: React.HTMLAttributes<HTMLDivElement>) => (
      <div className={className}>{children}</div>
    ),
    span: ({
      children,
      className,
      ...rest
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
}));

describe("Home page", () => {
  it("renders the main heading", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { level: 1 })
    ).toBeInTheDocument();
  });

  test("Home hero mentions 'operating group' and has two primary CTAs", () => {
    render(<Home />);
    expect(screen.getByText(/GPSL.*Operating Group/i)).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Explore our ventures/i })
    ).toHaveAttribute("href", "/portfolio");
    expect(
      screen.getByRole("link", { name: /How we execute/i })
    ).toHaveAttribute("href", "/execution");
  });

  test("Home hero H1 says 'We build, operate, and scale ventures.'", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { level: 1, name: /build, operate, and scale ventures/i })
    ).toBeInTheDocument();
  });

  test("Home wraps content in data-surface='operating'", () => {
    const { container } = render(<Home />);
    expect(container.querySelector('[data-surface="operating"]')).not.toBeNull();
  });

  test("Home Two Engines section renders Execution + Technology cards", () => {
    render(<Home />);
    expect(screen.getByText(/one operating group, two engines/i)).toBeInTheDocument();
    // Find the Two Engines division card (href="/execution", contains "Division 01")
    const execLinks = screen.getAllByRole("link").filter(
      (el) => el.getAttribute("href") === "/execution"
    );
    expect(execLinks.length).toBeGreaterThanOrEqual(1);
    expect(execLinks.some((el) => /division 01/i.test(el.textContent ?? ""))).toBe(true);
    // Multiple links go to /technology; confirm at least one is a division card (contains "Division 02" text)
    const techLinks = screen.getAllByRole("link").filter(
      (el) => el.getAttribute("href") === "/technology"
    );
    expect(techLinks.length).toBeGreaterThanOrEqual(1);
    expect(techLinks.some((el) => /division 02/i.test(el.textContent ?? ""))).toBe(true);
  });

  test("Home operating model section renders all four steps", () => {
    render(<Home />);
    expect(screen.getByText(/our operating model/i)).toBeInTheDocument();
    ["Discover", "Align", "Execute", "Sustain"].forEach((step) => {
      expect(screen.getByRole("heading", { name: step, level: 3 })).toBeInTheDocument();
    });
  });

  test("Home ventures teaser renders three flagship ventures + portfolio CTA", () => {
    render(<Home />);
    expect(screen.getByText(/ventures in motion/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /tribal bank/i, level: 3 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /tribal trade/i, level: 3 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /fishing & processing/i, level: 3 })).toBeInTheDocument();
    const cta = screen.getByRole("link", { name: /see the full ventures portfolio/i });
    expect(cta).toHaveAttribute("href", "/portfolio");
  });

  test("Home technology spotlight renders three flagship products + tech CTA", () => {
    render(<Home />);
    expect(screen.getByText(/technology spotlight/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /legacycompass/i, level: 3 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /meridian ai/i, level: 3 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /luxusai/i, level: 3 })).toBeInTheDocument();
    const cta = screen.getByRole("link", { name: /explore the technology division/i });
    expect(cta).toHaveAttribute("href", "/technology");
  });

  test("Home trust tiles render three differentiators", () => {
    render(<Home />);
    expect(screen.getByText(/why gpsl/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /tribal sovereignty as advantage/i, level: 3 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /long-horizon holder posture/i, level: 3 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /in-house ai, not outsourced/i, level: 3 })).toBeInTheDocument();
  });

  test("Home engagement routing exposes three topic-routed contact doors", () => {
    render(<Home />);
    expect(screen.getByText(/three doors into gpsl/i)).toBeInTheDocument();
    const allLinks = screen.getAllByRole("link");
    const topics = ["execution", "technology", "partnerships"];
    topics.forEach((topic) => {
      const match = allLinks.find((l) => l.getAttribute("href") === `/contact?topic=${topic}`);
      expect(match).toBeDefined();
    });
  });
});

describe("Team page", () => {
  it("renders all team members", () => {
    render(<Team />);
    expect(screen.getByText("Matty Dinh")).toBeInTheDocument();
    expect(screen.getByText("Cliff Wu")).toBeInTheDocument();
    expect(screen.getByText("Nate Sou")).toBeInTheDocument();
    expect(screen.getByText("Martin Leung")).toBeInTheDocument();
    expect(screen.getByText("Bernie Chan")).toBeInTheDocument();
  });

  it("renders team member roles", () => {
    render(<Team />);
    expect(
      screen.getByText(/Data Science.*Machine Learning/i)
    ).toBeInTheDocument();
  });

  it("renders bios", () => {
    render(<Team />);
    expect(
      screen.getByText(/Designs and deploys end-to-end/i)
    ).toBeInTheDocument();
  });
});

describe("Contact page", () => {
  it("renders the contact form", () => {
    render(<Contact />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  it("renders the submit button", () => {
    render(<Contact />);
    expect(
      screen.getByRole("button", { name: /send message/i })
    ).toBeInTheDocument();
  });

  it("has required fields", () => {
    render(<Contact />);
    expect(screen.getByLabelText(/name/i)).toBeRequired();
    expect(screen.getByLabelText(/email/i)).toBeRequired();
    expect(screen.getByLabelText(/message/i)).toBeRequired();
  });
});
