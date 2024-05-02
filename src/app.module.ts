import { Module } from '@nestjs/common';
import { LoginModule } from './login/login.module'
import { RegisterModule } from './register/register.module'
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from './entities/user.entity';

@Module({
  imports: [
    LoginModule,
    RegisterModule,
    ConfigModule.forRoot(),
    /*     TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          type: 'mysql',
          name: 'nest-questionnaire',
          host: configService.get('DATABASE_HOST'),
          port: +configService.get('DATABASE_PORT'),
          username: configService.get('DATABASE_USERNAME'),
          password: configService.get('DATABASE_PASSWORD'),
          database: 'questionnaire',
          synchronize: false,
          // autoLoadEntities: true
          entities: [User]
        };
      }
    }) */
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: +process.env.DATABASE_PORT,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: 'questionnaire',
      synchronize: false,
      autoLoadEntities: true,
      // entities: [User],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
