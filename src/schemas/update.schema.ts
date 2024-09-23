import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UploadDocument = HydratedDocument<Update>;

@Schema()
export class CpType {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  desc: string;

  @Prop({ required: true })
  img: string;
}

@Schema()
export class Update {
  @Prop({ type: [CpType], required: true })
  cpList: CpType[];

  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  isCurrent: boolean;

  @Prop({ required: true })
  uploader: string;

  @Prop({ required: true })
  uploadTime: string;
}

export type UpdateDocument = Update & Document;
export const UpdateSchema = SchemaFactory.createForClass(Update);
