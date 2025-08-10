import { Controller, Get, Post, Put, Delete, Param, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { FlavourWheelService } from './flavour-wheel.service';
import { FlavourWheel } from '../entities/flavour-wheel.entity';

@ApiTags('flavour-wheel')
@Controller('flavour-wheel')
export class FlavourWheelController {
  constructor(private readonly flavourWheelService: FlavourWheelService) {}

  // GET: api/flavourwheel
  @Get()
  @ApiOperation({ summary: 'Get all flavour wheels' })
  @ApiResponse({ status: 200, description: 'Returns all flavour wheels', type: [FlavourWheel] })
  async getAll(): Promise<FlavourWheel[]> {
    return this.flavourWheelService.getAll();
  }

  // GET: api/flavourwheel/{id}
  @Get(':id')
  @ApiOperation({ summary: 'Get flavour wheel by ID' })
  @ApiParam({ name: 'id', description: 'Flavour Wheel ID' })
  @ApiResponse({ status: 200, description: 'Returns the flavour wheel', type: FlavourWheel })
  @ApiResponse({ status: 404, description: 'Flavour wheel not found' })
  async getById(@Param('id') id: string): Promise<FlavourWheel> {
    return this.flavourWheelService.getById(+id);
  }

  // POST: api/flavourwheel
  @Post()
  @ApiOperation({ summary: 'Create a new flavour wheel' })
  @ApiBody({ description: 'Flavour wheel data to create', type: FlavourWheel })
  @ApiResponse({ status: 201, description: 'Flavour wheel created successfully', type: FlavourWheel })
  async create(@Body() body: any): Promise<FlavourWheel> {
    console.log('🎯 POST /api/flavour-wheel - Raw body:', body);
    
    // Handle both wrapped and unwrapped data structures
    let flavourWheelData: any;
    
    if (body.flavourWheel) {
      // Wrapped format: { flavourWheel: { ... } }
      flavourWheelData = body.flavourWheel;
      console.log('🎯 Using wrapped flavourWheel data:', flavourWheelData);
    } else {
      // Direct format: { username: ..., email: ... }
      flavourWheelData = body;
      console.log('🎯 Using direct data:', flavourWheelData);
    }
    
    // Create the FlavourWheel entity with explicit field mapping
    const flavourWheel = new FlavourWheel();
    flavourWheel.Username = flavourWheelData.username || '';
    flavourWheel.Email = flavourWheelData.email || '';
    flavourWheel.Spirit1Name = flavourWheelData.spirit1Name || '';
    flavourWheel.Spirit2Name = flavourWheelData.spirit2Name || '';
    flavourWheel.Spirit3Name = flavourWheelData.spirit3Name || '';
    flavourWheel.Spirit4Name = flavourWheelData.spirit4Name || '';
    flavourWheel.Spirit5Name = flavourWheelData.spirit5Name || '';
    flavourWheel.Spirit1Flavours = flavourWheelData.spirit1Flavours || 0;
    flavourWheel.Spirit2Flavours = flavourWheelData.spirit2Flavours || 0;
    flavourWheel.Spirit3Flavours = flavourWheelData.spirit3Flavours || 0;
    flavourWheel.Spirit4Flavours = flavourWheelData.spirit4Flavours || 0;
    flavourWheel.Spirit5Flavours = flavourWheelData.spirit5Flavours || 0;
    flavourWheel.Spirit1Ratings = flavourWheelData.spirit1Ratings || 0;
    flavourWheel.Spirit2Ratings = flavourWheelData.spirit2Ratings || 0;
    flavourWheel.Spirit3Ratings = flavourWheelData.spirit3Ratings || 0;
    flavourWheel.Spirit4Ratings = flavourWheelData.spirit4Ratings || 0;
    flavourWheel.Spirit5Ratings = flavourWheelData.spirit5Ratings || 0;
    flavourWheel.Feedback = flavourWheelData.feedback || '';
    flavourWheel.OverallRating = flavourWheelData.overallRating || 0;
    
    console.log('🎯 Creating FlavourWheel entity:', flavourWheel);
    
    const result = await this.flavourWheelService.create(flavourWheel);
    console.log('🎯 Created result:', result);
    
    return result;
  }

  // PUT: api/flavourwheel/{id}
  @Put(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Update flavour wheel by ID' })
  @ApiParam({ name: 'id', description: 'Flavour Wheel ID' })
  @ApiBody({ description: 'Flavour wheel data to update', type: FlavourWheel })
  @ApiResponse({ status: 204, description: 'Flavour wheel updated successfully' })
  @ApiResponse({ status: 404, description: 'Flavour wheel not found' })
  async update(@Param('id') id: string, @Body() flavourWheel: FlavourWheel): Promise<void> {
    return this.flavourWheelService.update(+id, flavourWheel);
  }

  // DELETE: api/flavourwheel/{id}
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete flavour wheel by ID' })
  @ApiParam({ name: 'id', description: 'Flavour Wheel ID' })
  @ApiResponse({ status: 204, description: 'Flavour wheel deleted successfully' })
  @ApiResponse({ status: 404, description: 'Flavour wheel not found' })
  async delete(@Param('id') id: string): Promise<void> {
    return this.flavourWheelService.delete(+id);
  }

  // DELETE: api/flavourwheel
  @Delete()
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete all flavour wheels' })
  @ApiResponse({ status: 204, description: 'All flavour wheels deleted successfully' })
  async deleteAll(): Promise<void> {
    return this.flavourWheelService.deleteAll();
  }
}
