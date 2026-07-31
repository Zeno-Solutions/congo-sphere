import Input from "@/components/ui/input";
export const metadata = {
  title: "Contact - Congo Sphere",
  description:
    "Contactez Congo Sphere pour toute question, suggestion ou partenariat.",
};

export default function Contact() {
  return (
    <>
      <section className="relative min-h-[70vh] bg-[#06060c] flex items-center justify-center overflow-hidden pt-20">
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
                id="grid-contact"
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
            <rect width="100%" height="100%" fill="url(#grid-contact)" />
          </svg>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <p className="uppercase tracking-[0.4em] text-sm text-purple-300 mb-4">
            Contact
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            Need help? We're here for you.
          </h1>
          <p className="mx-auto max-w-3xl text-base md:text-xl text-slate-300 leading-8">
            Ask us your questions, share your ideas or plan a collaboration with
            our Congo Sphere team.
          </p>
        </div>
      </section>

      <main className="bg-slate-950 text-white px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-16">
          <section className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[32px] border border-white/10 bg-slate-900/70 p-10 shadow-[0_30px_60px_rgba(0,0,0,0.25)]">
              <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
              <p className="text-slate-300 leading-8 mb-8">
                For any questions about events, partnerships or your experience
                on Congo Sphere, our team is ready to respond quickly.
              </p>
              <div className="space-y-6">
                <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
                  <p className="text-purple-300 uppercase tracking-[0.4em] text-xs mb-2">
                    Email
                  </p>
                  <p className="text-white font-semibold">
                    contact@congosphere.com
                  </p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
                  <p className="text-purple-300 uppercase tracking-[0.4em] text-xs mb-2">
                    Phone
                  </p>
                  <p className="text-white font-semibold">+242 06 000 00 00</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
                  <p className="text-purple-300 uppercase tracking-[0.4em] text-xs mb-2">
                    Address
                  </p>
                  <p className="text-white font-semibold">
                    Brazzaville, Republic of the Congo
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-slate-900/70 p-10 shadow-[0_30px_60px_rgba(0,0,0,0.25)]">
              <h2 className="text-3xl font-bold mb-4">Send us a message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-300">
                    Full name
                  </label>
                  <Input type="text" placeholder="Your name" name="name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-300">
                    Email address
                  </label>
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    name="email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-300">
                    Subject
                  </label>
                  <Input
                    type="text"
                    placeholder="Subject of your message"
                    name="subject"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-300">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    name="message"
                    placeholder="Write your message here..."
                    className="w-full resize-none rounded-3xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full shadow-[0_0_20px_rgba(204,151,255,0.4)] hover:shadow-[0_0_30px_rgba(204,151,255,0.6)]  px-6 py-3 text-white font-bold cursor-pointer transition-all active:scale-95"
                >
                  Send Message
                </button>
              </form>
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Support 24/7",
                text: "Responsive support for organizers and participants.",
              },
              {
                title: "Partnerships",
                text: "Collaborate with us to create greater experiences.",
              },
              {
                title: "User feedback",
                text: "Your voice helps improve the platform every day.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 transition-all hover:border-primary/30"
              >
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {item.title}
                </h3>
                <p className="text-slate-300 leading-7">{item.text}</p>
              </div>
            ))}
          </section>
        </div>
      </main>
    </>
  );
}
