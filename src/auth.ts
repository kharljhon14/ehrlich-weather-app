import NextAuth from 'next-auth/next';
import Github from 'next-auth/providers/github';

const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } = process.env;

if (!GITHUB_CLIENT_ID || !GITHUB_CLIENT_SECRET)
  throw new Error('Missing github oauth credentials!');

export const {
  handler: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    Github({
      clientId: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
    }),
  ],
});
