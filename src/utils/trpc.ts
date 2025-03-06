// utils/trpc.ts
import { createTRPCReact } from '@trpc/react-query';
import { AppRouter } from '@/server/api/trpc' // Make sure this is pointing to your actual AppRouter type

export const trpc = createTRPCReact<AppRouter>();
