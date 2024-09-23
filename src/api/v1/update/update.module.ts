import { Module } from '@nestjs/common';
import { UploadService } from './update.service';
import { UpdateController } from './update.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Update, UpdateSchema } from 'src/schemas/Update.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Update.name, schema: UpdateSchema }]),
  ],
  providers: [UploadService],
  controllers: [UpdateController],
})
export class UpdateModule {}
