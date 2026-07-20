import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/trust/")({
  component: () => <Navigate to="/trust/ethical-marketing" />,
});
