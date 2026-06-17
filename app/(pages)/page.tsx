import Hero from "@/components/Hero/Hero";
import Slider from "@/components/Slider/Slider";
import Recommended from "@/components/Recommended/Recommended";
import Newsletter from "@/components/Newsletter/Newsletter";
import BottomNav from "@/components/BottomNav/BottomNav";
import "../globals.css";
export const metadata = {
  title: "Congo Sphere - Explorez les événements près de chez vous",
  description:
    "Découvrez des événements uniques près de chez vous. Concerts, meetups, expositions — rejoignez une communauté passionnée.",
};
export default function Home() {
  return (
    <>
      <Hero />
      <main className="bg-slate-950 max-w-full pb-10 text-white px-6">
        <Slider />
        <Recommended />
        <Newsletter />
      </main>
      <BottomNav />
    </>
  );
}
