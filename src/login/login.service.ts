import { Injectable, BadRequestException } from '@nestjs/common'
import type { UserInterface } from './user.interface';
import { User } from '../entities/user.entity'
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm'
@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(User)
    private userRepostory: Repository<User>
  ) {}
  async findUser({ username, password }: UserInterface) {
    const res = await this.userRepostory.findOneBy({
      username,
      password
    })
    if (res) {
      return 'success'
    }
    throw new BadRequestException('用户名或密码错误')
  }
}