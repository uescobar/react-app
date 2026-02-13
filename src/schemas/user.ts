import { z } from "zod";

export const userSchema = z.object({
  name: z
    .string({ required_error: "El nombre es requerido" })
    .min(1, { message: "El nombre es requerido. " })
    .min(3, { message: "Longitud mínima 3." }),
  lastname: z
    .string({ required_error: "El apellido es requerido" })
    .min(1, { message: "El apellido es requerido. " })
    .min(3, { message: "Longitud mínima 3." }),
  /*amount: z.number({
    coerce: true,
    invalid_type_error: "Número requerido",
  }),*/
});

export type userForm = z.infer<typeof userSchema>;
