import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UploadType } from 'src/interface/upload.interface';
import { UploadModule } from './upload.module';
import { Upload } from 'src/schemas/upload.schema';

@Injectable()
export class UploadService {
  constructor(
    @InjectModel(Upload.name) private UploadModel: Model<UploadModule>,
  ) {}

  create(upload: UploadType) {
    return this.UploadModel.create(upload);
  }

  findAll(): Promise<UploadType[]> {
    return this.UploadModel.find();
  }
}
