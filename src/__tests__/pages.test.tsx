import { render, screen } from "@testing-library/react";
import Home from "@/app/page";
import Team from "@/app/team/page";
import Projects from "@/app/projects/page";
import AI from "@/app/ai/page";
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

  it("renders capability cards", () => {
    render(<Home />);
    expect(screen.getByText("Team")).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();
    expect(screen.getByText("AI")).toBeInTheDocument();
  });

  it("renders CTA section", () => {
    render(<Home />);
    expect(screen.getByText("Let's talk")).toBeInTheDocument();
  });

  it("has navigation links to key pages", () => {
    render(<Home />);
    const teamLink = screen.getAllByRole("link").find(
      (el) => el.getAttribute("href") === "/team"
    );
    expect(teamLink).toBeInTheDocument();
  });
});

describe("Team page", () => {
  it("renders all team members", () => {
    render(<Team />);
    expect(screen.getByText("Matty Dinh")).toBeInTheDocument();
    expect(screen.getByText("Cliff Wu")).toBeInTheDocument();
    expect(screen.getByText("Nate Sou")).toBeInTheDocument();
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

describe("Projects page", () => {
  it("renders all projects including political intelligence platform", () => {
    render(<Projects />);
    expect(
      screen.getByText("Political intelligence data platform")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Logistics & corporate data platform")
    ).toBeInTheDocument();
    expect(
      screen.getByText("ML research news & summaries")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Peptide synthesis with protein models")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Sales automation with AI-generated presentations")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Meridian AI — conversational real estate advisor")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Grantbridge — AI-powered grant discovery & drafting")
    ).toBeInTheDocument();
  });

  it("renders tags for the political intelligence project", () => {
    render(<Projects />);
    expect(
      screen.getByText("Multi-Agent Orchestration")
    ).toBeInTheDocument();
    expect(screen.getByText("LLM Pipelines")).toBeInTheDocument();
    expect(screen.getByText("Political Data")).toBeInTheDocument();
    expect(screen.getByText("RAG")).toBeInTheDocument();
  });

  it("renders project descriptions", () => {
    render(<Projects />);
    expect(
      screen.getByText(/multi-agent orchestration to coordinate/i)
    ).toBeInTheDocument();
  });
});

describe("AI page", () => {
  it("renders page heading", () => {
    render(<AI />);
    expect(screen.getByText("AI applications")).toBeInTheDocument();
  });

  it("renders philosophy section", () => {
    render(<AI />);
    expect(screen.getByText("Philosophy")).toBeInTheDocument();
  });

  it("renders stack section", () => {
    render(<AI />);
    expect(screen.getByText("Our stack")).toBeInTheDocument();
  });

  it("mentions key technologies", () => {
    render(<AI />);
    expect(
      screen.getByText(/Next\.js, Supabase, Git, Cursor, and Claude Code/i)
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
