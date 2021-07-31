import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { Public } from './public.decorator';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('login')
  async login(@Body() user) {
    const { username, password } = user;
    return this.authService.login({ username, password });
  }
}
