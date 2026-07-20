import { createFileRoute } from "@tanstack/react-router";
import { TrustPage } from "@/components/site/TrustPage";

export const Route = createFileRoute("/trust/pricing")({
  head: () => ({ meta: [{ title: "Pricing & Third-Party Costs — Swift Book Marketing" }] }),
  component: () => (
    <TrustPage title="Pricing & Third-Party Costs" eyebrow="Policy">
      <p>Final pricing depends on scope, channels, duration, and existing assets. What follows is what a proposal will always separate cleanly.</p>
      <h3>Agency fees</h3>
      <p>Charged for strategy, creative, execution, coordination, and reporting. Quoted as a fixed campaign fee or a monthly retainer, never as a percentage of your book sales.</p>
      <h3>Third-party costs</h3>
      <p>Ad spend, retailer fees, printing, giveaway inventory, and licensing are not marked up. They are billed at cost with receipts on request.</p>
      <h3>What is excluded from every campaign</h3>
      <ul>
        <li>Purchased reviews or engagement.</li>
        <li>Guaranteed placement fees paid to media outlets.</li>
        <li>Paid bestseller-list "campaigns" of any description.</li>
      </ul>
    </TrustPage>
  ),
});
