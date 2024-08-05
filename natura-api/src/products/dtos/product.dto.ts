import { ApiProperty } from "@nestjs/swagger";

export default class ReadProductDTO {

  @ApiProperty()
    id: string;

  @ApiProperty()
    name: string;

  @ApiProperty()
    price: number;

  @ApiProperty()
    slug: string;

  @ApiProperty()
    image: string;

  @ApiProperty()
    createdAt: Date;

  @ApiProperty()
    updatedAt: Date;

  @ApiProperty()
    rating: number;

  @ApiProperty()
    discountPercentege?: number;

}