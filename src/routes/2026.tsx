import { createFileRoute, redirect } from "@tanstack/react-router";

// The 2026 programme is now the landing page. Keep this route so existing links
// and bookmarks to /2026 continue to work — just send them home.
export const Route = createFileRoute("/2026")({
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
});
