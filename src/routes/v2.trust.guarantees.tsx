import { createFileRoute } from "@tanstack/react-router";
import { TrustPage } from "@/components/site/TrustPage";

export const Route = createFileRoute("/v2/trust/guarantees")({
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
      </ul>
      <h3>What we guarantee</h3>
      <ul>
        <li>A written scope of work before any payment is requested.</li>
        <li>Execution of the agreed deliverables within the agreed timeline.</li>
        <li>Transparent reporting with labeled sources.</li>
        <li>Written responses to questions within two business days.</li>
      </ul>
    </TrustPage>
  ),
});
