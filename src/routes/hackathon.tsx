import { createFileRoute, redirect } from "@tanstack/react-router";

// The 2026 edition no longer includes a hackathon. Keep this route so existing
// links and bookmarks to /hackathon continue to work — just send them home.
export const Route = createFileRoute("/hackathon")({
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
});
