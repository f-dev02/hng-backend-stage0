# Backend Wizards - Stage 0: Dynamic Profile Endpoint

A RESTful API endpoint that returns profile information with dynamic cat facts from an external API.

## Features

- ✅ Dynamic profile endpoint at `/me`
- ✅ Real-time cat facts integration
- ✅ ISO 8601 timestamp formatting
- ✅ Error handling and fallbacks
- ✅ CORS enabled
- ✅ Proper logging
- ✅ TypeScript for type safety

## Prerequisites

- Node.js (v16 or higher)
- npm

## Installation

1. **Clone or create the project directory:**
```bash
mkdir backend-wizards-stage0
cd backend-wizards-stage0
```

2. **Initialize and install dependencies:**
```bash
npm install
```

3. **Configure your environment:**
```bash
cp .env.example .env
```

Edit `.env` and update with your information:
```
USER_EMAIL=youremail@example.com
USER_NAME=Your Full Name
USER_STACK=Node.js/Express/TypeScript
```

## Project Structure

```
backend-wizards-stage0/
├── src/
│   └── index.ts          # Main application file
├── dist/                 # Compiled JavaScript (generated)
├── .env                  # Environment variables (create this)
├── .env.example          # Example environment file
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
└── README.md            # This file
```

## Running the Application

### Development Mode (with auto-reload)
```bash
npm run dev
```

### Production Mode
```bash
npm run build
npm start
```

The server will start on `http://localhost:3000` (or the port specified in your `.env` file).

## API Endpoints

### `GET /me`
Returns your profile information with a dynamic cat fact.

**Response:**
```json
{
  "status": "success",
  "user": {
    "email": "your.email@example.com",
    "name": "Your Full Name",
    "stack": "Node.js/Express/TypeScript"
  },
  "timestamp": "2025-10-15T12:34:56.789Z",
  "fact": "A cat's brain is biologically more similar to a human brain than it is to a dog's."
}
```

**Status Codes:**
- `200 OK` - Success
- `500 Internal Server Error` - Server error

## Testing

### Using cURL:
```bash
curl http://localhost:3000/me
```

### Using HTTPie:
```bash
http GET http://localhost:3000/me
```

### Using Browser:
Navigate to `http://localhost:3000/me`

## Implementation Details

### Dynamic Timestamp
- Generated fresh on every request
- Uses UTC time in ISO 8601 format
- Updates automatically with each call

### Cat Facts Integration
- Fetches from `https://catfact.ninja/fact`
- New fact on every request (not cached)
- 5-second timeout for API calls
- Graceful fallback if API fails

### Error Handling
- Network errors handled with try-catch
- Timeout protection on external API calls
- Fallback message if Cat Facts API is unavailable
- Proper HTTP status codes returned

### Best Practices Implemented
- ✅ TypeScript for type safety
- ✅ Environment variables for configuration
- ✅ CORS headers for cross-origin requests
- ✅ Request logging for debugging
- ✅ Proper error handling
- ✅ Clean code structure

## Acceptance Criteria Status

- ✅ Working `GET /me` endpoint with 200 OK status
- ✅ Response follows exact JSON schema
- ✅ All required fields present
- ✅ User object contains email, name, and stack
- ✅ Timestamp in ISO 8601 format (UTC)
- ✅ Dynamic timestamp updates on each request
- ✅ Cat fact fetched from external API
- ✅ New cat fact on every request
- ✅ Content-Type: application/json
- ✅ Well-structured, best-practice code

## Troubleshooting

### Port already in use
If port 3000 is taken, change the PORT in your `.env` file:
```
PORT=8080
```

### Cat Facts API timeout
The endpoint has a 5-second timeout and a fallback message. If you see the fallback, the external API might be down temporarily.

### TypeScript errors
Make sure all dependencies are installed:
```bash
npm install
```

## License

MIT