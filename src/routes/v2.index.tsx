import { createFileRoute } from "@tanstack/react-router";
import { Home } from "./index";

export const Route = createFileRoute("/v2/")({
  component: Home,
});
