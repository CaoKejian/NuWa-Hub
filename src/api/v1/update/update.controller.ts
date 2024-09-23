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
import { UploadService } from './update.service';
import { CpType } from 'src/interface/update.interface';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUpdateDto } from 'src/validate/update.dto';

@ApiTags('更新组件')
@Controller('update')
export class UpdateController {
  constructor(private readonly service: UploadService) {}

  @Get('')
  @HttpCode(200)
  @Header('Cache-Control', 'none')
  @ApiResponse({ status: 200, description: '查看组件简约信息' })
  async addComponent(): Promise<CpType[]> {
    return this.service.findAll();
  }

  @Post('/')
  @HttpCode(200)
  @UsePipes(new ValidationPipe())
  @ApiBody({ type: [CreateUpdateDto] })
  @ApiResponse({ status: 200, description: '更新组件' })
  async create(@Body() createUpdateDto: CreateUpdateDto) {
    return await this.service.create(createUpdateDto.cpList);
  }
}
