import { FeaturedWriting } from "@/components/FeaturedWriting";
import { HeroScientist } from "@/components/HeroScientist";
import { NowStrip } from "@/components/NowStrip";
import { ResearchCards } from "@/components/ResearchCards";
import { SelectedWork } from "@/components/SelectedWork";
import { WaveMotif } from "@/components/QuantumMotifs";

export default function HomePage() {
  return (
    <>
      <HeroScientist />
      <div className="h-6">
        <WaveMotif />
      </div>
      <ResearchCards />
      <SelectedWork />
      <FeaturedWriting />
      <NowStrip />
    </>
  );
}
