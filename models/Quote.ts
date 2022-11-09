import { z } from "zod";

type inferSafeParseErrors<T extends z.ZodType<any, any, any>, U = string> = {
  formErrors: U[];
  fieldErrors: {
    [P in keyof z.infer<T>]?: U[];
  };
};

export const QuoteSchema = z.object({
  id: z.string().optional(),
  quote: z
    .string()
    .min(10, { message: "A citação precisa ter mais que 10 caracteres." }),
  author: z
    .string()
    .min(5, { message: "O autor precisa ter mais que 5 caracteres." }),
});
export type Quote = z.infer<typeof QuoteSchema>;
export type QuoteErrors = inferSafeParseErrors<typeof QuoteSchema>;
