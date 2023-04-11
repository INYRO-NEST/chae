import {DataSource} from 'typeorm';
import * as path from 'path' ;
//import path from 'path'가 아님 

export const dataSource=new DataSource({

        type:'mysql', //어떤 db 사용 
        host:'localhost', //본인 컴퓨터 깔린 mysql이므로 
        port : 3306, //mysql 기본 포트 
        database:'nest',
        username:'root', //mysql 설치시 설정한 유저네임 입력 
        password:'pk1202pk11', //mysql 설치시 비번 
        entities:[ //db table 지칭 -> 어떤 테이블 사용할건지 
            path.join(__dirname,'src/entities/**/*.entity.ts'),//__dirname : 해당 파일 위치한 경로 
            path.join(__dirname,'dist/entities/**/*.entity.js'),
        ],
        synchronize:false, //무조건 
        logging: true, //typeorm 쿼리 실행시 터미널에 mysql쿼리 어떻게 짜였는지 보여줌
});