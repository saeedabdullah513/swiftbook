import { createFileRoute } from "@tanstack/react-router";
import { TrustPage } from "@/components/site/TrustPage";

export const Route = createFileRoute("/trust/guarantees")({
  head: () => ({ meta: [{ title: "What We Do Not Guarantee — Swift Book Marketing" }] }),
  component: () => (
    <TrustPage title="What We Do Not Guarantee" eyebrow="Policy">
      <p>These outcomes depend on factors outside any agency's control. If you see them promised elsewhere, ask how.</p>
      <ul>
        <li>Bestseller status on any list.</li>
        <li>Specific unit-sales numbers.</li>
        <li>Acceptance by any specific media outlet.</li>
        <li>Positive reviews or ratings.</li>
        <li>Viral reach or trending performance.</li>
        <li>Bookstore or library orders.</li>
        <li>Film, television, or subsidiary-rights interest.</li>
      </ul>
      <p>We do commit to research, strategy, creative, outreach, reporting, and communication — the work we can control, delivered to a standard we can defend.</p>
    </TrustPage>
  ),
});
