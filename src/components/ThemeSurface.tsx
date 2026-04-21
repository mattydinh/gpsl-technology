import { ReactNode } from "react";

type Surface = "operating" | "technology";

export default function ThemeSurface({
  surface,
  children,
}: {
  surface: Surface;
  children: ReactNode;
}) {
  return (
    <div data-surface={surface} className="min-h-screen">
      {children}
    </div>
  );
}
