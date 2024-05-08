import { Injectable } from '@nestjs/common'
import type { UserInterface } from './user.interface';

@Injectable()
export class LoginService {
  constructor() {}
  async login({ username, password }: UserInterface) {
    console.log('username', username, password)
  }
}