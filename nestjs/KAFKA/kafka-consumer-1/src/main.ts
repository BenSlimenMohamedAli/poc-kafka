import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { resolve } from 'path';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: ['localhost:9092'],
      },
      consumer: {
        groupId: 'my-kafka-consumer-1',
      },
    },
  });

  app.connectMicroservice({
    transport: Transport.GRPC,
    options: {
      url: '127.0.0.1:50001',
      package: 'book',
      protoPath: resolve(__dirname, '../protos/book.proto'),
      loader: {
        includeDirs: [resolve(__dirname, '..', 'protos')],
      },
    },
  });

  await app.listen(3002);
  await app.startAllMicroservicesAsync();
}
bootstrap();
