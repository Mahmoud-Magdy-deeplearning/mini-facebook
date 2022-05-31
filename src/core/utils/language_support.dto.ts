import { ApiProperty } from '@nestjs/swagger';

export enum Languages {
  ENGLISH = 'en',
  ARABIC = 'ar',
}
export class languageSupport {
  @ApiProperty({
    enum: Languages,
    enumName: 'LanguagesEnum',
    default: Languages.ENGLISH,
  })
  lang: string;
}
