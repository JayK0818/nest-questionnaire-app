import { Injectable } from '@nestjs/common'
import type { UserRegisterDto } from './register-dto'

@Injectable()
export class RegisterService {
  constructor() {}
  createUser(user: UserRegisterDto) {
    console.log(user)
    return '创建成功'
  }
}