import { ApiProperty } from '@nestjs/swagger';

export class PaginationQuery {
  @ApiProperty({
    minimum: 0,
    maximum: 10000,
    title: 'Page',
    exclusiveMaximum: true,
    exclusiveMinimum: true,
    format: 'int32',
    default: 1,
  })
  page: number;

  @ApiProperty({
    minimum: 0,
    maximum: 10000,
    title: 'Page size',
    format: 'int32',
    default: 3,
  })
  pageSize: number;
}
