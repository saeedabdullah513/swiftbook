import { createFileRoute } from "@tanstack/react-router";
import { TrustPage } from "@/components/site/TrustPage";

export const Route = createFileRoute("/trust/author-rights")({
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
        <li>Our access to any account can be removed by the author at any time.</li>
        <li>We do not take royalties on book sales unless separately negotiated in writing.</li>
      </ul>
    </TrustPage>
  ),
});
