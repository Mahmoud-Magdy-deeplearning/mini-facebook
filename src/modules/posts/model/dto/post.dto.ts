import { IsNotEmpty, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PostDto {
  @ApiProperty({
    type: String,
    description: 'text',
    default: 'hello world',
  })
  @IsNotEmpty()
  @MinLength(4)
  readonly text: string;

  @ApiProperty({
    type: String,
    description: 'Image name',
  })
  imageName: string;

  @ApiProperty({
    type: String,
    description: 'Image URL',
  })
  imageURL: string;
}
