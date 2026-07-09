import Link from "next/link";
export const metadata = {
  title: "À propos - Congo Sphere",
  description:
    "Découvrez l'histoire, la mission et les valeurs de Congo Sphere, la plateforme événementielle du Congo.",
};

export default function About() {
  const stats = [
    { label: "Organized events", value: "450+" },
    { label: "Active users", value: "10k+" },
    { label: "Cities covered", value: "35" },
    { label: "Community satisfaction", value: "99%" },
  ];
  const offre = [
    {
      title: "Event organization",
      description: "Complete tools to organize your events online and offline.",
    },
    {
      title: "Discovery platform",
      description: "Discover and book events near you.",
    },
    {
      title: "Community",
      description: "Join an active community of event enthusiasts.",
    },
    {
      title: "Ticketing",
      description: "Integrated and secure ticketing system.",
    },
    {
      title: "Marketing",
      description: "Promote your events to a wide audience.",
    },
    {
      title: "Support",
      description: "24/7 support for all your needs.",
    },
  ];
  return (
    <>
      <section className="relative min-h-[75vh] bg-[#06060c] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-linear-to-b from-violet-950/20 via-transparent to-[#0a0a0f]"></div>
        <div className="hero-glow top-1/4 left-1/4"></div>
        <div
          className="hero-glow top-1/3 right-1/4"
          style={{ animationDelay: "-2s" }}
        ></div>
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="grid-about"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 60 0 L 0 0 0 60"
                  fill="none"
                  stroke="rgba(139,92,246,0.3)"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-about)" />
          </svg>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <p className="uppercase tracking-[0.4em] text-sm text-purple-300 mb-4">
            Congo Sphere
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            We connect experiences, culture, and communities.
          </h1>
          <p className="mx-auto max-w-3xl text-base md:text-xl text-slate-300 leading-8">
            Congo Sphere is your gateway to the best cultural, musical, and
            technological events in the country. Every experience is designed to
            inspire, unite, and showcase local talent.
          </p>
        </div>
      </section>

      <main className="bg-slate-950 text-white px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-20">
          <section className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-sm uppercase tracking-[0.4em] text-purple-300">
                Our Story
              </span>
              <h2 className="text-4xl font-bold">
                Born from passion, driven by the community.
              </h2>
              <p className="text-slate-300 leading-8">
                Congo Sphere was founded to promote local talent and offer a
                platform where every event becomes an opportunity for discovery.
                We believe that cultural and artistic encounters build lasting
                connections.
              </p>
              <p className="text-slate-300 leading-8">
                Our mission is simple: to bring enthusiasts together around
                unique, accessible and inspiring events, while supporting
                creators, organizers and communities.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-[0_20px_40px_rgba(0,0,0,0.25)]">
                <p className="text-purple-300 uppercase tracking-[0.4em] text-xs mb-4">
                  Vision
                </p>
                <h3 className="text-2xl font-bold mb-3">
                  A vibrant stage for everyone
                </h3>
                <p className="text-slate-300 leading-7">
                  Making Congo Sphere the reference for discovering, sharing and
                  experiencing unforgettable moments, throughout the DRC.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-[0_20px_40px_rgba(0,0,0,0.25)]">
                <p className="text-purple-300 uppercase tracking-[0.4em] text-xs mb-4">
                  Mission
                </p>
                <h3 className="text-2xl font-bold mb-3">
                  To offer an immersive experience
                </h3>
                <p className="text-slate-300 leading-7">
                  Creating a space where people can find events, connect with
                  communities and explore new passions becomes natural.
                </p>
              </div>
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Community",
                description:
                  "A network of enthusiasts, artists and organizers connected by powerful experiences.",
              },
              {
                title: "Discovery",
                description:
                  "Events carefully selected to explore culture, music and innovation.",
              },
              {
                title: "Impact",
                description:
                  "Supporting local creators and fostering connections that drive growth.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 hover:border-primary/30 transition-all"
              >
                <h3 className="text-2xl font-semibold mb-3 text-purple-500">
                  {item.title}
                </h3>
                <p className="text-slate-300 leading-7">{item.description}</p>
              </div>
            ))}
          </section>

          <section className="bg-[#111228] rounded-[32px] border border-white/10 p-10 shadow-[0_30px_60px_rgba(0,0,0,0.25)]">
            <div className="grid gap-10 lg:grid-cols-3">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.4em] text-purple-300">
                  Our figures
                </p>
                <h3 className="text-4xl font-bold">
                  Success in every experience
                </h3>
              </div>

              <div className="grid gap-4">
                {stats.slice(0, 2).map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-3xl bg-slate-950/70 p-6 border border-white/10"
                  >
                    <p className="text-3xl font-extrabold text-purple-500">
                      {stat.value}
                    </p>
                    <p className="text-slate-400 mt-2">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="grid gap-4">
                {stats.slice(2, 4).map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-3xl bg-slate-950/70 p-6 border border-white/10"
                  >
                    <p className="text-3xl font-extrabold text-purple-500">
                      {stat.value}
                    </p>
                    <p className="text-slate-400 mt-2">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
      <section className="bg-slate-950 text-white px-4 py-16 ">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-purple-500 font-bold mb-12 text-center">
            What we offer
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offre.map((item) => (
              <div key={item.title} className="bg-slate-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-500 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <section className="rounded-[32px] border border-white/10 mt-10 max-w-280 mx-auto bg-slate-900/70 p-10 text-center">
          <h2 className="text-3xl text-purple-500 font-bold mb-4">
            Join us in the Congo Sphere adventure
          </h2>
          <p className="text-slate-300 mb-8">
            Whether you are an organizer, artist or enthusiast, we are building
            together a more vibrant event scene.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-5">
            <Link
              href="/events"
              className="flex md:max-w-45 items-center justify-center h-10 gap-2 px-4 py-3 signature-gradient rounded-full cursor-pointer text-on-primary-fixed font-bold text-sm transition-all hover:shadow-[0_0_15px_rgba(204,151,255,0.4)] active:scale-95 shadow-[0_0_10px_rgba(204,151,255,0.3)] disabled:opacity-50 disabled:cursor-not-allowed "
            >
              View events
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border  h-10 border-white/10 bg-white/5 px-8 py-3 text-sm font-bold text-white hover:border-purple-300 hover:text-purple-200 transition-all"
            >
              Contact us
            </Link>
          </div>
        </section>
      </section>
    </>
  );
}
