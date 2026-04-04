import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/Hero/Hero";
export const metadata = {
  title: 'Congo Sphere - Explorez les événements près de chez vous',
  description: 'Découvrez des événements uniques près de chez vous. Concerts, meetups, expositions — rejoignez une communauté passionnée.',
}
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

    </>
  );
}
