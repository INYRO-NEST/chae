import { EntityClassOrSchema } from "@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type";
import {CreateDateColumn,JoinColumn,ManyToOne,OneToMany, UpdateDateColumn, DeleteDateColumn,Column,Entity,PrimaryGeneratedColumn} from "typeorm";
import { UserEntity } from "./user.entity";
import { CommentEntity } from "./comment.entity";

@Entity('article')
export class ArticleEntity{
    @PrimaryGeneratedColumn({type:'bigint'})
    id:string; //bigint는 범위가 커서 int로 감당 안됨
    
    @Column('varchar',{unique:false, nullable:false}) 
    title:string;
    
    @Column('text',{unique:false,nullable:false}) //내용이 있어야
    content : string; 

    @CreateDateColumn({type:'timestamp'}) //@CreateDateColumn()으로 생략가능 명확성을 위한 
    created_at:Date;
    
    @UpdateDateColumn({type:'timestamp'})
    updated_at:Date|null;

    @DeleteDateColumn({type:'timestamp'})
    deleted_at:Date|null;

   
    @Column('bigint',{unique:false,nullable:false}) 
    //user이 계속 들어가므로 unique가 false임 주의 
    user_id:string;

    @ManyToOne(()=>UserEntity,(user)=>user.articles)
    @JoinColumn({name:'userId',referencedColumnName:'id'})
    user:UserEntity;

    @OneToMany(()=>CommentEntity,(comment)=>comment.article)
    
    comments:CommentEntity[];


}