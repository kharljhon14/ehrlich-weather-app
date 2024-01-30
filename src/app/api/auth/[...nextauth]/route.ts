import NextAuth from 'next-auth/next';
import Github from 'next-auth/providers/github';

const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, NEXTAUTH_SECRET } = process.env;

if (!GITHUB_CLIENT_ID || !GITHUB_CLIENT_SECRET || !NEXTAUTH_SECRET)
  throw new Error('Missing oauth credentials!');

const handler = NextAuth({
  providers: [
    Github({
      clientId: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: '/',
  },
});

export { handler as GET, handler as POST };
