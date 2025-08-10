import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FlavourWheel } from '../entities/flavour-wheel.entity';

@Injectable()
export class FlavourWheelService {
  constructor(
    @InjectRepository(FlavourWheel)
    private flavourWheelRepository: Repository<FlavourWheel>,
  ) {}

  // GET: api/flavourwheel
  async getAll(): Promise<FlavourWheel[]> {
    const results = await this.flavourWheelRepository.find();
    console.log('📊 GET ALL FLAVOUR WHEEL - Found records:', results.length);
    return results;
  }

  // GET: api/flavourwheel/{id}
  async getById(id: number): Promise<FlavourWheel> {
    const flavourWheel = await this.flavourWheelRepository.findOne({ where: { id: id } });
    if (!flavourWheel) {
      throw new NotFoundException(`FlavourWheel with ID ${id} not found`);
    }
    return flavourWheel;
  }

  // POST: api/flavourwheel
  async create(flavourWheel: FlavourWheel): Promise<FlavourWheel> {
    console.log('🎯 Creating flavour wheel data:', flavourWheel);
    
    // Create new record using repository.create() for better entity handling
    const newRecord = this.flavourWheelRepository.create(flavourWheel);
    console.log('🔧 Created entity (before save):', newRecord);
    
    const savedRecord = await this.flavourWheelRepository.save(newRecord);
    console.log('✅ Saved flavour wheel record:', savedRecord);
    
    return savedRecord;
  }

  // PUT: api/flavourwheel/{id}
  async update(id: number, flavourWheel: FlavourWheel): Promise<void> {
    const result = await this.flavourWheelRepository.update(id, flavourWheel);
    if (result.affected === 0) {
      throw new NotFoundException(`FlavourWheel with ID ${id} not found`);
    }
  }

  // DELETE: api/flavourwheel/{id}
  async delete(id: number): Promise<void> {
    console.log('🗑️ Deleting flavour wheel record with ID:', id);
    const result = await this.flavourWheelRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`FlavourWheel with ID ${id} not found`);
    }
    console.log('✅ Deleted flavour wheel record:', id);
  }

  // DELETE: api/flavourwheel
  async deleteAll(): Promise<void> {
    console.log('🚨 DELETE ALL FLAVOUR WHEEL called');
    await this.flavourWheelRepository.clear();
    console.log('✅ Cleared all flavour wheel records');
  }
}
