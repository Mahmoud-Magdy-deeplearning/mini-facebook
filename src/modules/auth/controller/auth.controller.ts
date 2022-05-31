import {
  Controller,
  Body,
  Post,
  UseGuards,
  Request,
  Res,
  Response,
  Query,
} from '@nestjs/common';
import { I18n, I18nContext } from 'nestjs-i18n';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { AuthService } from '../service/auth.service';
import { UserDto } from '../../users/model/dto/user.dto';
import { languageSupport } from 'src/core/utils/language_support.dto';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  @ApiOkResponse({ description: 'Successfully logged in' })
  async login(
    @Body() user: UserDto,
    @Request() req,
    @Query() query: languageSupport,
  ) {
    return await this.authService.login(req.user);
  }

  @Post('signup')
  @ApiCreatedResponse({ description: 'Successfully Registered' })
  async signUp(
    @Body() user: UserDto,
    @Res({ passthrough: true }) res: Response,
    @I18n() i18n: I18nContext,
    @Query() query: languageSupport,
  ) {
    return await this.authService.create(user, res, i18n);
  }
}
