import {Module} from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
    imports:[],
    //모듈안에 UserController, UserService 등록 - 다른 모듈과 소통할 수 있도록 
    controllers:[UserController],
    providers : [UserService],
})
export class UserModule{}

