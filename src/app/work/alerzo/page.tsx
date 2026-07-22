import type { Metadata } from "next";
import { CaseStudyPage } from "@/components/case-study";
import { caseStudies } from "@/content/site-content";

export const metadata: Metadata = {
  title: "Alerzo — Niran Olutimayin",
  openGraph: {
    title: "Alerzo — Niran Olutimayin",
    images: ["/design/images/alerzo-project-item-body-section-0.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alerzo — Niran Olutimayin",
    images: ["/design/images/alerzo-project-item-body-section-0.png"],
  },
};

export default function Page() {
  return <CaseStudyPage data={caseStudies.alerzo} />;
}
