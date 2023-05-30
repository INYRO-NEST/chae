import {CreateDateColumn, OneToMany,UpdateDateColumn, DeleteDateColumn,Column,Entity,PrimaryGeneratedColumn} from "typeorm";
import { ArticleEntity } from "./article.entity";
import { CommentEntity } from "./comment.entity";
@Entity('User')
export class UserEntity{
    @PrimaryGeneratedColumn({type:'bigint'})
    id:string; //bigint는 범위가 커서 int로 감당 안됨
    
    @Column('varchar',{unique:true, nullable:false})
    email:string;
    
    @Column('varchar',{unique:false, nullable:false})
    password:string;
    
    @CreateDateColumn({type:'timestamp'})
    createdAt:Date;
    
    @UpdateDateColumn({type:'timestamp',nullable:true})
    updatedAt:Date|null;

    @DeleteDateColumn({type:'timestamp',nullable:true})
    deletedAt:Date|null;

    //화살표 함수 : 우선은 넘김 
    //바인딩이 변동 : 함수의 소속이 바뀜 
    @OneToMany(()=>ArticleEntity,(article)=> article.user)
    articles:ArticleEntity[]; //복수였는지 확인하기 위해 s를 써서 변수 지음
    
    //배열형태로 받음  
    @OneToMany(()=>CommentEntity,(comment)=>comment.user)
    comments:CommentEntity[];
}