import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/v3")({
  component: () => <Outlet />,
});
