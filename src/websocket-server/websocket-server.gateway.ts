import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: true,
})
export class WebsocketServerGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    console.log(payload);
    client.emit('message', 'Hello from websocket server');
    return 'Hello world!';
  }

  async getClients(){
    const sockets = await this.server.fetchSockets();
    return sockets.map((socket) => socket.id);
  }
}
