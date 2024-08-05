import { Module } from "@nestjs/common";
import ProducstsRepositoryPrisma from "./repositories/products.repository-prisma";
import PrismaService from "@/shared/services/prisma.service";
import { PRODUCTS_REPOSITORY } from "./repositories/products.repository";
import ProductsService from "./services/products.service";
import ProductsController from "./controllers/products.controller";

@Module({
  controllers: [
    ProductsController,
  ],
  providers: [
    PrismaService,
    {
      provide: PRODUCTS_REPOSITORY,
      useClass: ProducstsRepositoryPrisma,
    },
    ProductsService,
  ]
})
export default class ProductsModule {}