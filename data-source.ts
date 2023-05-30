import * as path from 'path' ;
import {DataSource} from 'typeorm';
//import path from 'path'가 아님 
import * as dotenv from 'dotenv'; 

import { UserEntity } from './src/entities/user.entity';
import { ArticleEntity } from './src/entities/article.entity';
import { CommentEntity } from './src/entities/comment.entity';

dotenv.config();

export const dataSource=new DataSource({

    type:'mysql', //어떤 db 사용 
    host:process.env.DB_HOST, //본인 컴퓨터 깔린 mysql이므로 
    port : Number(process.env.DB_PORT), //mysql 기본 포트 
    database:process.env.DB_NAME,
    username:process.env.DB_USERNAME, //mysql 설치시 설정한 유저네임 입력 
    password:process.env.DB_PASSWORD, //mysql 설치시 비번 
    entities:[ //db table 지칭 -> 어떤 테이블 사용할건지 
        UserEntity, ArticleEntity, CommentEntity,

            //path.join(__dirname,'src/entities/**/*/.entity.ts'),
            //path.join(__dirname,'dist/entities/**/*/.entity.js'),
            //-> window에서 제대로 안되므로 ...Entity의 형식으로 쓸 것         
    ],

    synchronize:false, //무조건 
    logging: true, //typeorm 쿼리 실행시 터미널에 mysql쿼리 어떻게 짜였는지 보여줌
});
