import { IsString, Length, MinLength } from 'class-validator'

class UserLoginDto {
  @IsString()
  @Length(6, 20)
  username: string

  @IsString()
  @MinLength(6)
  password: string
}

export { UserLoginDto };