import {Module} from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { UserEntity } from 'src/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt/dist';
@Module({
    imports:[
        TypeOrmModule.forFeature([UserEntity]),
        JwtModule.registerAsync({
            imports:[ConfigModule],
            inject:[ConfigService],
            useFactory:(configService:ConfigService)=>{
                return{
                    secret:configService.get('JWT_SECRET'),
                  
                }
            }
        })
     ],
    //모듈안에 UserController, UserService 등록 - 다른 모듈과 소통할 수 있도록 
    controllers:[AuthController],
    providers : [AuthService, LocalStrategy, JwtStrategy],

})
export class AuthModule{}