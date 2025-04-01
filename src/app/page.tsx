import OurStory from "@/src/components/HeroPage/ourstory";
import Capabilities from "@/src/components/HeroPage/CapabilitiesPage";
import Industries from "@/src/components/HeroPage/industries";
import CardHoverEffectDemo from "@/src/components/HeroPage/card";
import { Team } from "@/src/components/HeroPage/Team";
import Example from "@/src/components/HeroPage/hero";
import MeetCaptain from "@/src/components/HeroPage/meet-captain";
import Testimonials from "../components/HeroPage/testimonial";

const components = [
  { id: 1, Component: Example, bg: "bg-black" },
  { id: 2, Component: OurStory, bg: "" },
  { id: 3, Component: Capabilities, bg: "" },
  { id: 4, Component: Industries, bg: "" },
  { id: 5, Component: CardHoverEffectDemo, bg: "bg-black" },
  { id: 6, Component: Testimonials, bg: "" },
  { id: 7, Component: MeetCaptain, bg: "" },
  { id: 8, Component: Team, bg: "" }
];

export default function Page() {
  return (
    <main className="min-h-screen bg-black">
      {components.map(({ id, Component, bg }) => (
        <div key={id} className={bg}>
          <Component />
        </div>
      ))}
    </main>
  );
}
