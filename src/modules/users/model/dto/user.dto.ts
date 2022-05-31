import { IsNotEmpty, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({
    type: String,
    description: 'User name',
    default: 'mohammed',
  })
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({
    type: String,
    description: 'password',
    default: '123456',
  })
  @IsNotEmpty()
  @MinLength(6)
  readonly password: string;

  @ApiProperty({
    type: String,
    description: 'mobile number',
    default: '0123456789',
  })
  @IsNotEmpty()
  readonly mobileNumber: string;
}
