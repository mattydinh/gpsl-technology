import { render, screen } from "@testing-library/react";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import RootLayout from "@/app/layout";

jest.mock("next/font/google", () => ({
  Fraunces: () => ({ variable: "--font-fraunces", className: "mock-fraunces" }),
  Figtree: () => ({ variable: "--font-figtree", className: "mock-figtree" }),
}));

jest.mock("@vercel/analytics/react", () => ({ Analytics: () => null }));
jest.mock("@vercel/speed-insights/next", () => ({ SpeedInsights: () => null }));

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

jest.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

describe("Footer", () => {
  it("renders brand name and tagline", () => {
    render(<Footer />);
    expect(screen.getByText("GPSL")).toBeInTheDocument();
    expect(screen.getByText(/a diversified operating group/i)).toBeInTheDocument();
  });

  it("renders all six nav links with correct hrefs", () => {
    render(<Footer />);
    const expected: [string, string][] = [
      ["Home", "/"],
      ["Execution", "/execution"],
      ["Technology", "/technology"],
      ["Portfolio", "/portfolio"],
      ["Team", "/team"],
      ["Contact", "/contact"],
    ];
    expected.forEach(([label, href]) => {
      const link = screen.getByRole("link", { name: label });
      expect(link).toHaveAttribute("href", href);
    });
  });

  it("renders email link", () => {
    render(<Footer />);
    const email = screen.getByRole("link", { name: /matthew\.dinh@gpsl-ubo\.com/i });
    expect(email).toHaveAttribute("href", "mailto:matthew.dinh@gpsl-ubo.com");
  });

  it("renders phone link", () => {
    render(<Footer />);
    const phone = screen.getByRole("link", { name: /\(904\)\s?439-9174/i });
    expect(phone).toHaveAttribute("href", "tel:+19044399174");
  });

  it("renders copyright", () => {
    render(<Footer />);
    expect(screen.getByText(/© 2026 GPSL\. All rights reserved/i)).toBeInTheDocument();
  });

  it("renders email social icon link", () => {
    render(<Footer />);
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
  });
});

describe("Nav", () => {
  it("renders brand link", () => {
    render(<Nav />);
    const brandLinks = screen.getAllByText(/GPSL/);
    expect(brandLinks.length).toBeGreaterThan(0);
  });

  it("renders the 6 top-level items", () => {
    render(<Nav />);
    ["Home", "Execution", "Technology", "Portfolio", "Team", "Contact"].forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  it("does not render the old AI/Projects/Overview items", () => {
    render(<Nav />);
    expect(screen.queryByText("AI")).not.toBeInTheDocument();
    expect(screen.queryByText("Projects")).not.toBeInTheDocument();
    expect(screen.queryByText("Overview")).not.toBeInTheDocument();
  });

  it("renders mobile menu toggle button", () => {
    render(<Nav />);
    expect(screen.getByRole("button", { name: /open menu/i })).toBeInTheDocument();
  });
});

test("layout applies Fraunces serif font variable", () => {
  const errorSpy = jest.spyOn(console, "error").mockImplementation(() => {});
  try {
    render(<RootLayout>{null}</RootLayout>);
    expect(document.body.className).toMatch(/--font-fraunces/);
  } finally {
    errorSpy.mockRestore();
  }
});

import ThemeSurface from "@/components/ThemeSurface";

describe("ThemeSurface", () => {
  test("sets data-surface='operating' on root div", () => {
    const { container } = render(
      <ThemeSurface surface="operating">content</ThemeSurface>
    );
    expect(container.firstChild).toHaveAttribute("data-surface", "operating");
  });

  test("sets data-surface='technology' on root div", () => {
    const { container } = render(
      <ThemeSurface surface="technology">content</ThemeSurface>
    );
    expect(container.firstChild).toHaveAttribute("data-surface", "technology");
  });

  test("renders children", () => {
    const { getByText } = render(
      <ThemeSurface surface="operating">hello world</ThemeSurface>
    );
    expect(getByText("hello world")).toBeInTheDocument();
  });
});
