import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { ValidateMethod } from '../validation/validate.decorator';
import * as Joi from 'joi';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  private async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersRepository.findOne({
      select: ['id', 'username', 'password'],
      where: { username },
    });
    if (!user) {
      throw new UnauthorizedException();
    }
    const isValidPass = await bcrypt.compare(pass, user.password);
    if (!isValidPass) {
      throw new UnauthorizedException();
    }
    const { password, ...result } = user;
    password;
    return result;
  }

  @ValidateMethod(
    Joi.object({
      id: Joi.number().required(),
    }),
  )
  async userEnriched({ id }) {
    const user = await this.usersRepository.findOne(id);
    const { password, ...result } = user;
    password;
    return result;
  }

  @ValidateMethod(
    Joi.object({
      username: Joi.string().min(3).required(),
      password: Joi.string().min(6).required(),
    }),
  )
  async login({ username, password }) {
    const validUser = await this.validateUser(username, password);
    const payload = { username: validUser.username, sub: validUser.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
