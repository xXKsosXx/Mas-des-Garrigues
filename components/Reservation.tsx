"use client";

import { useState } from "react";

interface FormData {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  date: string;
  service: string;
  couverts: string;
  message: string;
}

export default function Reservation() {
  const [form, setForm] = useState<FormData>({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    date: "",
    service: "diner",
    couverts: "2",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
        setForm({
          nom: "",
          prenom: "",
          email: "",
          telephone: "",
          date: "",
          service: "diner",
          couverts: "2",
          message: "",
        });
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Une erreur est survenue.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Impossible de contacter le serveur.");
    }
  };

  const inputClass =
    "w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(200,169,110,0.2)] px-4 py-3 text-creme-light text-sm font-body focus:border-or focus:outline-none transition-colors";

  return (
    <section id="reservation" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-or uppercase tracking-[0.4em] text-[11px] mb-6">
            Votre Table
          </p>
          <h2
            className="font-display font-light text-creme-light leading-[1.1]"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            Réserver <span className="italic text-or">une table</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 reveal">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-or text-[10px] uppercase tracking-[0.3em] mb-2">
                  Nom *
                </label>
                <input
                  type="text"
                  name="nom"
                  value={form.nom}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-or text-[10px] uppercase tracking-[0.3em] mb-2">
                  Prénom *
                </label>
                <input
                  type="text"
                  name="prenom"
                  value={form.prenom}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-or text-[10px] uppercase tracking-[0.3em] mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-or text-[10px] uppercase tracking-[0.3em] mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  name="telephone"
                  value={form.telephone}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-5">
              <div>
                <label className="block text-or text-[10px] uppercase tracking-[0.3em] mb-2">
                  Date *
                </label>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-or text-[10px] uppercase tracking-[0.3em] mb-2">
                  Service *
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                  className={inputClass}
                >
                  <option value="dejeuner">Déjeuner</option>
                  <option value="diner">Dîner</option>
                </select>
              </div>
              <div>
                <label className="block text-or text-[10px] uppercase tracking-[0.3em] mb-2">
                  Couverts *
                </label>
                <select
                  name="couverts"
                  value={form.couverts}
                  onChange={handleChange}
                  required
                  className={inputClass}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n}>
                      {n} {n > 1 ? "personnes" : "personne"}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-or text-[10px] uppercase tracking-[0.3em] mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                className={`${inputClass} resize-none`}
                placeholder="Allergies, occasion spéciale, demandes particulières..."
              />
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-or text-noir py-4 uppercase tracking-[0.2em] text-[11px] font-medium hover:bg-or-light transition-colors duration-300 disabled:opacity-50"
            >
              {status === "loading" ? "Envoi en cours..." : "Réserver ma table"}
            </button>
            {status === "success" && (
              <p className="text-green-400 text-sm text-center">
                Votre demande de réservation a bien été envoyée. Nous vous confirmerons par email.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm text-center">{errorMsg}</p>
            )}
          </form>

          <div className="space-y-10">
            <div>
              <p className="text-or uppercase tracking-[0.3em] text-[10px] mb-4">
                Adresse
              </p>
              <p className="text-creme-light text-sm leading-relaxed">
                Lieu-dit La Garrigue Haute
                <br />
                30700 Uzès, Gard
              </p>
            </div>
            <div>
              <p className="text-or uppercase tracking-[0.3em] text-[10px] mb-4">
                Contact
              </p>
              <p className="text-creme-light text-sm leading-relaxed">
                04 66 72 72 72
                <br />
                contact@masdesgarrigues.fr
              </p>
            </div>
            <div>
              <p className="text-or uppercase tracking-[0.3em] text-[10px] mb-4">
                Horaires
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gris">Mer — Jeu</span>
                  <span className="text-creme-light">12h–14h / 19h–22h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gris">Ven — Sam</span>
                  <span className="text-creme-light">12h–14h / 19h–22h30</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gris">Dim</span>
                  <span className="text-creme-light">12h–15h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gris">Lun — Mar</span>
                  <span className="text-creme-light">Fermé</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
