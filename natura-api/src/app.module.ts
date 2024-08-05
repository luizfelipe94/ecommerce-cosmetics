import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import ProductsModule from "./products/product.module";
import PrismaService from "./shared/services/prisma.service";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
  ],
  exports: [
    PrismaService,
  ]
})
export class AppModule { }
