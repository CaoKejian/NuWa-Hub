import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UploadService } from './upload.service';
import { UploadType } from 'src/interface/upload.interface';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUploadDto } from 'src/validate/upload.dto';

@ApiTags('上传文件')
@Controller('upload')
export class UploadController {
  constructor(private readonly service: UploadService) {}

  @Get('')
  @HttpCode(200)
  @Header('Cache-Control', 'none')
  @ApiResponse({ status: 200, description: '测试上传接口' })
  async addComponent(): Promise<UploadType[]> {
    return this.service.findAll();
  }

  @Post('/')
  @HttpCode(200)
  @UsePipes(new ValidationPipe())
  @ApiBody({ type: [CreateUploadDto] })
  @ApiResponse({ status: 200, description: '更新组件' })
  async create(@Body() createUploadDto: CreateUploadDto) {
    this.service.create(createUploadDto);
  }
}
