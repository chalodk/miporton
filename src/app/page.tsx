import { CommitteeUseCases } from "@/components/CommitteeUseCases";
import { ContactForm } from "@/components/ContactForm";
import { Hero } from "@/components/Hero";
import { HowToStart } from "@/components/HowToStart";
import { PartnerEntry } from "@/components/PartnerEntry";
import { ProductPillars } from "@/components/ProductPillars";
import { RoiComparison } from "@/components/RoiComparison";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Testimonial } from "@/components/Testimonial";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <PartnerEntry />
        <ProductPillars />
        <CommitteeUseCases />
        <RoiComparison />
        <Testimonial />
        <HowToStart />
        <ContactForm />
      </main>
      <SiteFooter />
    </>
  );
}
