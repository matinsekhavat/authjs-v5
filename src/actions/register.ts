"use server";

import { getUserByEmail } from "@/_data/user";
import { RegisterSchema } from "@/schema";
import db from "@/utils/db";
import { hash } from "bcrypt";
import { z } from "zod";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid Fields" };
  }

  const { email, password, name } = validatedFields.data;
  const hashedPassword = await hash(password, 10);
  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return { error: "this email  is already in use" };
  }
  await db.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
    },
  });
  //TODO: send email verification token

  return { success: "Account created sucessfully" };
};
