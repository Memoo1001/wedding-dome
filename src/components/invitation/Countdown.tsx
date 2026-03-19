"use client";

import { useEffect, useMemo, useState } from "react";

function pad2(n: number) {
  return String(n).padStart(2, "0");
}

export default function Countdown({ targetDate }: { targetDate: string }) {
  const targetMs = useMemo(() => new Date(targetDate).getTime(), [targetDate]);
  // Evita discrepancias entre SSR y el primer render en el cliente.
  // En SSR, `mounted` será false y mostramos valores estáticos.
  const [mounted, setMounted] = useState(false);
  const [nowMs, setNowMs] = useState(0);

  useEffect(() => {
    setMounted(true);
    setNowMs(Date.now());

    const id = window.setInterval(() => setNowMs(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  // Render estático hasta que el componente esté montado en el cliente.
  if (!mounted) {
    return (
      <div className="w-full max-w-xl rounded-2xl border border-[#C8A24B]/60 bg-black/20 p-5 backdrop-blur-sm">
        <div className="flex items-center justify-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-[#C8A24B]" />
          <span className="text-xs font-medium uppercase tracking-[0.35em] text-white/85">
            Countdown
          </span>
        </div>

        <div className="mt-4 grid grid-cols-4 gap-2 text-center sm:gap-3">
          {["00", "00", "00", "00"].map((v, idx) => {
            const labels = ["Días", "Horas", "Min", "Seg"] as const;
            return (
              <div
                // eslint-disable-next-line react/no-array-index-key
                key={idx}
                className="rounded-xl border border-[#C8A24B]/35 bg-white/5 p-3"
              >
                <div className="font-serif text-3xl font-semibold leading-none text-white">
                  {v}
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-widest text-[#C8A24B]">
                  {labels[idx]}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-4 text-center text-sm text-white/75">
          Faltan solo unos instantes para el gran día.
        </div>
      </div>
    );
  }

  const diff = Math.max(0, targetMs - nowMs);

  const dayMs = 24 * 60 * 60 * 1000;
  const hourMs = 60 * 60 * 1000;
  const minMs = 60 * 1000;

  const days = Math.floor(diff / dayMs);
  const hours = Math.floor((diff % dayMs) / hourMs);
  const minutes = Math.floor((diff % hourMs) / minMs);
  const seconds = Math.floor((diff % minMs) / 1000);

  const isComplete = diff <= 0;

  return (
    <div className="w-full max-w-xl rounded-2xl border border-[#C8A24B]/60 bg-black/20 p-5 backdrop-blur-sm">
      <div className="flex items-center justify-center gap-3">
        <span className="h-1.5 w-1.5 rounded-full bg-[#C8A24B]" />
        <span className="text-xs font-medium uppercase tracking-[0.35em] text-white/85">
          Countdown
        </span>
      </div>

      <div className="mt-4 grid grid-cols-4 gap-2 text-center sm:gap-3">
        <div className="rounded-xl border border-[#C8A24B]/35 bg-white/5 p-3">
          <div className="font-serif text-3xl font-semibold leading-none text-white">
            {isComplete ? "00" : pad2(days)}
          </div>
          <div className="mt-1 text-[11px] uppercase tracking-widest text-[#C8A24B]">
            Días
          </div>
        </div>

        <div className="rounded-xl border border-[#C8A24B]/35 bg-white/5 p-3">
          <div className="font-serif text-3xl font-semibold leading-none text-white">
            {pad2(hours)}
          </div>
          <div className="mt-1 text-[11px] uppercase tracking-widest text-[#C8A24B]">
            Horas
          </div>
        </div>

        <div className="rounded-xl border border-[#C8A24B]/35 bg-white/5 p-3">
          <div className="font-serif text-3xl font-semibold leading-none text-white">
            {pad2(minutes)}
          </div>
          <div className="mt-1 text-[11px] uppercase tracking-widest text-[#C8A24B]">
            Min
          </div>
        </div>

        <div className="rounded-xl border border-[#C8A24B]/35 bg-white/5 p-3">
          <div className="font-serif text-3xl font-semibold leading-none text-white">
            {pad2(seconds)}
          </div>
          <div className="mt-1 text-[11px] uppercase tracking-widest text-[#C8A24B]">
            Seg
          </div>
        </div>
      </div>

      <div className="mt-4 text-center text-sm text-white/75">
        {isComplete ? "¡Comenzamos!" : "Faltan solo unos instantes para el gran día."}
      </div>
    </div>
  );
}

