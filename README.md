# Full-Stack Web Application

A modern full-stack web application built with **Next.js** for the frontend and **Node.js/Express** for the backend, featuring a responsive design and RESTful API architecture.

## 🚀 Features

- **Frontend**: Next.js 14 with React 18, Tailwind CSS, and App Router
- **Backend**: Express.js server with RESTful API endpoints
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **API Integration**: Seamless communication between frontend and backend
- **Interactive UI**: Dynamic content loading with loading states
- **Contact Form**: Functional contact form with backend validation
- **Error Handling**: Comprehensive error handling on both client and server

## 📁 Project Structure

```
├── frontend/                 # Next.js application
│   ├── src/
│   │   └── app/
│   │       ├── layout.js     # Root layout component
│   │       ├── page.js       # Main page component
│   │       └── globals.css   # Global styles with Tailwind
│   ├── next.config.js        # Next.js configuration
│   ├── tailwind.config.js    # Tailwind CSS configuration
│   └── package.json          # Frontend dependencies
├── backend/                  # Express.js API server
│   ├── server.js            # Main server file with API routes
│   └── package.json         # Backend dependencies
├── package.json             # Root package.json with orchestration scripts
├── ecosystem.config.js      # PM2 configuration for production
└── .github/
    └── copilot-instructions.md
```

## 🛠️ API Endpoints

- `GET /api/hello` - Returns a greeting message with timestamp
- `GET /api/data` - Returns sample data array
- `POST /api/contact` - Processes contact form submissions with validation
- `GET /api/health` - Health check endpoint

## 🚦 Getting Started

### Prerequisites

- **Node.js** (version 16 or higher)
- **npm** (comes with Node.js)

### Installation

1. **Install all dependencies**:
   ```bash
   npm run install:all
   ```

   Or install manually:
   ```bash
   # Install root dependencies
   npm install
   
   # Install frontend dependencies
   cd frontend && npm install
   
   # Install backend dependencies
   cd ../backend && npm install
   ```

### Running the Application

#### Development Mode (recommended):
```bash
# Start both frontend and backend concurrently
npm run dev
```

This will start:
- **Frontend**: http://localhost:3000 (Next.js)
- **Backend**: http://localhost:5000 (Express.js)

#### Individual Services:
```bash
# Start only frontend
npm run dev:frontend

# Start only backend
npm run dev:backend
```

#### Production Mode:
```bash
# Build and start both services
npm run build
npm start
```

## 🎯 Usage

1. **Home Section**: 
   - Click "Get Hello Message" to test the API connection
   - View server response with timestamp

2. **Data Section**: 
   - Click "Load Data" to fetch and display sample data from the backend
   - View technology stack information

3. **Contact Section**: 
   - Fill out the contact form with validation
   - Submit to test backend form processing

## 🛠️ Technologies Used

### Frontend Stack
- **Next.js 14**: React framework with App Router
- **React 18**: Component-based UI library
- **Tailwind CSS**: Utility-first CSS framework
- **Axios**: HTTP client for API requests

### Backend Stack
- **Node.js**: JavaScript runtime environment
- **Express.js**: Web application framework
- **Helmet**: Security middleware
- **Morgan**: HTTP request logger
- **CORS**: Cross-origin resource sharing

## 📝 Development Scripts

### Root Level Scripts
- `npm run dev` - Start both frontend and backend in development mode
- `npm run build` - Build both frontend and backend for production
- `npm start` - Start both services in production mode
- `npm run install:all` - Install dependencies for all packages

### Frontend Scripts
- `npm run dev:frontend` - Start Next.js development server
- `npm run build:frontend` - Build Next.js for production
- `npm run start:frontend` - Start Next.js production server

### Backend Scripts
- `npm run dev:backend` - Start Express server with nodemon
- `npm run start:backend` - Start Express server in production

## 🔧 Configuration

### Frontend Configuration
- **Next.js Config**: API routes are proxied to backend via `next.config.js`
- **Tailwind Config**: Custom styling configuration in `tailwind.config.js`

### Backend Configuration
- **CORS**: Configured to allow requests from frontend (localhost:3000)
- **Security**: Helmet middleware for security headers
- **Logging**: Morgan middleware for request logging

## 🚀 Deployment

### Using PM2 (recommended for production)
```bash
# Install PM2 globally
npm install -g pm2

# Start with PM2
pm2 start ecosystem.config.js

# Monitor processes
pm2 monit

# Stop all processes
pm2 stop all
```

### Environment Variables
Create `.env` files in both frontend and backend directories for environment-specific configuration:

**Frontend (.env.local)**:
```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

**Backend (.env)**:
```
NODE_ENV=production
PORT=5000
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎉 Acknowledgments

- Next.js team for the amazing React framework
- Express.js community for the robust backend framework
- Tailwind CSS for the utility-first CSS framework
