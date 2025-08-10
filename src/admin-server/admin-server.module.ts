import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminServerController } from './admin-server.controller';
import { AdminServerService } from './admin-server.service';
import { AdminServer } from '../entities/admin-server.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AdminServer])],
  controllers: [AdminServerController],
  providers: [AdminServerService],
  exports: [AdminServerService],
})
export class AdminServerModule {}
