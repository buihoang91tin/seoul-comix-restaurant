import { initTRPC } from '@trpc/server';
import { Context } from './context';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const prisma = new PrismaClient();
const t = initTRPC.context<Context>().create();

export const appRouter = t.router({
  hello: t.procedure.query(() => 'Hello 2, tRPC!'),
  getRestaurants: t.procedure.query(async () => {
    return await prisma.restaurant.findMany({
      include: {
        featured: true, // Include the featured details
      },
    });
  }),
  toggleFavoriteRestaurant: t.procedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input }) => {
      const restaurant = await prisma.restaurant.findUnique({
        where: { id: input.id },
      });

      if (!restaurant) {
        throw new Error("Restaurant not found");
      }

      const updatedRestaurant = await prisma.restaurant.update({
        where: { id: input.id },
        data: {
          isFavorite: !restaurant.isFavorite,
        },
      });

      return updatedRestaurant;
    }),
});

export type AppRouter = typeof appRouter;
