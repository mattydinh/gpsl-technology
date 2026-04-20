import { render, screen } from "@testing-library/react";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import RootLayout from "@/app/layout";

jest.mock("next/font/google", () => ({
  Fraunces: () => ({ variable: "--font-fraunces", className: "mock-fraunces" }),
}));

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
  it("renders brand name", () => {
    render(<Footer />);
    const brandElements = screen.getAllByText(/GPSL/);
    expect(brandElements.length).toBeGreaterThan(0);
  });

  it("renders all page links", () => {
    render(<Footer />);
    expect(screen.getByText("Overview")).toBeInTheDocument();
    expect(screen.getByText("Team")).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();
    expect(screen.getByText("AI")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("renders social links with aria labels", () => {
    render(<Footer />);
    expect(screen.getByLabelText("GitHub")).toBeInTheDocument();
    expect(screen.getByLabelText("LinkedIn")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
  });

  it("renders copyright text", () => {
    render(<Footer />);
    expect(
      screen.getByText(/GPSL Technology\. All rights reserved/i)
    ).toBeInTheDocument();
  });
});

describe("Nav", () => {
  it("renders brand link", () => {
    render(<Nav />);
    const brandLinks = screen.getAllByText(/GPSL/);
    expect(brandLinks.length).toBeGreaterThan(0);
  });

  it("renders all nav links in desktop view", () => {
    render(<Nav />);
    expect(screen.getByText("Overview")).toBeInTheDocument();
    expect(screen.getByText("Team")).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();
    expect(screen.getByText("AI")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("renders mobile menu toggle button", () => {
    render(<Nav />);
    expect(
      screen.getByRole("button", { name: /open menu/i })
    ).toBeInTheDocument();
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
