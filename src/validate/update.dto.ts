import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator';

export class UpdateDto {
  @ApiProperty({
    name: 'name',
    type: String,
    description: '组件名称',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    name: 'desc',
    type: String,
    description: '组件描述',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  desc: string;

  @ApiProperty({
    name: 'img',
    type: String,
    description: '组件图片链接',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  img: string;
}

export class CreateUpdateDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UpdateDto)
  cpList: UpdateDto[];
}
