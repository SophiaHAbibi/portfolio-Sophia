import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";
import sophiaAsset from "@/assets/sophia.jpg";
import rugsAsset from "@/assets/profile-rugs.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sophia — Front-End Developer & Founder of Mafrash" },
      { name: "description", content: "Portfolio of Sophia: front-end developer crafting refined, woven-with-care web experiences. Founder of Mafrash Persian rugs." },
      { property: "og:title", content: "Sophia — Front-End Developer & Founder of Mafrash" },
      { property: "og:description", content: "Where code meets craft. Front-end portfolio with a Persian soul." },
      { property: "og:image", content: rugsAsset },
      { name: "twitter:image", content: rugsAsset },
    ],
  }),
  component: Index,
});

const skills = [
  { name: "React & Next.js", level: 95 },
  { name: "TypeScript", level: 92 },
  { name: "Tailwind CSS", level: 96 },
  { name: "Framer Motion", level: 88 },
  { name: "Node.js / APIs", level: 80 },
  { name: "UI / UX Design", level: 85 },
];

const projects = [
  {
    title: "Mafrash — Rug Atelier",
    tag: "E-commerce · Brand",
    desc: "A boutique storefront for hand-knotted Persian rugs. Storytelling product pages, 3D room preview, and a slow, tactile checkout flow.",
    tech: ["Next.js", "Stripe", "GSAP"],
    color: "from-[oklch(0.45_0.16_28)] to-[oklch(0.55_0.17_18)]",
  },
  {
    title: "Loom — Design System",
    tag: "Open source",
    desc: "A pattern library inspired by textile motifs. 60+ components, fully themable tokens, and a Figma-to-code bridge.",
    tech: ["React", "TypeScript", "Storybook"],
    color: "from-[oklch(0.35_0.09_240)] to-[oklch(0.45_0.16_28)]",
  },
  {
    title: "Saffron Notes",
    tag: "Web app",
    desc: "A reading journal with a serif-first reading mode, highlight constellations, and gentle weekly digests.",
    tech: ["Remix", "Postgres", "tRPC"],
    color: "from-[oklch(0.74_0.16_68)] to-[oklch(0.55_0.17_18)]",
  },
  {
    title: "Kilim Motion",
    tag: "Creative coding",
    desc: "Generative SVG patterns inspired by kilim weaving — exported as printable posters and animated hero backgrounds.",
    tech: ["Canvas", "WebGL", "Vite"],
    color: "from-[oklch(0.55_0.17_18)] to-[oklch(0.35_0.09_240)]",
  },
];

const testimonials = [
  {
        quote: "We have been working on several projects together, and Sophia is one of the best people I had as a colleague. She is full of energy, motivation, and perseverance when it comes to a complex topic. Sophia would be a valuable member of any team.",
    name: "Ali Heristchian",
        role: "Technical Lead at Conrad Electronic",
  },
  {
      quote: "Sophia is a joy to work with. She handled our Web page assignment with aplomb and diligence, displaying the ability to follow creative direction while adding her own creative input in a diplomatic and useful way. Her work led to an increase in click-throughs. I recommend her to anyone who needs design and Website work, She is amazing and you won't regret it.",
    name: "Arshia Pasdar",
      role: "Digital Marketing Manager at J2 Sourcing",
  },
  {
      quote: "I have known Sophia for a long time, and I have seen her work. She has fantastic work ethics, great knowledge of software tools, and excellent understanding of customer requirements. Her work has always been of high quality, and delivered on time. Perhaps as importantly, she has great communication skills, is easy to work with, and is well regarded and liked by her colleagues. I highly recommend Sophia.",
    name: "Shahin H",
      role: "Technical Leader at Cisco",
  },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setShown(true), io.disconnect()),
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, shown };
}

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, shown } = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function Index() {
  const [sent, setSent] = useState(false);
    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const response = await fetch("https://formspree.io/f/xzdqkywn", {
            method: "POST",
            body: formData,
            headers: {
                Accept: "application/json",
            },
        });

        if (response.ok) {
            setSent(true);
            e.currentTarget.reset();
        } else {
            alert("Something went wrong. Please try again.");
        }
    };

  return (
    <div className="min-h-screen rug-pattern overflow-x-hidden">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="group flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground font-display text-lg transition-transform group-hover:rotate-12">S</span>
            <span className="font-display text-xl font-semibold tracking-tight">Sophia</span>
          </a>
          <div className="hidden gap-8 md:flex text-sm">
            {["about", "skills", "work", "testimonials", "contact"].map((s) => (
              <a key={s} href={`#${s}`} className="relative text-muted-foreground transition-colors hover:text-foreground after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full">
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </a>
            ))}
          </div>
          <a href="#contact" className="rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition-all hover:bg-primary hover:scale-105">
            Let's talk
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative mx-auto max-w-6xl px-6 pt-20 pb-32">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="animate-fade-up">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Available for Europe
            </p>
            <h1 className="font-display text-5xl leading-[1.05] sm:text-6xl md:text-7xl">
              Where <span className="text-gradient-warm italic">code</span> meets <span className="text-gradient-warm italic">craft</span>.
            </h1>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              I'm Sophia — a front-end developer weaving thoughtful interfaces, and the founder of{" "}
              <span className="font-medium text-foreground">Mafrash</span>, a Persian rug atelier.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#work" className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-warm transition-all hover:translate-y-[-2px] hover:shadow-soft">
                View my work
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a href="#contact" className="rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-medium transition-all hover:bg-card hover:border-primary">
                Get in touch
              </a>
            </div>
            <div className="mt-12 flex gap-8 text-sm">
              <div><div className="font-display text-3xl text-primary">10+</div><div className="text-muted-foreground">Years coding</div></div>
              <div><div className="font-display text-3xl text-primary">40+</div><div className="text-muted-foreground">Projects shipped</div></div>
              <div><div className="font-display text-3xl text-primary">1</div><div className="text-muted-foreground">Rug brand</div></div>
            </div>
          </div>

          <div className="relative animate-fade-up" style={{ animationDelay: "200ms" }}>
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 via-accent/20 to-transparent blur-2xl animate-float" />
            <div className="relative overflow-hidden rounded-3xl shadow-warm">
              <img
                src={rugsAsset}
                alt="Sophia with Persian rugs from her Mafrash collection"
                className="h-[520px] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <p className="font-display text-sm italic text-white/90">"Every interface tells a story, like every knot in a rug."</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-card px-5 py-3 shadow-soft border border-border animate-float" style={{ animationDelay: "1s" }}>
              <div className="text-xs text-muted-foreground">Founder</div>
              <div className="font-display text-lg">Mafrash Rugs</div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-y border-border bg-card/40 py-24">
        <div className="mx-auto max-w-6xl px-6 grid gap-12 md:grid-cols-[1fr_2fr] items-center">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-accent/30 to-primary/30 blur-xl" />
              <img src={sophiaAsset} alt="Sophia portrait" className="relative h-72 w-72 rounded-full object-cover shadow-warm" />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">About</p>
            <h2 className="font-display text-4xl md:text-5xl mb-6">Two crafts, one philosophy.</h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              I grew up surrounded by Persian rugs — geometric stories handed down over generations. That patience and love for pattern is exactly what I bring to the web.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              By day I build fast, accessible, beautifully animated interfaces with React and TypeScript. By night I curate Mafrash, a small brand bringing authentic, hand-knotted rugs to homes around the world.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Skills</p>
          <h2 className="font-display text-4xl md:text-5xl mb-12">The threads I weave with.</h2>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((s, i) => (
            <Reveal key={s.name} delay={i * 80}>
              <div className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-warm hover:border-primary">
                <div className="flex items-baseline justify-between mb-3">
                  <span className="font-display text-xl">{s.name}</span>
                  <span className="text-sm text-muted-foreground tabular-nums">{s.level}%</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary via-accent to-primary animate-weave transition-all duration-1000 group-hover:brightness-110"
                    style={{ width: `${s.level}%` }}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="border-y border-border bg-card/40 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Selected work</p>
            <h2 className="font-display text-4xl md:text-5xl mb-12">Projects, knotted with care.</h2>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <article className="group relative overflow-hidden rounded-3xl border border-border bg-background p-8 transition-all hover:-translate-y-2 hover:shadow-warm h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 transition-opacity duration-500 group-hover:opacity-10`} />
                  <div className="relative">
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-xs uppercase tracking-widest text-muted-foreground">{p.tag}</span>
                      <span className="text-2xl transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
                    </div>
                    <h3 className="font-display text-3xl mb-3 group-hover:text-primary transition-colors">{p.title}</h3>
                    <p className="text-muted-foreground mb-6">{p.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span key={t} className="rounded-full border border-border bg-card px-3 py-1 text-xs">{t}</span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Kind words</p>
          <h2 className="font-display text-4xl md:text-5xl mb-12">From people I've worked with.</h2>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 120}>
              <figure className="group h-full rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-soft hover:border-accent">
                <div className="mb-4 font-display text-5xl leading-none text-primary/40 group-hover:text-primary transition-colors">"</div>
                <blockquote className="text-base leading-relaxed mb-6">{t.quote}</blockquote>
                <figcaption>
                  <div className="font-medium">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative overflow-hidden border-t border-border bg-foreground text-background py-24">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "radial-gradient(circle at 30% 20%, oklch(0.74 0.16 68) 0, transparent 50%), radial-gradient(circle at 70% 80%, oklch(0.45 0.16 28) 0, transparent 50%)"
        }} />
        <div className="relative mx-auto max-w-4xl px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Contact</p>
            <h2 className="font-display text-4xl md:text-6xl mb-6">Let's weave something together.</h2>
            <p className="text-lg text-background/70 mb-10 max-w-xl">
              Whether it's a website, a rug for your living room, or both — I'd love to hear from you.
            </p>
          </Reveal>
          <Reveal delay={150}>
            {sent ? (
              <div className="rounded-2xl border border-accent/40 bg-accent/10 p-8 text-center">
                <p className="font-display text-2xl mb-2">Thank you ✦</p>
                <p className="text-background/70">Your message has landed safely. I'll reply within 48 hours.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-4 md:grid-cols-2">
                                  <input
                                      required
                                      name="name"
                                      placeholder="Your name"
                                      className="rounded-xl border border-background/20 bg-background/5 px-4 py-3 placeholder:text-background/40 focus:border-accent focus:outline-none transition-colors"
                                  />

                                  <input
                                      required
                                      name="email"
                                      type="email"
                                      placeholder="Email"
                                      className="rounded-xl border border-background/20 bg-background/5 px-4 py-3 placeholder:text-background/40 focus:border-accent focus:outline-none transition-colors"
                                  />

                                  <textarea
                                      required
                                      name="message"
                                      rows={5}
                                      placeholder="Tell me about your project…"
                                      className="md:col-span-2 rounded-xl border border-background/20 bg-background/5 px-4 py-3 placeholder:text-background/40 focus:border-accent focus:outline-none transition-colors resize-none"
                                  /> <button type="submit" className="md:col-span-2 group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 font-medium text-accent-foreground transition-all hover:scale-[1.02] hover:shadow-warm">
                  Send message
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </button>
              </form>
            )}
          </Reveal>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-background/10 pt-6 text-sm text-background/60">
                      <a href="https://mafrashstore.com/" className="hover:text-accent transition-colors">Mafrash</a>
            <div className="flex gap-6">
              <a href="https://github.com/SophiaHAbibi" className="hover:text-accent transition-colors">GitHub</a>
              <a href="https://www.linkedin.com/in/sophiahabibi/" className="hover:text-accent transition-colors">LinkedIn</a>
              
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Sophia · Woven with code & care
      </footer>
    </div>
  );
}
