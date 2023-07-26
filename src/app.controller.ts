import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { WebsocketServerGateway } from './websocket-server/websocket-server.gateway';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private websocketsServer: WebsocketServerGateway,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/clients')
  async getClients(): Promise<string[]> {
    return this.websocketsServer.getClients();
  }
}
