import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FlavourWheelController } from './flavour-wheel.controller';
import { FlavourWheelService } from './flavour-wheel.service';
import { FlavourWheel } from '../entities/flavour-wheel.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FlavourWheel])],
  controllers: [FlavourWheelController],
  providers: [FlavourWheelService],
  exports: [FlavourWheelService],
})
export class FlavourWheelModule {}
