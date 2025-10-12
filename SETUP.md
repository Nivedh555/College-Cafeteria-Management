# Cafeteria System Setup Instructions

This is a full-stack cafeteria ordering system with MongoDB authentication, Google OAuth, and a modern React frontend.

## Prerequisites

Before you begin, ensure you have the following installed:

1. **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
2. **MongoDB** (v6 or higher) - [Download here](https://www.mongodb.com/try/download/community)

## Step 1: Install MongoDB

### On Windows:
1. Download MongoDB Community Server from the official website
2. Run the installer and follow the setup wizard
3. Install as a Windows Service (recommended)
4. MongoDB will automatically start on port 27017

### On macOS:
```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

### On Linux (Ubuntu/Debian):
```bash
sudo apt-get install -y mongodb
sudo systemctl start mongodb
sudo systemctl enable mongodb
```

### Verify MongoDB is Running:
```bash
mongosh
# You should see a connection to MongoDB
# Type 'exit' to quit
```

## Step 2: Install Project Dependencies

Navigate to the project directory and install all dependencies:

```bash
npm install
```

This will install both frontend and backend dependencies including:
- React, React Router, Tailwind CSS
- Express, Mongoose, bcrypt, JWT
- Google Auth Library

## Step 3: Configure Environment Variables

The `.env` file has been created with default settings. Update it with your specific values:

```env
MONGODB_URI=mongodb://127.0.0.1:27017/cafeteria_db
PORT=5000
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
VITE_GOOGLE_CLIENT_ID=your-google-client-id-here
```

### To Get Google OAuth Credentials:

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google+ API
4. Go to "Credentials" and create an "OAuth 2.0 Client ID"
5. Set Authorized JavaScript origins: `http://localhost:3000`
6. Set Authorized redirect URIs: `http://localhost:3000`
7. Copy the Client ID and paste it in `.env` as `VITE_GOOGLE_CLIENT_ID`

**Important:** Change `JWT_SECRET` to a strong random string for production!

## Step 4: Start the Application

You have two options:

### Option A: Run Both Frontend and Backend Together (Recommended)
```bash
npm run dev:all
```

This will start:
- Frontend on `http://localhost:3000` (Vite)
- Backend API on `http://localhost:5000` (Express)

### Option B: Run Frontend and Backend Separately

**Terminal 1 - Backend:**
```bash
npm run server
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

## Step 5: Access the Application

Open your browser and navigate to:
```
http://localhost:3000
```

You should see the login page.

## Features

### 1. User Registration
- Enter name, email, and password
- Password strength indicator (Weak/Medium/Strong)
- Passwords are hashed with bcrypt before storage
- Duplicate email prevention

### 2. User Login
- Login with email and password
- Secure JWT token authentication
- Session persists in localStorage

### 3. Google OAuth Login
- Click "Continue with Google" button
- Sign in with your Google account
- Automatically creates user account if first time

### 4. Dashboard
- View user profile information
- Logout functionality
- Ready for additional cafeteria features

## Database Structure

The application creates a `cafeteria_db` database in MongoDB with a `users` collection:

```javascript
{
  name: String,
  email: String (unique),
  password: String (hashed with bcrypt),
  googleId: String (for Google OAuth users),
  createdAt: Date
}
```

## Project Structure

```
cafeteria-system/
├── server/
│   ├── index.js           # Express server setup
│   ├── models/
│   │   └── User.js        # MongoDB User model
│   └── routes/
│       └── auth.js        # Authentication routes
├── src/
│   ├── components/
│   │   ├── GoogleLoginButton.tsx
│   │   └── PasswordStrength.tsx
│   ├── pages/
│   │   ├── Login.tsx      # Login page
│   │   ├── Register.tsx   # Registration page
│   │   └── Dashboard.tsx  # User dashboard
│   ├── App.tsx            # Main app with routing
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── .env                   # Environment variables
├── package.json           # Dependencies and scripts
└── SETUP.md              # This file
```

## API Endpoints

### POST /api/auth/register
Register a new user with email and password.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword123"
}
```

### POST /api/auth/login
Login with email and password.

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "securepassword123"
}
```

### POST /api/auth/google
Authenticate with Google OAuth.

**Request Body:**
```json
{
  "credential": "google-jwt-token"
}
```

### GET /api/health
Check if the server is running.

## Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running: `mongosh` should connect successfully
- Check if port 27017 is available
- Verify MONGODB_URI in `.env` is correct

### Google Login Not Working
- Ensure you've added your Google Client ID to `.env`
- Check that authorized origins are set correctly in Google Cloud Console
- Clear browser cache and try again

### Port Already in Use
If port 3000 or 5000 is already in use:
- Change frontend port: Edit `vite.config.ts` and add `server: { port: 3001 }`
- Change backend port: Update `PORT` in `.env` and update API URLs in frontend files

### Dependencies Installation Issues
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## Security Considerations

1. **Never commit `.env` to version control** - It contains sensitive credentials
2. **Change JWT_SECRET** to a strong random value in production
3. **Use HTTPS** in production (not http)
4. **Enable CORS properly** for production domains
5. **Keep Google OAuth credentials secure**

## Adding More Features

This authentication system is ready for you to add cafeteria-specific features:

- Menu browsing
- Order placement
- Queue management
- Order history
- Payment integration
- Admin dashboard
- Real-time order tracking

All authenticated routes should verify the JWT token from localStorage.

## Production Deployment

When deploying to production:

1. Set environment variables on your hosting platform
2. Update Google OAuth authorized origins
3. Use a production MongoDB instance (MongoDB Atlas recommended)
4. Change JWT_SECRET to a secure random string
5. Build the frontend: `npm run build`
6. Serve the built files from `dist/` directory
7. Deploy backend to a Node.js hosting service

## Support

If you encounter any issues, check:
- MongoDB is running and accessible
- All environment variables are set correctly
- Node.js version is compatible (v18+)
- All dependencies installed successfully

---

**Enjoy your cafeteria ordering system!**
