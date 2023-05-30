import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "src/entities/user.entity";
import { Repository } from "typeorm";
import {compare} from 'bcrypt';
import {BadRequestException} from '@nestjs/common';
import { JwtService } from "@nestjs/jwt";
@Injectable()
export class AuthService{
    constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository : Repository <UserEntity>,

    private readonly jwtService: JwtService
    ){}

    async validateUser(email:string, password: string){
        const user= await this.userRepository.findOne({ //user을 찾음 email로 
            where:{email:email },
        
        }); //웬만하면 모든 걸 객체로 
        const hashedPassword=user.password;
        if(!user){ //user이 없다면 
            throw new BadRequestException('이메일이 잘못되었습니다'); 
        }
        const isPasswordMatch=await compare(password, user.password);
        if(!isPasswordMatch){
            throw new BadRequestException('비밀번호가 일치하지 않습니다 '); 

        }
        return {
            id:user.id,
            email:user.email,
            createdAt:user.createdAt,
            updatedAt:user.updatedAt,
        };
    }

    async logIn(user){
        return {
            accessToken:this.jwtService.sign(user),
        };

    }
}