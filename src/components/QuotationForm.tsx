import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useLang } from "@/i18n/LanguageContext";

const quotationSchema = z.object({
  name: z.string().trim().min(2, "Nombre demasiado corto").max(100),
  email: z.string().trim().email("Email inválido").max(255),
  phone: z.string().trim().min(7, "Teléfono inválido").max(30),
  fromCity: z.string().trim().min(2, "Origen requerido").max(100),
  toCity: z.string().trim().min(2, "Destino requerido").max(100),
  departureDate: z.string().min(1, "Fecha requerida"),
  returnDate: z.string().optional().or(z.literal("")),
  passengers: z.coerce.number().int().min(1).max(50),
  tripType: z.enum(["one_way", "round_trip"]),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

type FormState = z.input<typeof quotationSchema>;

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  fromCity: "",
  toCity: "",
  departureDate: "",
  returnDate: "",
  passengers: 1,
  tripType: "one_way",
  message: "",
};

export const QuotationForm = () => {
  const { t } = useLang();
  const { toast } = useToast();
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key as string]) {
      setErrors((e) => {
        const { [key as string]: _omit, ...rest } = e;
        return rest;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = quotationSchema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.issues.forEach((issue) => {
        const path = issue.path[0] as string;
        if (path && !fieldErrors[path]) fieldErrors[path] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setSubmitting(true);
    try {
      const data = parsed.data;
      const { data: inserted, error } = await supabase
        .from("quotation_requests")
        .insert({
          name: data.name,
          email: data.email,
          phone: data.phone,
          from_city: data.fromCity,
          to_city: data.toCity,
          departure_date: data.departureDate,
          return_date: data.tripType === "round_trip" ? data.returnDate || null : null,
          passengers: data.passengers,
          trip_type: data.tripType,
          message: data.message || null,
        })
        .select("id")
        .single();

      if (error) throw error;

      // Email de confirmación al cliente
      await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "quotation-confirmation",
          recipientEmail: data.email,
          idempotencyKey: `quote-client-${inserted.id}`,
          templateData: {
            name: data.name,
            fromCity: data.fromCity,
            toCity: data.toCity,
            departureDate: data.departureDate,
          },
        },
      });

      // Notificación interna a operaciones
      await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "quotation-ops-notification",
          recipientEmail: "operaciones@numen-aviation.com",
          idempotencyKey: `quote-ops-${inserted.id}`,
          templateData: {
            name: data.name,
            email: data.email,
            phone: data.phone,
            fromCity: data.fromCity,
            toCity: data.toCity,
            departureDate: data.departureDate,
            returnDate: data.tripType === "round_trip" ? data.returnDate : undefined,
            passengers: data.passengers,
            tripType: data.tripType === "round_trip" ? "Redondo" : "Solo ida",
            message: data.message,
            requestId: inserted.id,
          },
        },
      });

      setSuccess(true);
      setForm(initialState);
    } catch (err) {
      console.error("Quotation submit failed", err);
      toast({
        title: t("qf_error_title"),
        description: t("qf_error_body"),
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="relative bg-bg-2/45 border border-foreground/10 p-10 reveal">
        <span className="text-[0.62rem] uppercase text-jade" style={{ letterSpacing: "0.25em" }}>
          {t("qf_success_eyebrow")}
        </span>
        <h3 className="font-serif text-2xl font-light mt-3 mb-4">
          {t("qf_success_title")}
        </h3>
        <p className="text-fg-3 text-[0.9rem] leading-relaxed">
          {t("qf_success_body")}
        </p>
        <button
          type="button"
          onClick={() => setSuccess(false)}
          className="mt-6 inline-flex text-[0.75rem] uppercase text-jade hover:text-foreground transition-colors"
          style={{ letterSpacing: "0.25em" }}
        >
          {t("qf_send_another")}
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full bg-transparent border border-foreground/15 px-3 py-2.5 text-sm text-foreground placeholder:text-fg-3/60 focus:border-jade focus:outline-none transition-colors";
  const labelClass =
    "text-[0.62rem] uppercase text-fg-3 mb-1.5 block";
  const errorClass = "text-[0.7rem] text-red-400 mt-1";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="relative bg-bg-2/45 border border-foreground/10 p-8 reveal"
    >
      <span className="text-[0.62rem] uppercase text-jade" style={{ letterSpacing: "0.25em" }}>
        {t("qf_eyebrow")}
      </span>
      <h3 className="font-serif text-xl font-light mt-2 mb-6">
        {t("qf_title")}
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="qf-name" className={labelClass} style={{ letterSpacing: "0.2em" }}>{t("qf_name")} *</label>
          <input id="qf-name" name="name" autoComplete="name" className={inputClass} value={form.name} onChange={(e) => update("name", e.target.value)} maxLength={100} />
          {errors.name && <p className={errorClass}>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="qf-email" className={labelClass} style={{ letterSpacing: "0.2em" }}>{t("qf_email")} *</label>
          <input id="qf-email" name="email" type="email" autoComplete="email" className={inputClass} value={form.email} onChange={(e) => update("email", e.target.value)} maxLength={255} />
          {errors.email && <p className={errorClass}>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="qf-phone" className={labelClass} style={{ letterSpacing: "0.2em" }}>{t("qf_phone")} *</label>
          <input id="qf-phone" name="phone" type="tel" autoComplete="tel" className={inputClass} value={form.phone} onChange={(e) => update("phone", e.target.value)} maxLength={30} />
          {errors.phone && <p className={errorClass}>{errors.phone}</p>}
        </div>


        <div>
          <label htmlFor="qf-from" className={labelClass} style={{ letterSpacing: "0.2em" }}>{t("qf_from")} *</label>
          <input id="qf-from" name="fromCity" className={inputClass} value={form.fromCity} onChange={(e) => update("fromCity", e.target.value)} placeholder="Toluca (MMTO)" maxLength={100} />
          {errors.fromCity && <p className={errorClass}>{errors.fromCity}</p>}
        </div>
        <div>
          <label htmlFor="qf-to" className={labelClass} style={{ letterSpacing: "0.2em" }}>{t("qf_to")} *</label>
          <input id="qf-to" name="toCity" className={inputClass} value={form.toCity} onChange={(e) => update("toCity", e.target.value)} placeholder="Los Cabos (MMSD)" maxLength={100} />
          {errors.toCity && <p className={errorClass}>{errors.toCity}</p>}
        </div>

        <div>
          <label htmlFor="qf-trip" className={labelClass} style={{ letterSpacing: "0.2em" }}>{t("qf_trip")}</label>
          <select id="qf-trip" name="tripType" aria-label={t("qf_trip")} className={inputClass} value={form.tripType} onChange={(e) => update("tripType", e.target.value as "one_way" | "round_trip")}>
            <option value="one_way">{t("qf_one_way")}</option>
            <option value="round_trip">{t("qf_round")}</option>
          </select>
        </div>
        <div>
          <label htmlFor="qf-pax" className={labelClass} style={{ letterSpacing: "0.2em" }}>{t("qf_pax")} *</label>
          <input id="qf-pax" name="passengers" type="number" min={1} max={50} className={inputClass} value={form.passengers} onChange={(e) => update("passengers", Number(e.target.value) as any)} />
          {errors.passengers && <p className={errorClass}>{errors.passengers}</p>}
        </div>

        <div>
          <label htmlFor="qf-departure" className={labelClass} style={{ letterSpacing: "0.2em" }}>{t("qf_departure")} *</label>
          <input id="qf-departure" name="departureDate" type="date" className={inputClass} value={form.departureDate} onChange={(e) => update("departureDate", e.target.value)} />
          {errors.departureDate && <p className={errorClass}>{errors.departureDate}</p>}
        </div>
        <div>
          <label htmlFor="qf-return" className={labelClass} style={{ letterSpacing: "0.2em" }}>{t("qf_return")}</label>
          <input
            id="qf-return"
            name="returnDate"
            type="date"
            className={inputClass}
            value={form.returnDate}
            onChange={(e) => update("returnDate", e.target.value)}
            disabled={form.tripType !== "round_trip"}
          />
        </div>



        <div className="sm:col-span-2">
          <label htmlFor="qf-message" className={labelClass} style={{ letterSpacing: "0.2em" }}>{t("qf_message")}</label>
          <textarea
            id="qf-message"
            name="message"
            className={inputClass}
            rows={3}
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            maxLength={1000}
            placeholder={t("qf_message_ph")}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="btn-primary mt-6 inline-flex disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitting ? t("qf_submitting") : t("qf_submit")}
      </button>
      <p className="text-[0.7rem] text-fg-3 mt-4">
        {t("qf_disclaimer")}
      </p>
    </form>
  );
};
