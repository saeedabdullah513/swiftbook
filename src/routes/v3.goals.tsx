import { createFileRoute } from "@tanstack/react-router";
import { Goals } from "./goals";

export const Route = createFileRoute("/v3/goals")({
  head: () => ({
    meta: [
      { title: "Author Goals — Swift Book Marketing" },
      { name: "description", content: "Start with the outcome your book needs — launch, relaunch, reach, authority, discoverability, or long-term platform." },
    ],
  }),
  component: Goals,
});
