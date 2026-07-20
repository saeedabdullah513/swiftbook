import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/v3/trust/")({
  component: () => <Navigate to="/v3/trust/ethical-marketing" />,
});
