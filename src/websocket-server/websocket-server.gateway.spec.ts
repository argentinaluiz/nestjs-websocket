import { Test, TestingModule } from '@nestjs/testing';
import { WebsocketServerGateway } from './websocket-server.gateway';

describe('WebsocketServerGateway', () => {
  let gateway: WebsocketServerGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WebsocketServerGateway],
    }).compile();

    gateway = module.get<WebsocketServerGateway>(WebsocketServerGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
