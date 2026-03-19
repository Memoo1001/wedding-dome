"use client";

import { useMemo, useState } from "react";
import { BookOpenText, CalendarDays, Gift, MapPin, X } from "lucide-react";
import Countdown from "./Countdown";

type RSVPState = "yes" | "no";

export default function InvitationPage() {
  // Reemplaza la fecha/horario por los tuyos (ISO recomendado).
  const eventDateIso = useMemo(
    () => "2026-07-20T19:00:00",
    []
  );

  const heroBackgroundUrl = useMemo(() => "/boda.jpg", []);

  const [rsvpOpen, setRsvpOpen] = useState(false);
  const [name, setName] = useState("");
  const [state, setState] = useState<RSVPState>("yes");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
    // No hay backend: mantenemos el flujo solo como demostración UI.
    window.setTimeout(() => setRsvpOpen(false), 1300);
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="relative min-h-[100svh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("${heroBackgroundUrl}")`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/60" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 18% 12%, rgba(200,162,75,0.22), transparent 40%), radial-gradient(circle at 85% 45%, rgba(200,162,75,0.16), transparent 38%)",
          }}
        />

        <div className="relative z-10 flex min-h-[100svh] items-center justify-center px-6">
          <div className="w-full max-w-4xl text-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-[#C8A24B]/40 bg-black/25 px-5 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C8A24B]" />
              <span className="text-xs font-medium uppercase tracking-[0.35em] text-white/85">
                Bodas
              </span>
            </div>

            <h1 className="mt-6 font-serif text-4xl font-semibold tracking-wide text-white sm:text-6xl">
              Isabella &amp; Sebastian
            </h1>

            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-white/80">
              Los esperamos para celebrar nuestro amor en una noche especial.
            </p>

            <div className="mx-auto mt-10 max-w-2xl">
              <Countdown targetDate={eventDateIso} />
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl px-6 pb-16">
        <div className="grid gap-6 pt-10 sm:pt-16 md:grid-cols-12">
          <article className="md:col-span-6 rounded-3xl border border-[#C8A24B]/30 bg-white/60 p-7 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl border border-[#C8A24B]/40 bg-white/70">
                <BookOpenText className="h-5 w-5 text-[#C8A24B]" />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  Nuestra Historia
                </h2>
                <p className="mt-3 text-foreground/80 leading-relaxed">
                  Desde el primer encuentro, supimos que esto era algo
                  distinto. Hoy, con gratitud y amor, damos el siguiente paso.
                </p>
              </div>
            </div>
          </article>

          <article className="md:col-span-6 rounded-3xl border border-[#C8A24B]/30 bg-white/60 p-7 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl border border-[#C8A24B]/40 bg-white/70">
                <CalendarDays className="h-5 w-5 text-[#C8A24B]" />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  Dónde y Cuándo
                </h2>

                <div className="mt-5 space-y-3 text-foreground/80">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 text-[#C8A24B]" />
                    <div>
                      <div className="font-medium text-foreground">
                        Jardín de los Sueños
                      </div>
                      <div className="text-sm">Calle Principal 123, Ciudad</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CalendarDays className="mt-0.5 h-4 w-4 text-[#C8A24B]" />
                    <div>
                      <div className="font-medium text-foreground">
                        20 de Julio de 2026
                      </div>
                      <div className="text-sm">19:00 hrs · Recepción desde las 18:30</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article className="md:col-span-12 rounded-3xl border border-[#C8A24B]/30 bg-white/60 p-7 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl border border-[#C8A24B]/40 bg-white/70">
                <Gift className="h-5 w-5 text-[#C8A24B]" />
              </div>
              <div className="w-full">
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  Mesa de Regalos
                </h2>

                <p className="mt-3 text-foreground/80 leading-relaxed">
                  Tu presencia es el regalo más importante. Si deseas sumarte a
                  nuestro nuevo hogar, aquí dejamos opciones de colaboración:
                </p>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-[#C8A24B]/25 bg-white/50 p-5">
                    <div className="text-xs font-medium uppercase tracking-[0.3em] text-foreground/60">
                      Transferencia
                    </div>
                    <div className="mt-2 font-medium text-foreground">
                      Cuenta a confirmar
                    </div>
                    <div className="mt-1 text-sm text-foreground/75">
                      (Agrega aquí el dato que prefieras)
                    </div>
                  </div>

                  <div className="rounded-2xl border border-[#C8A24B]/25 bg-white/50 p-5">
                    <div className="text-xs font-medium uppercase tracking-[0.3em] text-foreground/60">
                      Lista de regalos
                    </div>
                    <div className="mt-2 font-medium text-foreground">
                      Enlace disponible pronto
                    </div>
                    <div className="mt-1 text-sm text-foreground/75">
                      (Puedes añadir un link si lo tienes)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>

        <section className="mt-12 rounded-3xl border border-[#C8A24B]/40 bg-white/60 p-7 backdrop-blur-sm sm:p-10">
          <div className="text-center">
            <div className="inline-flex items-center justify-center gap-3 rounded-full border border-[#C8A24B]/40 bg-white/40 px-6 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C8A24B]" />
              <span className="text-xs font-medium uppercase tracking-[0.35em] text-foreground/70">
                RSVP
              </span>
            </div>

            <h2 className="mt-5 font-serif text-4xl font-semibold text-foreground">
              Confirmar Asistencia
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-foreground/75 leading-relaxed">
              Confirma tu presencia con unos datos básicos. Te enviaremos un mensaje de confirmación.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <button
                type="button"
                onClick={() => {
                  setSent(false);
                  setRsvpOpen(true);
                }}
                className="inline-flex items-center justify-center rounded-full border border-[#C8A24B]/70 bg-[#C8A24B]/10 px-8 py-3 font-medium text-foreground transition hover:bg-[#C8A24B]/20"
              >
                Confirmar Asistencia
              </button>

              <a
                href="mailto:tu-email@ejemplo.com?subject=RSVP%20Isabella%20%26%20Sebastian"
                className="inline-flex items-center justify-center rounded-full border border-foreground/15 bg-white/40 px-8 py-3 font-medium text-foreground/90 transition hover:bg-white/60"
              >
                Enviar mensaje
              </a>
            </div>
          </div>
        </section>
      </main>

      {rsvpOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4"
          role="dialog"
          aria-modal="true"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setRsvpOpen(false);
          }}
        >
          <div className="w-full max-w-lg rounded-3xl border border-[#C8A24B]/40 bg-background p-6 shadow-[0_30px_90px_rgba(0,0,0,0.5)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xs font-medium uppercase tracking-[0.35em] text-foreground/60">
                  RSVP
                </div>
                <h3 className="mt-2 font-serif text-2xl font-semibold text-foreground">
                  Confirmar Asistencia
                </h3>
              </div>
              <button
                type="button"
                className="rounded-full border border-foreground/15 bg-white/40 p-2 transition hover:bg-white/60"
                onClick={() => setRsvpOpen(false)}
                aria-label="Cerrar"
              >
                <X className="h-5 w-5 text-foreground" />
              </button>
            </div>

            {!sent ? (
              <form onSubmit={onSubmit} className="mt-5 space-y-4">
                <label className="block">
                  <div className="text-sm font-medium text-foreground/85">
                    Nombre
                  </div>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Tu nombre"
                    className="mt-2 w-full rounded-2xl border border-foreground/15 bg-white/55 px-4 py-3 outline-none ring-[#C8A24B]/40 focus:ring-2"
                  />
                </label>

                <label className="block">
                  <div className="text-sm font-medium text-foreground/85">
                    ¿Asistirás?
                  </div>
                  <select
                    value={state}
                    onChange={(e) => setState(e.target.value as RSVPState)}
                    className="mt-2 w-full rounded-2xl border border-foreground/15 bg-white/55 px-4 py-3 outline-none ring-[#C8A24B]/40 focus:ring-2"
                  >
                    <option value="yes">Sí, asistiré</option>
                    <option value="no">No podré asistir</option>
                  </select>
                </label>

                <label className="block">
                  <div className="text-sm font-medium text-foreground/85">
                    Mensaje (opcional)
                  </div>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Un saludo para Isabella y Sebastian"
                    rows={3}
                    className="mt-2 w-full resize-none rounded-2xl border border-foreground/15 bg-white/55 px-4 py-3 outline-none ring-[#C8A24B]/40 focus:ring-2"
                  />
                </label>

                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setRsvpOpen(false)}
                    className="rounded-full border border-foreground/15 bg-white/40 px-6 py-3 font-medium text-foreground/90 transition hover:bg-white/60"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="rounded-full border border-[#C8A24B]/70 bg-[#C8A24B]/10 px-6 py-3 font-medium text-foreground transition hover:bg-[#C8A24B]/20"
                  >
                    Enviar RSVP
                  </button>
                </div>
              </form>
            ) : (
              <div className="mt-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-[#C8A24B]/40 bg-[#C8A24B]/10">
                  <span className="text-[#C8A24B] text-2xl">✓</span>
                </div>
                <div className="mt-4 text-foreground/85 font-medium">
                  ¡Gracias! Tu confirmación está lista.
                </div>
                <div className="mt-1 text-sm text-foreground/70">
                  (Demo UI: aquí iría la integración real.)
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

