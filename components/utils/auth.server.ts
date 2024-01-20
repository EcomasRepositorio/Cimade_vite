/* // pages/api/login.ts
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { serialize, parse } from 'cookie';

type Role = 'ADMIN' | 'USER';

type User = {
  id: number;
  email: string;
  password: string;
  role: Role;
  token: string;
};

type Auth = {
  email: string;
  password: string;
};

export const secret = 'SECRET';
  if (!secret) throw new Error("SESSION_SECRET is not set");

const createCookie = (name: string, value: string, options: Record<string, any> = {}) => {
  const serializedCookie = serialize(name, value, options);
  return serializedCookie;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body as Auth;

    try {
      const user: User = await axios.post('https://localhost/api/v1/auth/login', {
        email,
        password,
      });

      if (user) {
        const newUser = JSON.stringify(user);
        const cookieOptions = {
          httpOnly: true,
          path: '/',
          sameSite: 'lax',
          maxAge: 60 * 60 * 24 * 30,
          secure: process.env.NODE_ENV === 'production',
        };

        res.setHeader('Set-Cookie', createCookie('cimade-session', newUser, cookieOptions));
        res.redirect('/certificate');
        return;
      }
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        res.status(400).json({ error: 'Ingreso Incorrecto' });
      }
      return;
    }
  }

  const cookies = parse(req.headers.cookie || '');
  const userToken = cookies['cimade-session'];

  if (userToken) {
    const user: User = JSON.parse(userToken);
    return res.json({ token: user.token });
  }

  res.status(401).json({ error: 'Usuario no autenticado' });
}

function getUserSession(request: Request) {
  const cookie = request.headers.get("Cookie");
  return storage.getSession(cookie);
}

async function getUserToken(request: Request) {
  const session = await getUserSession(request);
  const userId = session.get("userId");
  if (!userId) return null;
  const newUser: {
    id: number;
    token: string;
    role: Role;
    corporationId: string;
  } = JSON.parse(userId);
  return newUser;
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
} */