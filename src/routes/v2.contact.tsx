import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "./contact";

export const Route = createFileRoute("/v2/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Swift Book Marketing" },
      { name: "description", content: "Speak with a strategist at Swift Book Marketing. Dallas, TX." },
    ],
  }),
  component: Contact,
});
