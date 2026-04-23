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

  test("hero shows the human-layer headline", () => {
    render(<ExecutionPage />);
    expect(
      screen.getByRole("heading", { name: /the human layer of gpsl/i, level: 1 })
    ).toBeInTheDocument();
  });

  test("hero has primary services anchor and secondary contact link", () => {
    render(<ExecutionPage />);
    const services = screen.getByRole("link", { name: /how we engage/i });
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
    expect(
      screen.getByRole("heading", { name: /discover\. align\. execute\. sustain/i, level: 2 })
    ).toBeInTheDocument();
    ["Discover", "Align", "Execute", "Sustain"].forEach((step) => {
      expect(screen.getByRole("heading", { name: step, level: 3 })).toBeInTheDocument();
    });
    expect(screen.getByText(/tribal finance and lending origination/i)).toBeInTheDocument();
    expect(screen.getByText(/hiring the operator and core team/i)).toBeInTheDocument();
  });

  test("Execution hosts the ventures section as proof of the operating model", () => {
    render(<ExecutionPage />);
    expect(screen.getByText(/what the model has built/i)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /tribal bank/i, level: 3 })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /tribal trade/i, level: 3 })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /fishing & processing/i, level: 3 })
    ).toBeInTheDocument();
  });

  test("Execution hosts the unified team at #team anchor", () => {
    const { container } = render(<ExecutionPage />);
    expect(container.querySelector("#team")).not.toBeNull();
    expect(
      screen.getByRole("heading", { name: /bernie chan/i, level: 3 })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /matty dinh/i, level: 3 })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /kentory thomas/i, level: 3 })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /nate sou/i, level: 3 })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /martin leung/i, level: 3 })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /cliff wu/i, level: 3 })
    ).toBeInTheDocument();
  });

  test("Execution 'how we engage' section describes four engagement shapes", () => {
    const { container } = render(<ExecutionPage />);
    expect(container.querySelector("#services")).not.toBeNull();
    expect(
      screen.getByRole("heading", { name: /source what's worth doing/i, level: 3 })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /work the structure until it holds/i, level: 3 })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /hire, stand up, stay inside/i, level: 3 })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /hold, reinvest, rebuild/i, level: 3 })
    ).toBeInTheDocument();
  });

  test("Execution final CTA links to contact and internal ventures anchor", () => {
    render(<ExecutionPage />);
    expect(screen.getByText(/tell us about the operation/i)).toBeInTheDocument();
    const contact = screen.getByRole("link", { name: /start the conversation/i });
    expect(contact).toHaveAttribute("href", "/contact?topic=execution");
    const ventures = screen.getByRole("link", { name: /see the ventures/i });
    expect(ventures).toHaveAttribute("href", "#ventures");
  });

  test("Execution page uses no 'advantage' / 'peers cannot' posture language", () => {
    const { container } = render(<ExecutionPage />);
    const text = (container.textContent ?? "").toLowerCase();
    expect(text).not.toContain("sovereignty as advantage");
    expect(text).not.toContain("our peers cannot");
    expect(text).not.toContain("regulatory edges");
    expect(text).not.toContain("our edge comes from");
  });

  test("Execution page contains NO priced packages, dollar amounts, or tier names", () => {
    const { container } = render(<ExecutionPage />);
    const text = container.textContent ?? "";
    expect(text).not.toMatch(/\$/);
    expect(text).not.toMatch(/\b\d+\s?(k|K|M|million|thousand)\b/);
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
