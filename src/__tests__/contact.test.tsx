import { render, screen, fireEvent } from "@testing-library/react";
import ContactPage from "@/app/contact/page";

const mockGet = jest.fn();
jest.mock("next/navigation", () => ({
  useSearchParams: () => ({ get: mockGet }),
  usePathname: () => "/contact",
}));

describe("ContactPage", () => {
  beforeEach(() => mockGet.mockReset());

  test("wraps content in operating surface", () => {
    mockGet.mockReturnValue(null);
    const { container } = render(<ContactPage />);
    expect(container.querySelector('[data-surface="operating"]')).not.toBeNull();
  });

  test("hero shows Let's talk headline", () => {
    mockGet.mockReturnValue(null);
    render(<ContactPage />);
    expect(screen.getByRole("heading", { name: /let's talk/i, level: 1 })).toBeInTheDocument();
  });

  test("defaults to execution topic heading when no query param", () => {
    mockGet.mockReturnValue(null);
    render(<ContactPage />);
    expect(
      screen.getByRole("heading", {
        name: /tell us about the operation, the venture, or the mission/i,
        level: 2,
      })
    ).toBeInTheDocument();
  });

  test("pre-selects technology topic heading when ?topic=technology", () => {
    mockGet.mockImplementation((key: string) => (key === "topic" ? "technology" : null));
    render(<ContactPage />);
    expect(
      screen.getByRole("heading", { name: /tell us what you need built/i, level: 2 })
    ).toBeInTheDocument();
  });

  test("pre-selects general topic heading when ?topic=general", () => {
    mockGet.mockImplementation((key: string) => (key === "topic" ? "general" : null));
    render(<ContactPage />);
    expect(
      screen.getByRole("heading", { name: /tell us what brings you in/i, level: 2 })
    ).toBeInTheDocument();
  });

  test("URL back-compat maps ?topic=partnerships to the general topic", () => {
    mockGet.mockImplementation((key: string) => (key === "topic" ? "partnerships" : null));
    render(<ContactPage />);
    expect(
      screen.getByRole("heading", { name: /tell us what brings you in/i, level: 2 })
    ).toBeInTheDocument();
  });

  test("clicking a different topic tile changes the heading and mailto subject", () => {
    mockGet.mockReturnValue(null);
    render(<ContactPage />);
    const technologyTile = screen.getByRole("button", {
      name: /Technology.*product builds/i,
    });
    fireEvent.click(technologyTile);
    expect(
      screen.getByRole("heading", { name: /tell us what you need built/i, level: 2 })
    ).toBeInTheDocument();
    const emailLink = screen.getByRole("link", { name: /matthew\.dinh@gpsl-ubo\.com/i });
    expect(emailLink).toHaveAttribute(
      "href",
      expect.stringContaining("subject=GPSL%20%E2%80%94%20Technology%20engagement")
    );
  });

  test("renders the three topic tiles: Execution, Technology, General", () => {
    mockGet.mockReturnValue(null);
    render(<ContactPage />);
    expect(screen.getByRole("button", { name: /Execution.*operating work/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Technology.*product builds/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /General.*partnerships/i })).toBeInTheDocument();
  });

  test("exposes the GPSL phone number as a tel link", () => {
    mockGet.mockReturnValue(null);
    render(<ContactPage />);
    const phoneLink = screen.getByRole("link", { name: /\(904\)\s?439-9174/i });
    expect(phoneLink).toHaveAttribute("href", "tel:+19044399174");
  });
});
