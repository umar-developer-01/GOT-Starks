// actions/user.ts
"use server"; // This directive marks the file as containing Server Actions
import z from "zod";
import { revalidatePath } from "next/cache";
import client from "@/db";

const signUpSchema = z.object({
  username: z.string().min(5, "Username should be atleast 5 characters"),
  password: z.string().min(5, "Pasword should be atleast 5 characters long"),
});


interface ReturnMessage {
  code:number;
  message:string;
}

export async function signUp(
  prevState: any,
  formData: FormData
): Promise<ReturnMessage> {
  try {
    // Extract values and ensure they're of type string
    const username = formData.get("username") as string | null;
    const password = formData.get("password") as string | null;

    // Handle potential null values
    if (!username || !password) {
      throw new Error("Username and password are required");
    }

    const data = signUpSchema.parse({
      username,
      password,
    });

    // check if the user already exists with this username with this password
    const isUserExists = await client.user.findUnique({
      where: { username: data.username },
    });
    console.log("Is user exists", isUserExists);
    if (isUserExists) {
      throw new Error("Username already taken");
    }
    const user = await client.user.create({
      data: {
        username,
        password,
      },
    });

    revalidatePath("/");
    return { code:200 , message: "Signed up!" };
  } catch (error) {
    console.error("Signup error:", error);
    // Return error message for user feedback
    if (error instanceof z.ZodError) {
      return {code:400,message:error.errors.map((e) => e.message).join(", ")};
    }
    if (error?.message === "Username already taken") {
      return {code:400,message:error?.message};
    }

    return {code:400,message:"Signup failed. Please try again."};
  }
}
