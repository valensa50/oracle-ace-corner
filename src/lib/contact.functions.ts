import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Please add your name").max(120),
  email: z.string().trim().email("Please add a valid email address").max(200),
  company: z.string().trim().max(160).optional().default(""),
  message: z.string().trim().min(10, "Please describe what you need help with").max(5000),
});

export const submitContactMessage = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { error } = await supabaseAdmin.from("contact_messages").insert({
      name: data.name,
      email: data.email,
      company: data.company || null,
      message: data.message,
    });

    if (error) {
      console.error("[contact] failed to store message:", error.message);
      throw new Error("We couldn't save your message. Please try again.");
    }

    return { ok: true as const };
  });
