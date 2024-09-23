import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CpType } from 'src/interface/update.interface';
import { UpdateModule } from './update.module';
import { Update } from 'src/schemas/Update.schema';
import { uuid } from '../../../tools/utils';

@Injectable()
export class UploadService {
  constructor(
    @InjectModel(Update.name) private UpdateModel: Model<UpdateModule>,
  ) {}

  async create(cpList: CpType[]) {
    const uploader = 'Cao Kejian'; // 固定的上传人
    const currentTime = new Date().toISOString();

    const updatedCpList = {
      cpList,
      uploader,
      uploadTime: currentTime,
      id: uuid(6),
      isCurrent: true,
    };

    const data = this.UpdateModel.create(updatedCpList);

    await this.UpdateModel.updateMany(
      { id: { $ne: updatedCpList.id } }, // 排除刚创建的记录
      { $set: { isCurrent: false } },
    );

    return data;
  }

  findAll(): Promise<CpType[]> {
    return this.UpdateModel.find();
  }
}
