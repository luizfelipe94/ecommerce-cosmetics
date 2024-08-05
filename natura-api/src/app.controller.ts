import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@Controller()
@ApiTags("app")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/healthcheck")
  @ApiOperation({ summary: "Application healthcheck" })
  @ApiResponse({ status: 200, description: "Returns a ok message" })
  healthcheck(): { message: string } {
    return this.appService.healthcheck();
  }

}
