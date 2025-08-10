import { Hero } from "@/components/Hero";
import { StickyHeader } from "@/components/StickyHeader";
import { PainStory } from "@/components/PainStory";
import { PainPoints } from "@/components/PainPoints";
import { Solution } from "@/components/Solution";
import { HowItWorks } from "@/components/HowItWorks";
import { Benefits } from "@/components/Benefits";
import { Offer } from "@/components/Offer";
import { FAQ } from "@/components/FAQ";
import { BookingForm } from "@/components/BookingForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('booking-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <StickyHeader onCtaClick={scrollToForm} />
      <Hero onCtaClick={scrollToForm} />
      <PainStory />
      <PainPoints />
      <Solution onCtaClick={scrollToForm} />
      <HowItWorks />
      <Benefits />
      <Offer onCtaClick={scrollToForm} />
      <FAQ />
      <BookingForm />
      <Footer />
    </div>
  );
};

export default Index;