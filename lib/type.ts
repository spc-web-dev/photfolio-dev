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

export const FormVideoShema = z.object({
  course_id: z.string(),
  url: z.string(),
  title: z.string(),
  description: z.string(),
  thumbnail: z.string(),
  date: z.date(),
});

export type UseForm = {
    form: UseFormReturn<z.infer<typeof FormUserShema>>;
}

export type UseFormVideo = {
  form: UseFormReturn<z.infer<typeof FormVideoShema>>;
}

export type SearchParams = { [key: string]: string | string[] | undefined }