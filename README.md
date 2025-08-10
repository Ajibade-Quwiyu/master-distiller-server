# Master Distiller Server

A robust NestJS-based REST API server for the Master Distiller application, providing backend services for spirit tasting and flavor wheel management.

## 🍷 Description

Master Distiller Server is a comprehensive backend solution built with NestJS and TypeScript, designed to handle spirit tasting sessions and flavor wheel submissions. The application provides a scalable, production-ready API with MySQL database integration, comprehensive CORS support, and interactive API documentation.

## ✨ Features

- 🚀 **NestJS Framework** - Modern, scalable Node.js framework
- 🗄️ **MySQL Database** - Robust data persistence with TypeORM
- 📚 **Swagger Documentation** - Interactive API documentation at `/api`
- 🔒 **CORS Enabled** - Full cross-origin support for frontend integration
- 🔄 **Hot Reload** - Development mode with automatic restarts
- 📝 **TypeScript** - Type-safe development experience
- 🏗️ **Modular Architecture** - Clean separation of concerns
- 🎯 **CRUD Operations** - Complete data management for both entities

## 🛠️ Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd master-distiller-server

# Install dependencies
npm install
```

## ⚙️ Configuration

Create a `.env` file in the root directory:

```env
# Database Configuration
DB_SERVER=your_mysql_server
DB_NAME=your_database_name
DB_USER=your_username
DB_PASSWORD=your_password
DB_CHARSET=utf8

# Application Configuration
PORT=3000
NODE_ENV=development
```

## 🚀 Running the Application

```bash
# Development mode (with hot reload)
npm run start:dev

# Production mode
npm run start:prod

# Build the application
npm run build
```

The server will start on `http://localhost:3000` by default.

## 📚 API Documentation

Once the server is running, visit `http://localhost:3000/api` to access the interactive Swagger documentation.

## 🔌 API Endpoints

### Admin Server Management
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/admin-server` | Get all admin server records |
| `GET` | `/api/admin-server/:id` | Get admin server by ID |
| `POST` | `/api/admin-server` | Generate new passcode (clears existing) |
| `DELETE` | `/api/admin-server/:id` | Delete admin server by ID |
| `DELETE` | `/api/admin-server` | Delete all admin server records |

### Flavour Wheel Submissions
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/flavour-wheel` | Get all flavour wheel submissions |
| `GET` | `/api/flavour-wheel/:id` | Get flavour wheel by ID |
| `POST` | `/api/flavour-wheel` | Create new flavour wheel submission |
| `PUT` | `/api/flavour-wheel/:id` | Update flavour wheel submission |
| `DELETE` | `/api/flavour-wheel/:id` | Delete flavour wheel by ID |
| `DELETE` | `/api/flavour-wheel` | Delete all flavour wheel submissions |

## 🏗️ Project Structure

```
src/
├── main.ts                    # Application entry point
├── app.module.ts             # Root module configuration
├── entities/                 # Database entities
│   ├── admin-server.entity.ts
│   └── flavour-wheel.entity.ts
├── admin-server/             # Admin Server module
│   ├── admin-server.controller.ts
│   ├── admin-server.service.ts
│   └── admin-server.module.ts
└── flavour-wheel/            # Flavour Wheel module
    ├── flavour-wheel.controller.ts
    ├── flavour-wheel.service.ts
    └── flavour-wheel.module.ts
```

## 📊 Data Models

### AdminServer Entity
```typescript
{
  Id: number;              // Primary Key
  DrinkCategory: string;   // e.g., "REDWINE", "WHISKEY"
  Spirit1: string;         // Spirit name
  Spirit2: string;         // Spirit name
  Spirit3: string;         // Spirit name
  Spirit4: string;         // Spirit name
  Spirit5: string;         // Spirit name
  PasscodeKey: string;     // Generated passcode for sessions
}
```

### FlavourWheel Entity
```typescript
{
  id: number;              // Primary Key
  Username: string;        // User's name
  Email: string;           // User's email
  Spirit1Name: string;     // Spirit 1 name
  Spirit2Name: string;     // Spirit 2 name
  Spirit3Name: string;     // Spirit 3 name
  Spirit4Name: string;     // Spirit 4 name
  Spirit5Name: string;     // Spirit 5 name
  Spirit1Flavours: number; // Number of flavours for Spirit 1
  Spirit2Flavours: number; // Number of flavours for Spirit 2
  Spirit3Flavours: number; // Number of flavours for Spirit 3
  Spirit4Flavours: number; // Number of flavours for Spirit 4
  Spirit5Flavours: number; // Number of flavours for Spirit 5
  Spirit1Ratings: number;  // Rating for Spirit 1
  Spirit2Ratings: number;  // Rating for Spirit 2
  Spirit3Ratings: number;  // Rating for Spirit 3
  Spirit4Ratings: number;  // Rating for Spirit 4
  Spirit5Ratings: number;  // Rating for Spirit 5
  Feedback: string;        // User feedback
  OverallRating: number;   // Overall session rating
}
```

## 🔧 Development

### Available Scripts

```bash
# Development
npm run start:dev          # Start in development mode
npm run start:debug        # Start in debug mode

# Production
npm run build             # Build the application
npm run start:prod        # Start in production mode

# Testing
npm run test              # Run unit tests
npm run test:e2e          # Run end-to-end tests
npm run test:cov          # Run test coverage

# Linting
npm run lint              # Run ESLint
npm run lint:fix          # Fix ESLint issues
```

### Key Features

- **One Game at a Time**: Admin server generates new passcodes by clearing existing records
- **Flexible Data Handling**: Supports both wrapped and unwrapped request formats
- **Comprehensive Logging**: Detailed console logs for debugging
- **Error Handling**: Proper HTTP status codes and error responses
- **Database Synchronization**: Automatic schema management with TypeORM

## 🌐 CORS Configuration

The server is configured to handle cross-origin requests with support for:
- All origins (`origin: true`)
- Common HTTP methods
- Custom headers including `cache-control`
- Credentials support

## 📦 Dependencies

### Core Dependencies
- `@nestjs/core` - NestJS framework
- `@nestjs/common` - Common utilities
- `@nestjs/typeorm` - TypeORM integration
- `@nestjs/config` - Environment configuration
- `@nestjs/swagger` - API documentation
- `typeorm` - Database ORM
- `mysql2` - MySQL driver

### Development Dependencies
- `@nestjs/cli` - NestJS CLI tools
- `@nestjs/testing` - Testing utilities
- `typescript` - TypeScript compiler
- `eslint` - Code linting
- `prettier` - Code formatting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Check the [API documentation](http://localhost:3000/api) when running locally
- Review the [NestJS documentation](https://docs.nestjs.com/)
- Open an issue in the repository

---

**Built with ❤️ using NestJS and TypeScript**
