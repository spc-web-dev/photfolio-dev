import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

export const FormUserShema = z.object({
    profile: z.string(),
    username: z.string(),
    email: z.string(),
    role: z.enum(["admin", "student", "moderator"]),
    status: z.enum(["active", "inactive"]),
    amount: z.number(),
  });

export type UseForm = {
    form: UseFormReturn<z.infer<typeof FormUserShema>>;
}