import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { appRouter } from '@/server/api/trpc';
import { createContext } from '@/server/api/context';

// export const runtime = "edge"; // Ensure this runs as an Edge Function
export const maxDuration = 60; // seconds
export const dynamic = 'force-dynamic';

const handler = (req: Request) => {
  return fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext,
  });
};

export { handler as GET, handler as POST }; // Support GET & POST
