import {Injectable} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm/dist';
import { UserEntity } from 'src/entities/user.entity';
import { Repository } from 'typeorm/repository/Repository';
import {hash} from 'bcrypt';
@Injectable()

export class UserService{
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository:Repository<UserEntity>,
    ){}
    async getUserPage(){
        return {
            user:{
                age:12,
                name:'hans',
                height:100,
                paper:true,

            },
        };
    }
    async getUserInfo(){
        const users={name:"hansu",age:20} //return this.userService.user;
        return users;
    }

    
    async register(email:string, password : string ){
        const user=await this.userRepository.save({
            email:email,
            password : await hash(password, 10) , 

        });
        return user;
    }
    


}
//Injectable로 provider을 생성자에 주입 
//provider=service 

//User Main Page라는 문장을 사용자에게 제공
//사용자 중심으로 생각
//사용자에게 데이터 제공하는 함수 
//사용자 입장에서는 Get -> 받아오는 함수
//함수명을 지을 때 get~(find)과 같이 지음
//함수명 앞의 async : 비동기적으로 동작하도록 
//웬만해서 모든 함수앞에 

//{"user":{"name":"hansu","age":20}} 가 브라우저에서 출력되도록 하기 