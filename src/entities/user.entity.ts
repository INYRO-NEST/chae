import {CreateDateColumn, UpdateDateColumn, DeleteDateColumn,Column,Entity,PrimaryGeneratedColumn} from "typeorm";

@Entity('User')
export class UserEntity{
    @PrimaryGeneratedColumn({type:'bigint'})

    id:string; //bigint는 범위가 커서 int로 감당 안됨
    
    @Column('varchar',{unique:true, nullable:false})
    email:string;
    
    @Column('varchar',{unique:false, nullable:false})

    password:string;
    
    @CreateDateColumn({type:'timestamp'})
    created_at:Date;
    
    @UpdateDateColumn({type:'timestamp',nullable:true})
    updated_at:Date|null;

    @DeleteDateColumn({type:'timestamp',nullable:true})
    deleted_at:Date|null;
    


}