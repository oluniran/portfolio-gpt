import type { Metadata } from "next";
import { CaseStudyPage } from "@/components/case-study";
import { caseStudies } from "@/content/site-content";

export const metadata: Metadata = {
  title: "Laserglow Technologies — Niran Olutimayin",
};

export default function Page() {
  return <CaseStudyPage data={caseStudies.laserglow} />;
}
