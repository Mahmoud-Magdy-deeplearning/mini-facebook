import {
  Controller,
  Body,
  Post,
  UseGuards,
  Request,
  Res,
  Response,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { UserDto } from '../users/dto/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return await this.authService.login(req.user);
  }

  @Post('signup')
  async signUp(
    @Body() user: UserDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return await this.authService.create(user, res);
  }
}
