import { PrismaClient } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";

const prisma = new PrismaClient();

async function main() {
  await prisma.coupon.createMany({
    data: [
      {
        id: "f581491c-5af8-4f86-b22f-c82141d092e1",
        code: "NATURA20",
        expireAt: new Date("2026-08-05"),
        percentage: 20,
      },
      {
        id: "854aa39f-1060-4c93-831e-4f4297ddb1d9",
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
        id: "897e0e11-bff5-45d5-89ed-2f9df3a023fb",
        name: "Natura Luna Perfume",
        image: "natura-luna.jpg",
        slug: "natura-luna-perfume",
        rating: 4.2,
        price: new Decimal(91.37),
      },
      {
        id: "f3a7fd16-a79c-4c5a-9b12-579032568ef6",
        name: "Kaiak Masculino Natura 100 Ml",
        image: "kaiak-masculino.jpg",
        slug: "kaiak-masculino-natura-100ml",
        rating: 4.9,
        price: new Decimal(119.90),
      },
      {
        id: "2dd674de-3ea1-4bbc-a0f7-d0886d16bb3c",
        name: "Essencial Ato Deo Parfum Feminino - 100 Ml",
        image: "essencial-ato-deo.jpg",
        slug: "essencial-ato-deo",
        rating: 4.8,
        price: new Decimal(259.90),
      },
      {
        id: "debf949c-4482-4b17-8972-11ca81efbef0",
        name: "Natura Una Deo Parfum Feminino - 75 ml",
        image: "natura-una-deo-parfum-feminino.jpeg",
        slug: "natura-una-deo-parfum-feminino",
        rating: 3.5,
        price: new Decimal(400.90),
        discountPercentege: 30,
      },
      {
        id: "add9962d-d084-48fe-a115-c5cd2961485c",
        name: "Essencial Exclusivo Feminino 100 Ml",
        image: "essencial-exclusivo-feminino.jpg",
        slug: "essencial-exclusivo-feminino",
        rating: 4.9,
        price: new Decimal(154.90),
      },
      {
        id: "04cdb98e-48d7-4f82-b21c-07c871a96ac1",
        name: "Ilía Deo Parfum 50 Ml",
        image: "ilia-deo-parfum.jpg",
        slug: "ilia-deo-parfum",
        rating: 4.9,
        price: new Decimal(173.90),
      },
      {
        id: "b70c439f-0d8b-4b54-ac41-c117407a98bf",
        name: "Desodorante Perfume Natura Homem Essence 100 ml",
        image: "desodorante-perfume-natura.jpg",
        slug: "desodorante-perfume-natura",
        rating: 5,
        price: new Decimal(204.90),
        discountPercentege: 15,
      },
      {
        id: "1b736ab3-3a09-42c9-ab58-2e1cdf52f9b1",
        name: "Homem Tato Deo Parfum 100 Ml",
        image: "homem-tato-deo-parfum.jpg",
        slug: "homem-tato-deo-parfum",
        rating: 4.9,
        price: new Decimal(204.90),
      },
      {
        id: "92d4f2c3-208e-4a66-9805-3ac864c77f29",
        name: "Una Senses Deo Parfum Feminino Natura - 75 Ml",
        image: "una-senses-deo-parfum.jpg",
        slug: "una-senses-deo-parfum",
        rating: 5,
        price: new Decimal(360.90),
        discountPercentege: 7,
      },
      {
        id: "5c214d72-0781-4cb7-883c-a7d0533b519a",
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