import {Controller,Get} from '@nestjs/common'
import { UserService } from './user.service'
@Controller('/user')
//controller의 기본 경로를 /user로 설정

export class UserController{
    constructor(private readonly userService : UserService){}
    //constructor -> UserController에서 userService를 받아 UserService에서 사용 
    //UserController에서 사용자에게 UserService에 있는 서비스 전달할 수 있게 UserService 불러옴

    @Get('/main')
    async getMainPage(){
        return this.userService.getMainPage();
    }
    @Get('/user-info')
    async getUserInfo(){
        return this.userService.getUserInfo();
    }
    
}

//user에게 원하는 서비스 제공
//http 메소드에 따라 다른 서비스 제공
//사용자 입장에서는 user main page라는 문장을 받아오는 함수
//get 요청이 들어오면 실행이 되게끔 코드 작성

