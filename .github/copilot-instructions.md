<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Full-Stack Web Application

This is a full-stack web application with the following structure:

## Project Architecture
- **Frontend**: Next.js 14 with React 18, Tailwind CSS, and App Router
- **Backend**: Node.js with Express.js, providing RESTful API endpoints
- **Communication**: Frontend communicates with backend via HTTP API calls

## Development Guidelines

### Frontend (Next.js)
- Use the App Router structure with `src/app/` directory
- Implement client components with `'use client'` directive when needed
- Use Tailwind CSS for styling with responsive design principles
- Handle API calls with axios and proper error handling
- Follow React best practices with hooks and state management

### Backend (Node.js/Express)
- Use modern JavaScript (ES6+) with CommonJS modules
- Implement proper middleware for security (helmet), logging (morgan), and CORS
- Follow RESTful API conventions with appropriate HTTP status codes
- Include comprehensive error handling and validation
- Use environment variables for configuration

### Code Style
- Use consistent indentation (2 spaces)
- Follow JavaScript/React naming conventions (camelCase, PascalCase for components)
- Include descriptive comments and JSDoc where appropriate
- Keep functions small and focused on single responsibilities
- Use async/await for asynchronous operations

### API Integration
- Backend runs on port 5000, frontend on port 3000
- Use Next.js rewrites in `next.config.js` for API proxy
- Implement proper loading states and error handling
- Validate user input on both client and server sides
- Use appropriate HTTP methods (GET, POST, PUT, DELETE)

### Project Structure
```
├── frontend/           # Next.js application
│   ├── src/app/       # App Router pages and layouts
│   ├── package.json   # Frontend dependencies
│   └── next.config.js # Next.js configuration
├── backend/           # Express.js API server
│   ├── server.js      # Main server file
│   └── package.json   # Backend dependencies
├── package.json       # Root package.json with scripts
└── .github/          # GitHub and Copilot configurations
```
