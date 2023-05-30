import {Column,JoinColumn,ManyToOne,CreateDateColumn,UpdateDateColumn,DeleteDateColumn,Entity,PrimaryGeneratedColumn} from 'typeorm';
import { ArticleEntity } from "./article.entity";
import { UserEntity } from "./user.entity";
@Entity('Comment')
export class CommentEntity{
    @PrimaryGeneratedColumn({type:'bigint'})
    id:string;

    @Column('text',{unique:false,nullable:false})
    content:string
    
    @Column('bigint',{unique:false,nullable:true}) //첫 댓글은 부모가 없음 
    parentId:string;

    @CreateDateColumn({type:'timestamp'})
    createdAt:Date;

    @UpdateDateColumn({type:'timestamp'})
    updateAt:Date|null;

    @DeleteDateColumn({type:'timestamp'})
    deletedAt:Date|null;

    @Column('bigint',{unique:false,nullable:false})
    userId:string;

    @Column('bigint',{unique:false,nullable:false})
    articleId:string;

    @ManyToOne(()=>UserEntity,(user)=>user.comments)
    @JoinColumn({name:'userId',referencedColumnName:'id'})
    user:UserEntity;
    
    @ManyToOne(()=>ArticleEntity,(article)=>article.comments)
    @JoinColumn({name:'articleId',referencedColumnName:'id'})
    article:ArticleEntity; 

}
