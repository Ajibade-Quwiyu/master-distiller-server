import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdminServer } from '../entities/admin-server.entity';

@Injectable()
export class AdminServerService {
  constructor(
    @InjectRepository(AdminServer)
    private adminServerRepository: Repository<AdminServer>,
  ) {}

  // GET: api/adminserver
  async getAll(): Promise<AdminServer[]> {
    const results = await this.adminServerRepository.find();
    console.log('📊 GET ALL - Found records:', results);
    return results;
  }

  // GET: api/adminserver/{id}
  async getById(id: number): Promise<AdminServer> {
    const adminServer = await this.adminServerRepository.findOne({ where: { Id: id } });
    if (!adminServer) {
      throw new NotFoundException(`AdminServer with ID ${id} not found`);
    }
    return adminServer;
  }

  // Generate new passcode: delete all existing + create new
  async generateNewPasscode(adminServer: AdminServer): Promise<AdminServer> {
    console.log('🔑 Generating new passcode with data:', adminServer);
    
    // Delete all existing records
    await this.adminServerRepository.clear();
    console.log('🗑️ Cleared existing records');
    
    // Create new record with the new passcode using repository.create() for better entity handling
    const newRecord = this.adminServerRepository.create(adminServer);
    console.log('🔧 Created entity (before save):', newRecord);
    
    const savedRecord = await this.adminServerRepository.save(newRecord);
    console.log('✅ Saved record:', savedRecord);
    
    return savedRecord;
  }

  // DELETE: api/adminserver/{id}
  async delete(id: number): Promise<void> {
    const result = await this.adminServerRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`AdminServer with ID ${id} not found`);
    }
  }

  // DELETE: api/adminserver
  async deleteAll(): Promise<void> {
    console.log('🚨 DELETE ALL called - this should not happen during generate key!');
    await this.adminServerRepository.clear();
  }
}
