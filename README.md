# College Cafeteria Ordering System

A full-stack cafeteria ordering system with MongoDB authentication, Google OAuth, and a modern React frontend.

## Features

- User registration with email and password
- Secure password hashing with bcrypt
- Real-time password strength indicator
- Google OAuth 2.0 login
- JWT token-based authentication
- Modern, responsive UI with Tailwind CSS
- MongoDB database for user management

## Quick Start

1. Install MongoDB and ensure it's running on port 27017
2. Run `npm install` to install dependencies
3. Configure `.env` file with your credentials
4. Run `npm run dev:all` to start both frontend and backend
5. Open `http://localhost:3000` in your browser

For detailed setup instructions, see [SETUP.md](./SETUP.md)

## Tech Stack

**Frontend:**
- React 18 + TypeScript
- Vite
- React Router
- Tailwind CSS
- Lucide Icons

**Backend:**
- Node.js + Express
- MongoDB + Mongoose
- bcryptjs for password hashing
- JWT for authentication
- Google Auth Library for OAuth

## Project Structure

- `/src` - React frontend application
- `/server` - Express backend API
- `SETUP.md` - Detailed setup instructions

## Environment Variables

Create a `.env` file based on `.env.example`:

```
MONGODB_URI=mongodb://127.0.0.1:27017/cafeteria_db
PORT=5000
JWT_SECRET=your-secret-key
VITE_GOOGLE_CLIENT_ID=your-google-client-id
```

## License

MIT
