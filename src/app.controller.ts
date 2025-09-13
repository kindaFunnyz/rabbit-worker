import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('message')
  getHello() {
    console.log('Hello World!');
  }
  @EventPattern('*')
  weirdHello() {
    console.log('Weird World!');
  }
  @EventPattern('#')
  weirodHello() {
    console.log('Weirdo World!');
  }
}
