// pages/api/auth/[...nextauth].ts
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials!;

        // 🔐 Replace this with your real DB lookup
        if (email === 'admin@example.com' && password === 'admin123') {
          return { id: '1', name: 'Admin', email: 'admin@example.com' };
        }

        return null;
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET || 'your-super-secret-key',
  pages: {
    signIn: '/', // route to your custom login page
  },
});
