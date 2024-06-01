import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UploadDocument = HydratedDocument<Upload>;
// schema 为数据库上传校验器
@Schema()
export class Upload {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;
}

export const UploadSchema = SchemaFactory.createForClass(Upload);
