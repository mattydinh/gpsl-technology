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

  test("Execution positioning section describes the division", () => {
    render(<ExecutionPage />);
    expect(screen.getByText(/what execution is/i)).toBeInTheDocument();
    expect(screen.getByText(/we are not a consultancy/i)).toBeInTheDocument();
  });

  test("Execution operating model shows all four steps with activity bullets", () => {
    render(<ExecutionPage />);
    expect(screen.getByText(/how we actually run it/i)).toBeInTheDocument();
    ["Discover", "Align", "Execute", "Sustain"].forEach((step) => {
      expect(screen.getByRole("heading", { name: step, level: 3 })).toBeInTheDocument();
    });
    expect(screen.getByText(/tribal finance and lending origination/i)).toBeInTheDocument();
    expect(screen.getByText(/hiring the operator and core team/i)).toBeInTheDocument();
  });

  test("Execution services section describes four engagement types", () => {
    render(<ExecutionPage />);
    expect(screen.getByText(/how we engage/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /deal & opportunity origination/i, level: 3 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /deal structuring & governance/i, level: 3 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /stand-up & operate/i, level: 3 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /hold, reinvest, compound/i, level: 3 })).toBeInTheDocument();
  });

  test("Execution services section links to contact with execution topic", () => {
    render(<ExecutionPage />);
    const links = screen.getAllByRole("link", { name: /talk to us about an engagement/i });
    expect(links[0]).toHaveAttribute("href", "/contact?topic=execution");
  });

  test("Execution sectors section lists operating sectors", () => {
    render(<ExecutionPage />);
    expect(screen.getByText(/where we operate/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /tribal finance/i, level: 3 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /trade & logistics/i, level: 3 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /food & processing/i, level: 3 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /housing & land/i, level: 3 })).toBeInTheDocument();
  });

  test("Execution final CTA has both contact and portfolio links", () => {
    render(<ExecutionPage />);
    expect(screen.getByText(/tell us about the deal/i)).toBeInTheDocument();
    const contact = screen.getByRole("link", { name: /start the conversation/i });
    expect(contact).toHaveAttribute("href", "/contact?topic=execution");
    const portfolio = screen.getByRole("link", { name: /see our ventures/i });
    expect(portfolio).toHaveAttribute("href", "/portfolio");
  });

  test("Execution page contains NO priced packages, dollar amounts, or tier names", () => {
    const { container } = render(<ExecutionPage />);
    const text = container.textContent ?? "";
    // Dollar sign / currency digits
    expect(text).not.toMatch(/\$/);
    expect(text).not.toMatch(/\b\d+\s?(k|K|M|million|thousand)\b/);
    // Tier / package / pricing vocabulary
    const forbidden = [
      /\bpricing\b/i,
      /\bprice\b/i,
      /\btier\b/i,
      /\bpackage\b/i,
      /\bstarter\b/i,
      /\bgrowth plan\b/i,
      /\benterprise plan\b/i,
      /\bsubscription\b/i,
      /\bmonthly\b/i,
      /\bannual fee\b/i,
      /\bstarting at\b/i,
      /\bas low as\b/i,
      /\bfrom \$/i,
      /\bget a quote\b/i,
    ];
    forbidden.forEach((pattern) => {
      expect(text).not.toMatch(pattern);
    });
  });
});
