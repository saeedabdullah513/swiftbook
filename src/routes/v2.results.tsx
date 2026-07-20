import { createFileRoute } from "@tanstack/react-router";
import { Results } from "./results";

export const Route = createFileRoute("/v2/results")({
  head: () => ({
    meta: [
      { title: "Author Results — Swift Book Marketing" },
      { name: "description", content: "Case studies from real author campaigns with sourced metrics, campaign context, and honest limitations." },
    ],
  }),
  component: Results,
});
