import { useState } from "react";
import { supabase } from "./supabase";

export type LeadSource = "contact" | "audit" | "newsletter";

export type LeadPayload = {
  source: LeadSource;
  name?: string;
  email: string;
  company?: string;
  website?: string;
  budget?: string;
  message?: string;
};

export function useLeads() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function submit(payload: LeadPayload) {
    setStatus("submitting");
    setErrorMsg("");
    try {
      const { error } = await supabase.from("leads").insert({
        source: payload.source,
        name: payload.name ?? null,
        email: payload.email,
        company: payload.company ?? null,
        website: payload.website ?? null,
        budget: payload.budget ?? null,
        message: payload.message ?? null,
      });
      if (error) throw error;
      setStatus("success");
      return { ok: true as const };
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setErrorMsg(msg);
      setStatus("error");
      return { ok: false as const, error: msg };
    }
  }

  function reset() {
    setStatus("idle");
    setErrorMsg("");
  }

  return { status, errorMsg, submit, reset };
}
