import { auth } from '@/auth';

export async function requireSession() {
  const session = await auth();
  if (!session) {
    // This is how redirects are handled in Next.js App Router
    throw new Error('Unauthorized'); // temporary; will handle this properly in a moment
  }
  return session;
}
