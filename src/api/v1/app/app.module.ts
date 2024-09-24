import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UploadModule } from 'src/api/v1/upload/upload.module';
import { UpdateModule } from 'src/api/v1/update/update.module';
import { MongooseModule } from '@nestjs/mongoose';
import { APP_INTERCEPTOR, RouterModule } from '@nestjs/core';
import { ResponseInterceptor } from '../../../tools/response.interceptor';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/nuwa'),
    RouterModule.register([
      {
        path: 'v1',
        module: UploadModule,
      },
      {
        path: 'v1',
        module: UpdateModule,
      },
    ]),
    UploadModule,
    UpdateModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
  ],
})
export class AppModule {}
