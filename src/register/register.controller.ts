import { Controller, Post, Body } from '@nestjs/common'
import { RegisterService } from './register.service'
import { UserRegisterDto } from './register-dto'
// import { ValidationPipe } from '../pipe/validation-pipe'

@Controller('register')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}
  @Post('')
  register(@Body() createUserDto: UserRegisterDto) {
    return this.registerService.createUser(createUserDto);
  }
}