# Deployment Guide

## Environment Setup

### Backend Environment Variables

1. Copy `backend/.env.example` to `backend/.env`
2. Update the following variables for production:

```env
MONGO_URI=your_production_mongodb_uri
CLOUD_NAME=your_cloudinary_cloud_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret
SECRET_KEY=your_strong_secret_key
PORT=5000
NODE_ENV=production
FRONTEND_URL=https://your-frontend-domain.com
```

### Frontend Environment Variables

1. Copy `frontend/.env.example` to `frontend/.env`
2. Update the API URL:

```env
VITE_API_URL=https://your-backend-domain.com
```

## Deployment Steps

### Option 1: Deploy to Render/Railway/Heroku

#### Backend:
1. Push your code to GitHub
2. Connect your repository to your hosting platform
3. Set environment variables in the platform dashboard
4. Set build command: `npm install`
5. Set start command: `node backend/server.js`

#### Frontend:
1. Update `frontend/.env` with production backend URL
2. Build: `cd frontend && npm run build`
3. The backend serves the frontend from `frontend/dist`

### Option 2: Deploy to Vercel (Frontend) + Render (Backend)

#### Backend (Render):
1. Create new Web Service
2. Set root directory: `backend`
3. Build command: `npm install`
4. Start command: `node server.js`
5. Add environment variables

#### Frontend (Vercel):
1. Import your repository
2. Set root directory: `frontend`
3. Build command: `npm run build`
4. Output directory: `dist`
5. Add environment variable: `VITE_API_URL`

### Option 3: VPS Deployment (DigitalOcean/AWS/etc)

1. Install Node.js and MongoDB
2. Clone repository
3. Set up environment files
4. Install dependencies: `npm install` (root and frontend)
5. Build frontend: `cd frontend && npm run build`
6. Use PM2 to run backend: `pm2 start backend/server.js`
7. Set up Nginx as reverse proxy

## Important Notes

- Make sure MongoDB is accessible from your deployment server
- Update CORS settings in backend to match your frontend domain
- Keep your `.env` files secure and never commit them to Git
- Use strong SECRET_KEY for JWT tokens
- Consider using MongoDB Atlas for production database
- Set up SSL certificates for HTTPS

## Post-Deployment Checklist

- [ ] Test user registration and login
- [ ] Test blog creation and image upload
- [ ] Test comments functionality
- [ ] Verify CORS is working correctly
- [ ] Check MongoDB connection
- [ ] Verify Cloudinary uploads work
- [ ] Test all API endpoints
