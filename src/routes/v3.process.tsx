import { createFileRoute } from "@tanstack/react-router";
import { Process } from "./process";

export const Route = createFileRoute("/v3/process")({
  head: () => ({
    meta: [
      { title: "How It Works — Swift Book Marketing" },
      { name: "description", content: "A five-stage process with visible responsibilities on both sides." },
    ],
  }),
  component: Process,
});
