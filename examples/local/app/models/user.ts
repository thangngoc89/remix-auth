import { AuthorizationError } from "remix-auth";

export interface User {
  email: string;
  name: string;
}

export async function login(email: string, password: string): Promise<User> {
  if (password === "abc123") return { email, name: "Nguyễn Văn A" };
  throw new AuthorizationError();
}
