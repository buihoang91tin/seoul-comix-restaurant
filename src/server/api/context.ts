import { inferAsyncReturnType } from '@trpc/server';

// Define a context function that creates the context for each request
export const createContext = ({}: { req: Request }) => {
  return {}; // Here, you can add any data that needs to be passed to each procedure
};

// Infer the return type of the context for use in the router
export type Context = inferAsyncReturnType<typeof createContext>;