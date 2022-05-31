import { Injectable, HttpStatus, BadRequestException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../../users/service/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string) {
    // find if user exist with this email
    const user = await this.userService.findOneByName(username);
    if (!user) {
      return null;
    }

    // find if user password match
    const match = await this.comparePassword(pass, user.password);
    if (!match) {
      return null;
    }

    // tslint:disable-next-line: no-string-literal
    const { password, ...result } = user['dataValues'];
    return result;
  }

  public async login(user) {
    const token = await this.generateToken(user);
    return { token };
  }

  public async create(user, res, i18n) {
    // hash the password
    const pass = await this.hashPassword(user.password);
    // create the user
    try {
      await this.userService.create({ ...user, password: pass });
      const msg = await i18n.t('test.REGISTER_SUCCESS');
      return res.status(HttpStatus.CREATED).send({
        status: HttpStatus.CREATED,
        message: msg,
      });
    } catch (err) {
      const msg = await i18n.t('test.REGISTER_FAIL');
      throw new BadRequestException(msg);
    }
  }
  private async generateToken(user) {
    const token = await this.jwtService.signAsync(user);
    return token;
  }

  private async hashPassword(password) {
    const hash = await bcrypt.hash(password, 10);
    return hash;
  }

  private async comparePassword(enteredPassword, dbPassword) {
    const match = await bcrypt.compare(enteredPassword, dbPassword);
    return match;
  }
}
