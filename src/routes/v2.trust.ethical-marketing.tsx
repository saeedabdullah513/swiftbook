import { createFileRoute } from "@tanstack/react-router";
import { TrustPage } from "@/components/site/TrustPage";

export const Route = createFileRoute("/v2/trust/ethical-marketing")({
  head: () => ({ meta: [{ title: "Ethical Marketing Standards — Swift Book Marketing" }] }),
  component: () => (
    <TrustPage title="Ethical Marketing Standards" eyebrow="Policy">
      <p>Every campaign we run is subject to a standing set of ethical commitments. These standards apply regardless of category, budget, or timeline.</p>
      <h3>We do not</h3>
      <ul>
        <li>Guarantee bestseller status on any list, at any price.</li>
        <li>Purchase reviews, ratings, or engagement on any platform.</li>
        <li>Recommend services we do not believe a book actually needs.</li>
        <li>Present projected results as achieved results.</li>
        <li>Use pressure-based selling tactics, artificial scarcity, or expiring pricing.</li>
      </ul>
      <h3>We do</h3>
      <ul>
        <li>Scope deliverables before any payment is requested.</li>
        <li>Provide written definitions of every deliverable and timeline.</li>
        <li>Report results with source labels and limitations.</li>
        <li>Answer questions in writing within two business days.</li>
        <li>Retire any tactic that violates platform policy or advertising standards.</li>
      </ul>
    </TrustPage>
  ),
});
