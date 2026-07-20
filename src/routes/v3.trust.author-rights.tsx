import { createFileRoute } from "@tanstack/react-router";
import { TrustPage } from "@/components/site/TrustPage";

export const Route = createFileRoute("/v3/trust/author-rights")({
  head: () => ({ meta: [{ title: "Author Rights & Ownership — Swift Book Marketing" }] }),
  component: () => (
    <TrustPage title="Author Rights & Ownership" eyebrow="Policy">
      <p>The people responsible for a book should own the infrastructure around it. Our engagement never changes that.</p>
      <ul>
        <li>Authors retain full copyright to the manuscript and all approved marketing assets.</li>
        <li>Authors retain ownership of domain registrations, hosting accounts, and analytics.</li>
        <li>Authors retain administrative access to publishing accounts (KDP, IngramSpark, Draft2Digital).</li>
        <li>Authors retain administrative access to advertising accounts (Amazon Ads, Meta, Google).</li>
        <li>Authors retain their mailing lists and reader communities.</li>
        <li>Approved campaign assets are handed over on request and at close of engagement.</li>
      </ul>
    </TrustPage>
  ),
});
