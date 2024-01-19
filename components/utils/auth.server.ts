import type { AxiosError } from "axios";
import axios from "axios";
import { redirect, json, createCookieSessionStorage } from '@remix-run/node';
//import { createUserSession } from "./session.server";

export type Role =
  | "ADMIN"
  | "USER"

export type user = {
    id: number;
    email: string;
    password: string;
    role: Role;
    token: string;
  };

type auth = {
    email: string;
    password: string;
  };

  export const secret = "SECRET";
    if (!secret) throw new Error("SESSION_SECRET is not set");

  export const storage = createCookieSessionStorage({
    cookie: {
      name: "tu-doctor-net-session",
      httpOnly: true,
      path: "/",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 30,
      secrets: [secret],
      secure: process.env.NODE_ENV === "production",
    },
  });

 export async function loginUser({ email, password }: auth) {
    const user: user = await axios
      .post("https://localhost/api/v1/auth/login", {
        email,
        password,
      })
      .then((_res) => {
        return _res.data;
      })
      .catch((err: AxiosError) => {
        console.log(err.response);
        return null;
      });
    if (user === null) {
      return json({ error: `Ingreso Incorrecto`, status: 400 });
    }
    const newLogin = JSON.stringify(user);
    switch (user.role) {
      case "ADMIN":
        return createUserSession(newLogin, "/home");
      case "USER":
        return createUserSession(newLogin, "/home");
    }
    // return user;
    // return createUserSession(user.token, "/");
  }

  export async function createUserSession(userId: string, redirectTo: string) {
    const session = await storage.getSession();
    session.set("userId", userId);
    return redirect(redirectTo, {
      headers: {
        "Set-Cookie": await storage.commitSession(session),
      },
    });
  }

  async function getUserToken(request: Request) {
    const session = await getUserSession(request);
    const userId = session.get("userId");
    if (!userId) return null;
    const newUser: {
      id: number;
      token: string;
      role: Role;
    } = JSON.parse(userId);
    return newUser;
  }

  function getUserSession(request: Request) {
    const cookie = request.headers.get("Cookie");
    return storage.getSession(cookie);
  }

  export async function getUser(request: Request) {
    try {
      const user = await getUserToken(request);
      if (!user) return null;
      return user.token;
    } catch {
      throw logout(request);
    }
  }

  export async function logout(request: Request) {
    const session = await getUserSession(request);
    return redirect("/auth/logout", {
      headers: {
        "Set-Cookie": await storage.destroySession(session),
      },
    });
  }
