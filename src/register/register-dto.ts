import {
  IsString, Length, MinLength, ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments,
  Validate
} from 'class-validator'

// 自定义一个验证用户名
@ValidatorConstraint({ name: 'username', async: false })
class CustomUsernameValidator implements ValidatorConstraintInterface {
  validate(text: string, args: ValidationArguments) {
    const userReg = /^[a-zA-Z][a-zA-Z0-9_]*$/;
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