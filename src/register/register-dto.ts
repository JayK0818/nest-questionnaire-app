import {
  IsString, Length, MinLength, ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments,
  Validate
} from 'class-validator'

// 自定义一个验证用户名
const userReg = /^[a-zA-Z0-9_]+$/
@ValidatorConstraint({ name: 'username', async: false })
class CustomUsernameValidator implements ValidatorConstraintInterface {
  validate(text: string, args: ValidationArguments) {
    return userReg.test(text)
  }
}

class UserRegisterDto {
  @Validate(CustomUsernameValidator, {
    message: 'user name is invalid',
  })
  @IsString()
  @Length(6, 20)
  username: string;

  @IsString()
  @MinLength(6)
  password: string;
}

export { UserRegisterDto };