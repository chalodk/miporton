import { ContactForm } from "@/components/ContactForm";
import { ForAdmin } from "@/components/ForAdmin";
import { ForWhom } from "@/components/ForWhom";
import { Hero } from "@/components/Hero";
import { HowItFeels } from "@/components/HowItFeels";
import { HowToStart } from "@/components/HowToStart";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WhyItMatters } from "@/components/WhyItMatters";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <HowItFeels />
        <ForAdmin />
        <WhyItMatters />
        <ForWhom />
        <HowToStart />
        <ContactForm />
      </main>
      <SiteFooter />
    </>
  );
}
