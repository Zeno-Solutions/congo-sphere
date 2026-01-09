import Hero from "@/components/Hero/Hero";
import Slider from "@/components/Slider/Slider";
import Recommended from "@/components/Recommended/Recommended";
import Newsletter from "@/components/Newsletter/Newsletter";
import "../globals.css";
import {getAllEvents} from "@/app/api/utils/fuctionApi";
export const metadata = {
  title: "Congo Sphere - Explorez les événements près de chez vous",
  description:
    "Découvrez des événements uniques près de chez vous. Concerts, meetups, expositions — rejoignez une communauté passionnée.",
};
export default function Home() {
  async function fetchEvents() {
    try {
      const data = await getAllEvents();
      console.log("Fetched Events:", data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  }

  fetchEvents();

  return (
    <>
      <Hero />
      <main className="bg-slate-950 max-w-full pb-10 text-white px-6">
        <Slider />
        <Recommended />
        <Newsletter />
        
      </main>
    </>
  );
}
