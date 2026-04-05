import Hero from "@/components/Hero/Hero";
import Slider from "@/components/Slider/Slider";
import Recommended from "@/components/Recommended/Recommended";
import Newsletter from "@/components/Newsletter/Newsletter";
import Footer from "@/components/Footer/Footer";
import BottomNav from "@/components/BottomNav/BottomNav";
export const metadata = {
  title: 'Congo Sphere - Explorez les événements près de chez vous',
  description: 'Découvrez des événements uniques près de chez vous. Concerts, meetups, expositions — rejoignez une communauté passionnée.',
}
export default function Home() {
  return (
    <>
      <Hero />
      <main className="bg-slate-950 pb-10 text-white px">
        <Slider />
        <Recommended />
        <Newsletter />
      </main>
      <BottomNav />
    </>
  );
}
