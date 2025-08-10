import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminServerModule } from './admin-server/admin-server.module';
import { FlavourWheelModule } from './flavour-wheel/flavour-wheel.module';
import { AdminServer } from './entities/admin-server.entity';
import { FlavourWheel } from './entities/flavour-wheel.entity';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_SERVER'),
        port: 3306,
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        charset: configService.get('DB_CHARSET'),
                         entities: [AdminServer, FlavourWheel],
                 synchronize: true, // Re-enabled to recreate schema
        logging: true,
      }),
      inject: [ConfigService],
    }),
    AdminServerModule,
    FlavourWheelModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
