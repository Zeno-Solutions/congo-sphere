"use client";
import FuzzyText from "../FuzzyText";
import Contenaire from "../Contenaire";
import Input from "../ui/input";
export default function Newsletter() {
  return (
    <Contenaire className="mt-10">
      <section className=" relative rounded-[3rem] overflow-hidden bg-slate-900 border border-white/5 shadow-2xl ">
        <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-secondary/10"></div>
        <div className="relative grid lg:grid-cols-2 gap-12 p-12 md:p-20 items-center">
          <div className="md:w-full">
            <h2 className="text-4xl font-extrabold font-headline text-white mb-6 leading-tight">
              Stay in the Orbit.
            </h2>
            <p className="text-on-surface-variant text-lg mb-8 max-w-md">
              Get exclusive access to pre-sale tickets, secret events, and
              monthly curated highlights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                className="bg-surface-container-highest border-none rounded-full px-6 py-4 grow text-white placeholder:text-outline ring-2 ring-primary/50 font-body "
                placeholder="your@email.com"
                type="email"
              />
              <button className="text-on-primary-fixed font-bold font-label px-8 py-4 rounded-full shadow-[0_0_20px_rgba(204,151,255,0.4)] hover:shadow-[0_0_30px_rgba(204,151,255,0.6)] transition-all active:scale-95 cursor-pointer">
                Subscribe
              </button>
            </div>
            <p className="text-[10px] text-outline mt-4 uppercase tracking-widest font-bold">
              No spam. Only magic. Unsubscribe anytime.
            </p>
          </div>
          <div className="hidden md:block relative">
            <video
              autoPlay
              muted
              loop
              playsInline
              width={600}
              height={600}
              className="rounded-4xl w-full h-75 object-cover shadow-2xl rotate-3 scale-105 opacity-80 border border-white/10"
            >
              {" "}
              <source src="/aurora.webm" type="video/mp4" />
            </video>

            {/* Overlay sombre */}

            <div className="absolute flex w-full justify-center  mx-auto my-25 h-20 inset-0">
              {/* Contenu */}
              <div className=" w-full z-10 flex flex-col gap-5 items-center justify-center">
                <FuzzyText
                  baseIntensity={0.09}
                  hoverIntensity={0.19}
                  enableHover={false}
                  fontSize={50}
                  letterSpacing={2}
                >
                  Congo Sphere
                </FuzzyText>
                <FuzzyText
                  baseIntensity={0.09}
                  hoverIntensity={0.19}
                  enableHover={false}
                  fontSize={90}
                  letterSpacing={2}
                >
                  2026
                </FuzzyText>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Contenaire>
  );
}
