"use client";

import { useEffect, useRef } from "react";

function FadeInSection({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className="fade-section">{children}</div>;
}

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <section className="h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-6xl font-bold mb-4">
          Kauan Brilhante
        </h1>

        <p className="text-2xl text-zinc-400">
          Cloud Engineer
        </p>
      </section>

      <FadeInSection>
        <section className="max-w-4xl mx-auto py-24 px-6">
          <h2 className="text-4xl font-bold mb-10">
            Academic Experience
          </h2>

          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
            <h3 className="text-2xl font-semibold">
              Universidade Católica de Pernambuco
            </h3>

            <p className="text-zinc-400 mt-2">
              Student — 2025.1
            </p>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="max-w-4xl mx-auto py-24 px-6">
          <h2 className="text-4xl font-bold mb-10">
            Certifications
          </h2>

          <div className="grid gap-6">
            <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
              AWS Cloud Practitioner
            </div>

            <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
              Microsoft AZ-900
            </div>

            <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
              Google Cloud Associate
            </div>
          </div>
        </section>
      </FadeInSection>
    </main>
  );
}