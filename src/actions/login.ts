"use server";

import { LoginSchema } from "@/schema";
import { z } from "zod";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);
  if (!validatedFields) {
    return { error: "Invalid Fields" };
  }
  console.log(values);
  return { success: "Email Sent!" };
};
