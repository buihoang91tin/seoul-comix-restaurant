import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const restaurants = [
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
          price_range:'3~5',
          featured: {
              text: '나카노시마×야키토리 상위 맛집',
              icon: 'stars-02',
          },
          isFavorite: true
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
          isFavorite: false
      },
      {
          rating: 4.7,
          rating_count: 180,
          category: 'RAMEN',
          desc: '진한 국물과 다양한 토핑을 자랑하는',
          city: 'tokyo',
          id: '7bd4f3e2-hf98-6b39-d87b-h0dd2ee2397e',
          images: [
            "https://plus.unsplash.com/premium_photo-1726873221744-73e3e5e5879b?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://plus.unsplash.com/premium_photo-1726873221744-73e3e5e5879b?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://plus.unsplash.com/premium_photo-1726873221744-73e3e5e5879b?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          ],
          name: '라멘 이치란',
          price_range:'2~4',
          featured: {
              text: '교토의 라멘 명소',
              icon: 'stars-02',
          },
          isFavorite: true
      },
      {
          rating: 4.3,
          rating_count: 220,
          category: 'TEMPURA',
          desc: '바삭한 텐푸라를 맛볼 수 있는',
          city: 'nagoya',
          id: '8ce5g4f3-jg09-7c40-e98c-i1ee3ff3408f',
          images: [
            "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          ],
          name: '텐푸라 마츠야',
          price_range: '3~5',
          featured: {
              text: '나고야 최고의 텐푸라집',
              icon: 'stars-02',
          },
          isFavorite: false
      },
      {
          rating: 4.6,
          rating_count: 190,
          category: 'SOBA',
          city: 'fukuoka',
          desc: '쫄깃한 면발과 진한 육수를 자랑하는',
          id: '9df6h5g4-kh10-8d41-f09d-j2ff4gg4519g',
          images: [
            "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          ],
          name: '우동 타로',
          price_range: '2~4',
          featured: {
              text: '후쿠오카 우동 맛집',
              icon: 'stars-02',
          },
          isFavorite: true
      },
      {
          rating: 4.1,
          rating_count: 160,
          category: 'YAKITORI',
          city: 'osaka',
          desc: '맛있고 저렴한 야키토리 전문점',
          id: '0eg7i6h5-lj21-9e52-g10e-k3gg5hh5620h',
          images: [
            "https://images.unsplash.com/photo-1708597525178-6c302364f37c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1708597525178-6c302364f37c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1708597525178-6c302364f37c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          ],
          name: '야키토리 하치베',
          price_range: '2~4',
          featured: {
              text: '오사카 야키토리 숨은 맛집',
              icon: 'stars-02',
          },
          isFavorite: false
      }
  ];

  for (const restaurant of restaurants) {
      await prisma.restaurant.create({
          data: {
              id: restaurant.id,
              rating: restaurant.rating,
              ratingCount: restaurant.rating_count,
              city: restaurant.city,
              category: restaurant.category,
              desc: restaurant.desc,
              images: restaurant.images,
              name: restaurant.name,
              priceRange: restaurant.price_range,
              featured: {
                create: {
                  text: restaurant.featured.text,
                  icon: restaurant.featured.icon,
                }
              },
              isFavorite: restaurant.isFavorite
          }
      });
  }
  console.log('Seed data inserted successfully!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });