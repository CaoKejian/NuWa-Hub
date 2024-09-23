import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '成功启动 女娲 一站式后台';
  }
}
