import { Injectable, BadRequestException } from '@nestjs/common'
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
    const findUser = await this.userRepository.findOneBy({ username });
    if (findUser) {
      throw new BadRequestException(`username ${username} is exist`);
    }
    await this.userRepository.save({
      username,
      password,
    });
  }
}