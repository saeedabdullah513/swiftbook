import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/v2/trust/")({
  component: () => <Navigate to="/v2/trust/ethical-marketing" />,
});
