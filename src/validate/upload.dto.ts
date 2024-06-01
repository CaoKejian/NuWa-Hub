import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUploadDto {
  @ApiProperty({
    name: 'component',
    type: String,
    description: '组件名称',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  component: string;

  @ApiProperty({
    name: 'uploadTime',
    type: String,
    description: '上传时间',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  uploadTime: string;

  @ApiProperty({
    name: 'uploader',
    type: String,
    description: '上传者',
  })
  @IsNotEmpty()
  @IsString()
  uploader: string;

  @ApiProperty({
    name: 'img',
    type: String,
    required: false,
    description: '图片链接',
  })
  @IsString()
  img: string;

  @ApiProperty({
    name: 'desc',
    type: String,
    required: false,
    description: '描述',
  })
  @IsString()
  desc: string;
}
