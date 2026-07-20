import { createFileRoute, Outlet } from "@tanstack/react-router";
import { TrustLayout } from "./trust";

export const Route = createFileRoute("/v3/trust")({
  component: TrustLayout,
});
