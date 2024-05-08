import { Controller, Post, Body } from '@nestjs/common'
import { LoginService } from './login.service'
import { UserLoginDto } from './login-dto'
@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}
  @Post('')
  login(@Body() userLoginDto: UserLoginDto) {
    return this.loginService.login(userLoginDto);
  }
}