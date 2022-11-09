import { z } from "zod";

export const UserSchema = z.object({
  id: z.number(),
  email: z.string().email({ message: "Informe um email valido." }),
  passwd: z
    .string()
    .min(5, { message: "A senha deve ter pelo menos 5 caracteres." }),
});
export type User = z.infer<typeof UserSchema>;
