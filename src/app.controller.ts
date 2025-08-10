import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): object {
    return {
      message: 'Master Distiller API Server',
      version: '1.0.0',
      status: 'running',
      endpoints: {
        adminServer: '/api/admin-server',
        flavourWheel: '/api/flavour-wheel',
        documentation: '/api'
      },
      timestamp: new Date().toISOString()
    };
  }

  @Get('api')
  getApiInfo(): object {
    return {
      message: 'Master Distiller API Documentation',
      version: '1.0.0',
      availableEndpoints: {
        adminServer: {
          base: '/api/admin-server',
          methods: ['GET', 'POST', 'DELETE'],
          withId: '/api/admin-server/:id'
        },
        flavourWheel: {
          base: '/api/flavour-wheel',
          methods: ['GET', 'POST', 'PUT', 'DELETE'],
          withId: '/api/flavour-wheel/:id'
        }
      },
      documentation: 'Visit /api for Swagger documentation',
      timestamp: new Date().toISOString()
    };
  }
}
