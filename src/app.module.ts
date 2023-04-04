import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './res/user/user.module';
@Module({
  imports: [UserModule], //AppModule에 UserModule을 등록 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
