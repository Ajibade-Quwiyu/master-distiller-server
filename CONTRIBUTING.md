# Contributing to Master Distiller Server

Thank you for your interest in contributing to Master Distiller Server! This document provides guidelines and information for contributors.

## 🚀 Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally
3. **Install dependencies**: `npm install`
4. **Set up environment**: Copy `.env.example` to `.env` and configure your database
5. **Start development server**: `npm run start:dev`

## 📝 Development Guidelines

### Code Style
- Follow TypeScript best practices
- Use meaningful variable and function names
- Add JSDoc comments for complex functions
- Follow NestJS conventions and patterns

### Commit Messages
Use conventional commit format:
```
type(scope): description

feat(admin): add new passcode generation endpoint
fix(cors): resolve cache-control header issue
docs(readme): update installation instructions
```

### Testing
- Write unit tests for new features
- Ensure all tests pass before submitting PR
- Run `npm run test` to execute tests
- Run `npm run test:cov` for coverage report

## 🔧 Development Workflow

1. **Create a feature branch** from `main`
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following the guidelines above

3. **Test your changes**
   ```bash
   npm run test
   npm run lint
   npm run build
   ```

4. **Commit your changes** with a descriptive message

5. **Push to your fork** and create a Pull Request

## 🐛 Reporting Issues

When reporting issues, please include:
- **Description** of the problem
- **Steps to reproduce** the issue
- **Expected behavior** vs actual behavior
- **Environment details** (OS, Node.js version, etc.)
- **Screenshots** if applicable

## ✨ Feature Requests

For feature requests:
- **Describe the feature** in detail
- **Explain the use case** and benefits
- **Provide examples** of how it would work
- **Consider implementation** complexity

## 📋 Pull Request Guidelines

1. **Update documentation** if needed
2. **Add tests** for new functionality
3. **Ensure all tests pass**
4. **Update CHANGELOG.md** if applicable
5. **Provide clear description** of changes

## 🏷️ Issue Labels

- `bug` - Something isn't working
- `enhancement` - New feature or request
- `documentation` - Improvements or additions to documentation
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention is needed

## 📞 Getting Help

- Check existing issues and PRs
- Review the [NestJS documentation](https://docs.nestjs.com/)
- Ask questions in GitHub Discussions
- Join our community chat (if available)

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to Master Distiller Server! 🍷
