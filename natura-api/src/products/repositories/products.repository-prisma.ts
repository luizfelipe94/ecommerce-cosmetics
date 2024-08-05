import { Injectable } from "@nestjs/common";
import { ProductsRepository } from "./products.repository";
import { Product } from "@prisma/client";
import PrismaService from "@/shared/services/prisma.service";
import PageOptionsDTO from "@/shared/dto/pagination/page-options.dto";

@Injectable()
export default class ProducstsRepositoryPrisma implements ProductsRepository {

  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async findAll(pageOptions: PageOptionsDTO): Promise<Product[]> {
    return await this.prisma.product.findMany({
      where: { deletedAt: null },
      orderBy: { name: pageOptions.order },
      take: pageOptions.take,
      skip: pageOptions.skip,
    });
  }

  async count() {
    return await this.prisma.product.count({
      where: { deletedAt: null },
    });
  }

}