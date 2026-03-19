import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function getRateLimitInfo(ip: string) {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 3600000 });
    return { allowed: true };
  }
  if (entry.count >= 5) {
    return { allowed: false };
  }
  entry.count++;
  return { allowed: true };
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "unknown";
    const { allowed } = getRateLimitInfo(ip);
    if (!allowed) {
      return NextResponse.json(
        { error: "Trop de demandes. Réessayez dans une heure." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { nom, prenom, email, date, service, couverts, telephone, message } = body;

    if (!nom || !prenom || !email || !date || !service || !couverts) {
      return NextResponse.json(
        { error: "Veuillez remplir tous les champs obligatoires." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Adresse email invalide." },
        { status: 400 }
      );
    }

    const serviceLabel = service === "dejeuner" ? "Déjeuner" : "Dîner";

    await resend.emails.send({
      from: "Sparkana Réservations <bonjour@sparkana.fr>",
      to: ["kamal@sparkana.fr"],
      subject: `Nouvelle réservation — ${prenom} ${nom} — ${date}`,
      html: `
        <div style="background:#0d0b08;color:#f4ede0;padding:40px;font-family:Georgia,serif;">
          <h1 style="color:#c8a96e;font-weight:300;font-size:28px;margin-bottom:30px;">
            Nouvelle demande de réservation
          </h1>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="color:#8a8070;padding:8px 16px 8px 0;">Nom</td><td style="color:#f4ede0;padding:8px 0;">${prenom} ${nom}</td></tr>
            <tr><td style="color:#8a8070;padding:8px 16px 8px 0;">Email</td><td style="color:#f4ede0;padding:8px 0;">${email}</td></tr>
            <tr><td style="color:#8a8070;padding:8px 16px 8px 0;">Téléphone</td><td style="color:#f4ede0;padding:8px 0;">${telephone || "Non renseigné"}</td></tr>
            <tr><td style="color:#8a8070;padding:8px 16px 8px 0;">Date</td><td style="color:#f4ede0;padding:8px 0;">${date}</td></tr>
            <tr><td style="color:#8a8070;padding:8px 16px 8px 0;">Service</td><td style="color:#f4ede0;padding:8px 0;">${serviceLabel}</td></tr>
            <tr><td style="color:#8a8070;padding:8px 16px 8px 0;">Couverts</td><td style="color:#f4ede0;padding:8px 0;">${couverts}</td></tr>
            ${message ? `<tr><td style="color:#8a8070;padding:8px 16px 8px 0;">Message</td><td style="color:#f4ede0;padding:8px 0;">${message}</td></tr>` : ""}
          </table>
        </div>
      `,
    });

    await resend.emails.send({
      from: "Le Mas des Garrigues <bonjour@sparkana.fr>",
      to: [email],
      subject: "Votre réservation au Mas des Garrigues",
      html: `
        <div style="background:#0d0b08;color:#f4ede0;padding:40px;font-family:Georgia,serif;">
          <h1 style="color:#c8a96e;font-weight:300;font-size:28px;margin-bottom:16px;">
            Merci, ${prenom}
          </h1>
          <p style="color:#8a8070;line-height:1.8;margin-bottom:24px;">
            Nous avons bien reçu votre demande de réservation pour le <strong style="color:#f4ede0;">${date}</strong>
            (${serviceLabel}) pour <strong style="color:#f4ede0;">${couverts} personne${Number(couverts) > 1 ? "s" : ""}</strong>.
          </p>
          <p style="color:#8a8070;line-height:1.8;margin-bottom:24px;">
            Notre équipe vous contactera sous 24h pour confirmer votre table.
          </p>
          <div style="border-top:1px solid rgba(200,169,110,0.2);padding-top:24px;margin-top:24px;">
            <p style="color:#c8a96e;font-size:14px;">Le Mas des Garrigues</p>
            <p style="color:#8a8070;font-size:13px;">04 66 72 72 72 · contact@masdesgarrigues.fr</p>
            <p style="color:#8a8070;font-size:13px;">Lieu-dit La Garrigue Haute, 30700 Uzès</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Erreur serveur. Veuillez réessayer." },
      { status: 500 }
    );
  }
}
