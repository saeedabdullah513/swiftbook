import { createFileRoute, Outlet } from "@tanstack/react-router";
import { TrustLayout } from "./trust";

export const Route = createFileRoute("/v2/trust")({
  component: TrustLayout,
});
