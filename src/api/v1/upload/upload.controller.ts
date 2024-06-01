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
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUploadDto } from 'src/validate/upload.dto';

@ApiTags('upload')
@Controller('upload')
export class UploadController {
  constructor(private readonly x: UploadService) {}

  @Get('')
  @HttpCode(200)
  @Header('Cache-Control', 'none')
  @ApiResponse({ status: 200, description: '测试上传接口' })
  async addComponent(): Promise<UploadType[]> {
    return this.x.findAll();
  }

  @Post('/')
  @UsePipes(new ValidationPipe())
  async create(@Body() createUploadDto: CreateUploadDto) {
    this.x.create(createUploadDto);
  }
}
