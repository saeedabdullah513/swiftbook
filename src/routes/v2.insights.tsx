import { createFileRoute } from "@tanstack/react-router";
import { Insights } from "./insights";

export const Route = createFileRoute("/v2/insights")({
  head: () => ({
    meta: [
      { title: "Insights — Swift Book Marketing" },
      { name: "description", content: "Editorial notes on book marketing strategy, positioning, and the state of the industry." },
    ],
  }),
  component: Insights,
});
