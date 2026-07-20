import { createFileRoute } from "@tanstack/react-router";
import { About } from "./about";

export const Route = createFileRoute("/v2/about")({
  head: () => ({
    meta: [
      { title: "About — Swift Book Marketing" },
      { name: "description", content: "A strategic book marketing partner for US authors. Editorial standards, verified team, transparent practices." },
    ],
  }),
  component: About,
});
