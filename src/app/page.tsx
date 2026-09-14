import { AfterDark } from "@/components/home/AfterDark";
import { Atmosphere } from "@/components/home/Atmosphere";
import { Chef } from "@/components/home/Chef";
import { EventsPreview } from "@/components/home/EventsPreview";
import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";
import { JournalPreview } from "@/components/home/JournalPreview";
import { LocationPreview } from "@/components/home/LocationPreview";
import { OfferStrip } from "@/components/home/OfferStrip";
import { ReservationCta } from "@/components/home/ReservationCta";
import { Signatures } from "@/components/home/Signatures";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <OfferStrip />
      <Signatures />
      <Chef />
      <Atmosphere />
      <AfterDark />
      <EventsPreview />
      <ReservationCta />
      <LocationPreview />
      <JournalPreview />
    </>
  );
}
