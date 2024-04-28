import { IsString, Length } from 'class-validator'

class UserRegisterDto {
  @IsString()
  @Length(6, 20)
  username: string;

  @IsString()
  password: string;
}

export { UserRegisterDto };