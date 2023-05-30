import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './res/user/user.module';
import { ConfigService } from '@nestjs/config';
import { ConfigModule } from '@nestjs/config/dist';
import { UserEntity } from './entities/user.entity';
import { CommentEntity } from './entities/comment.entity';
import { ArticleEntity } from './entities/article.entity';
import { AuthModule } from './strategies/auth.module';
import { ArticleModule } from './domain/aritcle/article.module';

console.log(`.env.${process.env.NODE_ENV}`)

@Module({
  imports: [
  //
    ConfigModule.forRoot({isGlobal:true,
      envFilePath:`.env.${process.env.NODE_ENV}`,}),
  
    TypeOrmModule.forRootAsync({
      inject:[ConfigService],
      useFactory:(configService:ConfigService)=>({
        retryAttempts:10,
        type:'mysql', //어떤 db 사용 
        host:configService.get('DB_HOST'), //본인 컴퓨터 깔린 mysql이므로 
        port : Number(configService.get('DB_PORT')), //mysql 기본 포트 
        database:configService.get('DB_NAME'),
        username:configService.get('DB_USERNAME'), //mysql 설치시 설정한 유저네임 입력 
        password:configService.get('DB_PASSWORD'), //mysql 설치시 비번 
        entities:[ //db table 지칭 -> 어떤 테이블 사용할건지 
            UserEntity, CommentEntity, ArticleEntity
      ],
        synchronize:false, //무조건 
        logging: true,
        timezone:'local',
      }),
    }),  
    UserModule,
    AuthModule,
    ArticleModule,
    
  ], //AppModule에 UserModule을 등록 

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
