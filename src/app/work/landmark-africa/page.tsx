import type { Metadata } from "next";
import { CaseStudyPage } from "@/components/case-study";
import { caseStudies } from "@/content/site-content";

export const metadata: Metadata = {
  title: "Landmark Africa — Niran Olutimayin",
};

export default function Page() {
  return <CaseStudyPage data={caseStudies["landmark-africa"]} />;
}
