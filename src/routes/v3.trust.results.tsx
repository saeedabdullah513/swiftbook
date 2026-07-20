import { createFileRoute } from "@tanstack/react-router";
import { TrustPage } from "@/components/site/TrustPage";

export const Route = createFileRoute("/v3/trust/results")({
  head: () => ({ meta: [{ title: "Results & Measurement — Swift Book Marketing" }] }),
  component: () => (
    <TrustPage title="Results & Measurement" eyebrow="Policy">
      <p>Every reported figure is labeled with its source and limitations. This page defines the labels we use.</p>
      <h3>Result sources</h3>
      <ul>
        <li><b>Platform verified.</b> Pulled directly from a platform report (Amazon Ads, Meta, Google Analytics, KDP).</li>
        <li><b>Agency tracked.</b> Recorded by our team from primary artifacts (email confirmations, placement URLs, published pieces).</li>
        <li><b>Client reported.</b> Provided by the author from their own accounts; we cite it as reported.</li>
        <li><b>Publicly verifiable.</b> Findable at a public URL we can cite.</li>
      </ul>
      <h3>What we do not claim</h3>
      <ul>
        <li>Causation when we can only demonstrate correlation.</li>
        <li>Results from platforms we do not manage.</li>
        <li>Future performance based on past campaigns.</li>
      </ul>
    </TrustPage>
  ),
});
