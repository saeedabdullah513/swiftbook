import { createFileRoute } from "@tanstack/react-router";
import { Assessment } from "./assessment";

export const Route = createFileRoute("/v3/assessment")({
  head: () => ({
    meta: [
      { title: "Request a Book Assessment — Swift Book Marketing" },
      {
        name: "description",
        content:
          "A strategist reviews your book, audience, and goals before recommending a plan. No payment required. No package sold during the assessment.",
      },
    ],
  }),
  component: Assessment,
});
