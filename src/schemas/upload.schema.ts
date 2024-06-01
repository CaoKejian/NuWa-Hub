import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UploadDocument = HydratedDocument<Upload>;

@Schema()
export class Upload {
  @Prop({ required: true })
  component: string;

  @Prop()
  img: string;

  @Prop()
  desc: string;

  @Prop({ required: true })
  uploadTime: string;

  @Prop({ required: true })
  uploader: string;
}

export const UploadSchema = SchemaFactory.createForClass(Upload);
