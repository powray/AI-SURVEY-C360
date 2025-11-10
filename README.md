# AI Chat Survey for C360 View

## Prerequisites
- Node 18+
- MongoDB (Atlas or local)
- OpenAI API key

## Backend
1. cd backend
2. cp .env.sample .env and fill values
3. npm install
4. npm run dev

## Frontend
1. cd frontend
2. cp .env.sample .env
3. npm install
4. npm run dev

The frontend expects the backend at the URL in `VITE_API_BASE` (default http://localhost:4000/api)

## Notes
- This project uses a simple action JSON parsing approach. In production use function calling or a secure structured output approach.
- iMessage requires running a macOS relay or using SMS alternatives (Twilio). LinkedIn messaging API may require partner approval.
