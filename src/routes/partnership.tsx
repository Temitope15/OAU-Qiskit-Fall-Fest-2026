import { createFileRoute, redirect } from "@tanstack/react-router";

// The old corporate partnership pitch has been replaced by the patron
// sponsorship page. Keep this route so previously shared links still work.
export const Route = createFileRoute("/partnership")({
  beforeLoad: () => {
    throw redirect({ to: "/sponsor" });
  },
});
