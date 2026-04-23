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
      screen.getByRole("heading", { name: /the systems layer of gpsl/i, level: 1 })
    ).toBeInTheDocument();
  });

  test("hero CTAs anchor to #shipped and link to technology contact", () => {
    render(<TechnologyPage />);
    const shipped = screen.getByRole("link", { name: /see what we ship/i });
    expect(shipped).toHaveAttribute("href", "#shipped");
    const engage = screen.getByRole("link", { name: /engage the team/i });
    expect(engage).toHaveAttribute("href", "/contact?topic=technology");
  });

  test("Technology hosts the 'Why Technology exists' mission section", () => {
    render(<TechnologyPage />);
    expect(screen.getByText(/why technology exists inside gpsl/i)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /built to scale execution, not replace it/i,
      })
    ).toBeInTheDocument();
    // The pointed opener
    expect(
      screen.getByText(/is a tooling problem dressed up as a strategy problem/i)
    ).toBeInTheDocument();
  });

  test("Technology shipped section lists four products / engagements", () => {
    const { container } = render(<TechnologyPage />);
    expect(container.querySelector("#shipped")).not.toBeNull();
    expect(screen.getByText(/production software, shipped into real operations/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /legacycompass/i, level: 3 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /meridian ai/i, level: 3 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /luxusai/i, level: 3 })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /forward-deployed engagements/i, level: 3 })
    ).toBeInTheDocument();
  });

  test("Technology 'How we build' section merges stack + Claude Partner", () => {
    render(<TechnologyPage />);
    expect(screen.getByText(/how we build/i)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /claude-grade tools, shipped at operator speed/i,
      })
    ).toBeInTheDocument();
    // Claude Partner Network kept inside §6.4
    const matches = screen.getAllByText(/claude partner network/i);
    expect(matches.length).toBeGreaterThan(0);
  });

  test("Technology page has no lingering Philosophy or #philosophy anchor", () => {
    const { container } = render(<TechnologyPage />);
    expect(container.querySelector("#philosophy")).toBeNull();
    const text = (container.textContent ?? "").toLowerCase();
    expect(text).not.toContain("philosophy");
    expect(text).not.toContain("technology applied with intent");
  });

  test("Technology forward-deployed section lists three tiles", () => {
    render(<TechnologyPage />);
    expect(screen.getByText(/forward-deployed engineering, not billable hours/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /embedded engineers/i, level: 3 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /claude-grade agents/i, level: 3 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /own the outcome/i, level: 3 })).toBeInTheDocument();
  });

  test("Technology final CTA links to contact and internal #shipped anchor", () => {
    render(<TechnologyPage />);
    expect(screen.getByText(/tell us what you need built/i)).toBeInTheDocument();
    const contact = screen.getByRole("link", { name: /start the conversation/i });
    expect(contact).toHaveAttribute("href", "/contact?topic=technology");
    const shipped = screen.getByRole("link", { name: /see what we've shipped/i });
    expect(shipped).toHaveAttribute("href", "#shipped");
  });

  test("Technology page does not link to removed /portfolio route", () => {
    const { container } = render(<TechnologyPage />);
    const links = Array.from(container.querySelectorAll("a"));
    links.forEach((link) => {
      const href = link.getAttribute("href") ?? "";
      expect(href.startsWith("/portfolio")).toBe(false);
    });
  });
});
