const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(morgan('combined'));
app.use(cors({
  origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/api/hello', (req, res) => {
  try {
    res.json({ 
      message: 'Hello from the Node.js backend!', 
      timestamp: new Date().toISOString(),
      server: 'Express.js'
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/data', (req, res) => {
  try {
    const sampleData = [
      { 
        id: 1, 
        name: 'Next.js Frontend', 
        description: 'Modern React framework with server-side rendering and static site generation' 
      },
      { 
        id: 2, 
        name: 'Node.js Backend', 
        description: 'Fast and scalable server-side JavaScript runtime environment' 
      },
      { 
        id: 3, 
        name: 'Express.js API', 
        description: 'Minimal and flexible Node.js web application framework' 
      },
      { 
        id: 4, 
        name: 'RESTful Services', 
        description: 'Clean and consistent API design following REST principles' 
      }
    ];
    
    res.json(sampleData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.post('/api/contact', (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ 
        error: 'All fields are required',
        success: false
      });
    }
    
    // Email validation (basic)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        error: 'Invalid email format',
        success: false
      });
    }
    
    // In a real application, you would:
    // 1. Save to database
    // 2. Send email notification
    // 3. Validate and sanitize input more thoroughly
    
    console.log('Contact form submission received:', {
      name,
      email,
      message,
      timestamp: new Date().toISOString()
    });
    
    res.json({ 
      success: true, 
      message: `Thank you ${name}! Your message has been received. We'll get back to you at ${email}.`,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ 
      error: 'Failed to process contact form',
      success: false
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Something went wrong!',
    success: false
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ 
    error: 'Route not found',
    success: false
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Backend server is running on http://localhost:${PORT}`);
  console.log(`📊 Health check available at http://localhost:${PORT}/api/health`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
});
