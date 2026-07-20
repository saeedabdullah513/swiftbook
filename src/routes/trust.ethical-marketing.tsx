import { createFileRoute } from "@tanstack/react-router";
import { TrustPage } from "@/components/site/TrustPage";

export const Route = createFileRoute("/trust/ethical-marketing")({
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
        <li>Disclose the sources behind every reported metric.</li>
        <li>Separate agency fees from third-party ad spend and retailer fees.</li>
        <li>Recommend the smaller campaign when the smaller campaign is right.</li>
        <li>Refuse to work on books whose market realities we cannot honestly serve.</li>
      </ul>
    </TrustPage>
  ),
});
