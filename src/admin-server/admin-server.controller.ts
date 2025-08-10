import { Controller, Get, Post, Delete, Param, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { AdminServerService } from './admin-server.service';
import { AdminServer } from '../entities/admin-server.entity';

@ApiTags('admin-server')
@Controller('admin-server')
export class AdminServerController {
  constructor(private readonly adminServerService: AdminServerService) {}

  // GET: api/adminserver
  @Get()
  @ApiOperation({ summary: 'Get all admin servers' })
  @ApiResponse({ status: 200, description: 'Returns all admin servers', type: [AdminServer] })
  async getAll(): Promise<AdminServer[]> {
    return this.adminServerService.getAll();
  }

  // GET: api/adminserver/{id}
  @Get(':id')
  @ApiOperation({ summary: 'Get admin server by ID' })
  @ApiParam({ name: 'id', description: 'Admin Server ID' })
  @ApiResponse({ status: 200, description: 'Returns the admin server', type: AdminServer })
  @ApiResponse({ status: 404, description: 'Admin server not found' })
  async getById(@Param('id') id: string): Promise<AdminServer> {
    return this.adminServerService.getById(+id);
  }

  // POST: api/adminserver (generate new passcode - delete all + create new)
  @Post()
  @ApiOperation({ summary: 'Generate new passcode - delete all existing and create new' })
  @ApiBody({ description: 'Admin server data to create', type: AdminServer })
  @ApiResponse({ status: 201, description: 'New passcode generated successfully', type: AdminServer })
  async generateNewPasscode(@Body() body: any): Promise<AdminServer> {
    console.log('🔑 POST /api/admin-server - Raw body:', body);
    
    // Handle both wrapped and unwrapped data structures
    let adminServerData: any;
    
    if (body.adminServer) {
      // Wrapped format: { adminServer: { ... } }
      adminServerData = body.adminServer;
      console.log('🔑 Using wrapped adminServer data:', adminServerData);
    } else {
      // Direct format: { drinkCategory: ..., spirit1: ... }
      adminServerData = body;
      console.log('🔑 Using direct data:', adminServerData);
    }
    
    // Create the AdminServer entity with explicit field mapping
    const adminServer = new AdminServer();
    adminServer.drinkCategory = adminServerData.drinkCategory || '';
    adminServer.spirit1 = adminServerData.spirit1 || '';
    adminServer.spirit2 = adminServerData.spirit2 || '';
    adminServer.spirit3 = adminServerData.spirit3 || '';
    adminServer.spirit4 = adminServerData.spirit4 || '';
    adminServer.spirit5 = adminServerData.spirit5 || '';
    adminServer.passcodeKey = adminServerData.passcodeKey || '';
    
    console.log('🔑 Creating AdminServer entity:', adminServer);
    
    const result = await this.adminServerService.generateNewPasscode(adminServer);
    console.log('🔑 Generated result:', result);
    
    return result;
  }

  // DELETE: api/adminserver/{id}
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete admin server by ID' })
  @ApiParam({ name: 'id', description: 'Admin Server ID' })
  @ApiResponse({ status: 204, description: 'Admin server deleted successfully' })
  @ApiResponse({ status: 404, description: 'Admin server not found' })
  async delete(@Param('id') id: string): Promise<void> {
    return this.adminServerService.delete(+id);
  }

  // DELETE: api/adminserver
  @Delete()
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete all admin servers' })
  @ApiResponse({ status: 204, description: 'All admin servers deleted successfully' })
  async deleteAll(): Promise<void> {
    return this.adminServerService.deleteAll();
  }
}
