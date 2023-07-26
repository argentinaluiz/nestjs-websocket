import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebsocketServerGateway } from './websocket-server/websocket-server.gateway';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, WebsocketServerGateway],
})
export class AppModule {}
