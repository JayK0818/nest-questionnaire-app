import { Injectable } from '@nestjs/common'
import { User } from '../entities/user.entity'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import type { UserInterface } from './user.interface'

@Injectable()
export class RegisterService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  async createUser({ username, password }: UserInterface) {
    try {
      const res = await this.userRepository.save({
        username,
        password
      })
      console.log('res', res)
      return 'success';
    } catch (err: any) {
      console.log('err', err);
    }
  }
}