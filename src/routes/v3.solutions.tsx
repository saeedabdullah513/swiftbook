import { createFileRoute } from "@tanstack/react-router";
import { Solutions } from "./solutions";

export const Route = createFileRoute("/v3/solutions")({
  head: () => ({
    meta: [
      { title: "Marketing Solutions — Swift Book Marketing" },
      { name: "description", content: "Discoverability, authority, engagement, and conversion services organized around the outcome your book needs." },
    ],
  }),
  component: Solutions,
});
