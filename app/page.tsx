"use client";

import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
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

  return (
    <div ref={ref} className="fade-section">
      {children}
    </div>
  );
}

export default function Home() {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Partículas */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "#000000",
            },
          },
          fpsLimit: 60,
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
            },
            number: {
              value: 60,
            },
            opacity: {
              value: 0.2,
            },
            size: {
              value: { min: 1, max: 4 },
            },
          },
        }}
        className="absolute inset-0"
      />

      {/* Estrelas 3D */}
      <div className="absolute inset-0">
        <Canvas>
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />
        </Canvas>
      </div>

      {/* Hero */}
      <section className="relative z-10 h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-6xl font-bold mb-4">
          Kauan Brilhante
        </h1>

        <p className="text-2xl text-zinc-400 mb-6">
          Cloud Engineer
        </p>

        <p className="max-w-2xl text-zinc-500">
          AWS • Azure • Google Cloud • DevOps • Infrastructure
        </p>
      </section>

      {/* Academic */}
      <FadeInSection>
        <section className="relative z-10 max-w-4xl mx-auto py-24 px-6">
          <h2 className="text-4xl font-bold mb-10">
            Academic Experience
          </h2>

          <div className="bg-zinc-900/70 backdrop-blur-md p-6 rounded-2xl border border-zinc-800">
            <h3 className="text-2xl font-semibold">
              Universidade Católica de Pernambuco
            </h3>

            <p className="text-zinc-400 mt-2">
              Student — 2025.1
            </p>
          </div>
        </section>
      </FadeInSection>

      {/* Certifications */}
      <FadeInSection>
        <section className="relative z-10 max-w-4xl mx-auto py-24 px-6">
          <h2 className="text-4xl font-bold mb-10">
            Certifications
          </h2>

          <div className="grid gap-6">

            <div className="bg-zinc-900/70 backdrop-blur-md p-6 rounded-2xl border border-zinc-800">
              <h3 className="text-2xl font-semibold">
                AWS Certified Cloud Practitioner
              </h3>

              <p className="text-zinc-400 mt-2">
                Amazon Web Services (AWS)
              </p>
            </div>

            <div className="bg-zinc-900/70 backdrop-blur-md p-6 rounded-2xl border border-zinc-800">
              <h3 className="text-2xl font-semibold">
                AZ-900
              </h3>

              <p className="text-zinc-400 mt-2">
                Microsoft Azure
              </p>
            </div>

            <div className="bg-zinc-900/70 backdrop-blur-md p-6 rounded-2xl border border-zinc-800">
              <h3 className="text-2xl font-semibold">
                Google Associate Cloud Engineer
              </h3>

              <p className="text-zinc-400 mt-2">
                Google Cloud
              </p>
            </div>

          </div>
        </section>
      </FadeInSection>

    </main>
  );
}