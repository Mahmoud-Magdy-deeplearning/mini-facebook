import { IsNotEmpty, MinLength } from 'class-validator';

export class PostDto {
  @IsNotEmpty()
  @MinLength(4)
  readonly text: string;
}
