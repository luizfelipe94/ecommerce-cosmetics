import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import * as project from "../package.json";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableShutdownHooks();
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.enableCors();
  const configService = app.get(ConfigService);

  const config = new DocumentBuilder()
    .setTitle("NATURA-API")
    .setDescription("NATURA-API")
    .setVersion(project.version)
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("docs", app, document);

  await app.listen(configService.get("API_PORT") || 3000);
}

bootstrap();