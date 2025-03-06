import { appRouter } from './trpc';
import { PrismaClient } from '@prisma/client';

// Mock PrismaClient before any imports, so it's applied to the appRouter
jest.mock('@prisma/client', () => {
  const actualPrismaClient = jest.requireActual('@prisma/client');
  const prisma = new actualPrismaClient.PrismaClient();

  prisma.restaurant.findMany = jest.fn().mockResolvedValue([
    {
      rating: 4.2,
      rating_count: 139,
      category: 'YAKITORI',
      city: 'osaka',
      desc: '최고급 오마카세를 합리적인 가격에 무제한 사케와 함께 즐길 수 있는',
      id: '4dc2e1d1-fe89-4a29-b86a-f8bb0ce1395d',
      images: [
        "https://images.unsplash.com/photo-1593357871477-00fd350cc0f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1593357871477-00fd350cc0f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1593357871477-00fd350cc0f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ],
      name: '카구라자카 이시카와 스시하루 나카노시마 스시야 카구라자카 이시카와 스시하루 나카노시마 스시야',
      price_range: '3~5',
      featured: {
        text: '나카노시마×야키토리 상위 맛집',
        icon: 'stars-02',
      },
      isFavorite: true,
    },
    {
      rating: 4.5,
      rating_count: 200,
      category: 'SUSHI',
      city: 'tokyo',
      desc: '신선한 해산물과 정통 스시를 제공하는',
      id: '6ac3e2d1-ge98-5a29-c86a-g9cc1de2396d',
      images: [
        "https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ],
      name: '스시 긴자 이시카와',
      price_range: '4~6',
      featured: {
        text: '도쿄의 상위 스시 맛집',
        icon: 'stars-02',
      },
      isFavorite: false,
    },
  ]);

  prisma.restaurant.findUnique = jest.fn().mockImplementation(({ where: { id } }) => {
    if (id === '4dc2e1d1-fe89-4a29-b86a-f8bb0ce1395d') {
      return Promise.resolve({
        id: '4dc2e1d1-fe89-4a29-b86a-f8bb0ce1395d',
        name: '카구라자카 이시카와 스시하루 나카노시마 스시야 카구라자카 이시카와 스시하루 나카노시마 스시야',
        isFavorite: true,
      });
    }
    return Promise.resolve(null);
  });

  prisma.restaurant.update = jest.fn().mockImplementation(({ where: { id }, data: { isFavorite } }) => {
    if (id === '4dc2e1d1-fe89-4a29-b86a-f8bb0ce1395d') {
      return Promise.resolve({
        id: '4dc2e1d1-fe89-4a29-b86a-f8bb0ce1395d',
        name: '카구라자카 이시카와 스시하루 나카노시마 스시야 카구라자카 이시카와 스시하루 나카노시마 스시야',
        isFavorite,
      });
    }
    return Promise.resolve(null);
  });

  return {
    PrismaClient: jest.fn(() => prisma),
  };
});

describe('appRouter', () => {
  const caller = appRouter.createCaller({} as any);

  describe('getRestaurants procedure', () => {
    test('returns restaurants', async () => {
      // Ensure the mock is being used
      const result = await caller.getRestaurants();

      expect(result).toEqual([
        {
          rating: 4.2,
          rating_count: 139,
          category: 'YAKITORI',
          city: 'osaka',
          desc: '최고급 오마카세를 합리적인 가격에 무제한 사케와 함께 즐길 수 있는',
          id: '4dc2e1d1-fe89-4a29-b86a-f8bb0ce1395d',
          images: [
            "https://images.unsplash.com/photo-1593357871477-00fd350cc0f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1593357871477-00fd350cc0f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1593357871477-00fd350cc0f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          ],
          name: '카구라자카 이시카와 스시하루 나카노시마 스시야 카구라자카 이시카와 스시하루 나카노시마 스시야',
          price_range: '3~5',
          featured: {
            text: '나카노시마×야키토리 상위 맛집',
            icon: 'stars-02',
          },
          isFavorite: true,
        },
        {
          rating: 4.5,
          rating_count: 200,
          category: 'SUSHI',
          city: 'tokyo',
          desc: '신선한 해산물과 정통 스시를 제공하는',
          id: '6ac3e2d1-ge98-5a29-c86a-g9cc1de2396d',
          images: [
            "https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          ],
          name: '스시 긴자 이시카와',
          price_range: '4~6',
          featured: {
            text: '도쿄의 상위 스시 맛집',
            icon: 'stars-02',
          },
          isFavorite: false,
        },
      ]);
    });
  });

  describe('toggleFavoriteRestaurant procedure', () => {
    test('toggles favorite status', async () => {
      const result = await caller.toggleFavoriteRestaurant({ id: '4dc2e1d1-fe89-4a29-b86a-f8bb0ce1395d' });
      expect(result.isFavorite).toBe(false);
    });

    test('throws error if restaurant not found', async () => {
      await expect(caller.toggleFavoriteRestaurant({ id: 'non-existent-id' })).rejects.toThrow('Restaurant not found');
    });
  });
});