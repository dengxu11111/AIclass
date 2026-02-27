import HeroSection from "@/components/home/HeroSection";
import PainPointsSection from "@/components/home/PainPointsSection";
import CourseOverviewSection from "@/components/home/CourseOverviewSection";
import OutcomesSection from "@/components/home/OutcomesSection";
import DetailsSection from "@/components/home/DetailsSection";
import PricingSection from "@/components/home/PricingSection";
import ContactSection from "@/components/home/ContactSection";
import ChatBot from "@/components/ui/ChatBot";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PainPointsSection />
      <CourseOverviewSection />
      <OutcomesSection />
      <DetailsSection />
      <PricingSection />
      <ContactSection />
      <ChatBot />
    </>
  );
}
