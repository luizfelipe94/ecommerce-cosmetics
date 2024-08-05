import { PrismaClient } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";

const prisma = new PrismaClient();

async function main() {
  await prisma.coupon.createMany({
    data: [
      {
        code: "NATURA20",
        expireAt: new Date("2026-08-05"),
        percentage: 20,
      },
      {
        code: "NATURA15",
        expireAt: new Date("2026-08-05"),
        percentage: 15,
      }
    ],
    skipDuplicates: true,
  });
  await prisma.product.createMany({
    data: [
      {
        name: "Natura Luna Perfume",
        image: "natura-luna.jpg",
        slug: "natura-luna-perfume",
        rating: 4.2,
        price: new Decimal(91.37),
      },
      {
        name: "Kaiak Masculino Natura 100 Ml",
        image: "kaiak-masculino.jpg",
        slug: "kaiak-masculino-natura-100ml",
        rating: 4.9,
        price: new Decimal(119.90),
      },
      {
        name: "Essencial Ato Deo Parfum Feminino - 100 Ml",
        image: "essencial-ato-deo.jpg",
        slug: "essencial-ato-deo",
        rating: 4.8,
        price: new Decimal(259.90),
      },
      {
        name: "Natura Una Deo Parfum Feminino - 75 ml",
        image: "natura-una-deo-parfum-feminino.jpeg",
        slug: "natura-una-deo-parfum-feminino",
        rating: 3.5,
        price: new Decimal(400.90),
        discountPercentege: 30,
      },
      {
        name: "Essencial Exclusivo Feminino 100 Ml",
        image: "essencial-exclusivo-feminino.jpg",
        slug: "essencial-exclusivo-feminino",
        rating: 4.9,
        price: new Decimal(154.90),
      },
      {
        name: "Ilía Deo Parfum 50 Ml",
        image: "ilia-deo-parfum.jpg",
        slug: "ilia-deo-parfum",
        rating: 4.9,
        price: new Decimal(173.90),
      },
      {
        name: "Desodorante Perfume Natura Homem Essence 100 ml",
        image: "desodorante-perfume-natura.jpg",
        slug: "desodorante-perfume-natura",
        rating: 5,
        price: new Decimal(204.90),
        discountPercentege: 15,
      },
      {
        name: "Homem Tato Deo Parfum 100 Ml",
        image: "homem-tato-deo-parfum.jpg",
        slug: "homem-tato-deo-parfum",
        rating: 4.9,
        price: new Decimal(204.90),
      },
      {
        name: "Una Senses Deo Parfum Feminino Natura - 75 Ml",
        image: "una-senses-deo-parfum.jpg",
        slug: "una-senses-deo-parfum",
        rating: 5,
        price: new Decimal(360.90),
        discountPercentege: 7,
      },
      {
        name: "Luna Colônia 75ml",
        image: "luna-colonia.jpg",
        slug: "luna-colonia",
        rating: 4.9,
        price: new Decimal(169.90),
      },
    ]
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });