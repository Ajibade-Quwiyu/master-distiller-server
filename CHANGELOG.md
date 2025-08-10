# Changelog

All notable changes to Master Distiller Server will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Initial project setup with NestJS framework
- MySQL database integration with TypeORM
- Admin Server CRUD operations
- Flavour Wheel CRUD operations
- Swagger API documentation
- CORS configuration with comprehensive header support
- Hot reload development mode
- TypeScript configuration
- ESLint and Prettier setup

### Changed
- Updated entity properties to PascalCase for proper database mapping
- Enhanced CORS configuration to handle cache-control headers
- Improved error handling and logging throughout the application

### Fixed
- Resolved CORS issues with cache-control headers
- Fixed database column mapping mismatches
- Corrected entity property naming conventions
- Resolved data retrieval issues with empty values

## [1.0.0] - 2024-01-XX

### Added
- Complete NestJS server implementation
- Admin Server module with passcode generation
- Flavour Wheel module for spirit tasting submissions
- MySQL database integration
- Interactive API documentation with Swagger
- Comprehensive CORS support
- Development and production configurations
- TypeScript type safety
- Modular architecture following NestJS best practices

### Features
- **One Game at a Time**: Admin server generates new passcodes by clearing existing records
- **Flexible Data Handling**: Supports both wrapped and unwrapped request formats
- **Comprehensive Logging**: Detailed console logs for debugging
- **Error Handling**: Proper HTTP status codes and error responses
- **Database Synchronization**: Automatic schema management with TypeORM

---

## Version History

- **1.0.0** - Initial release with core functionality
- **Unreleased** - Development version with ongoing improvements
