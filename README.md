# Dice Roller Application

A simple web-based dice rolling application with a Flask backend and HTML/JavaScript frontend.

## Features

- Roll multiple dice with custom number of sides
- See individual roll results and total
- Clean and responsive user interface
- Input validation and error handling

## Prerequisites

- Python 3.8 or higher
- Web browser (Chrome, Firefox, Edge, etc.)
- pip (Python package manager)

## Project Structure

```
dice-roller-app/
├── backend/
│   ├── app.py
│   ├── dice/
│   │   └── roller.py
│   └── requirements.txt
└── frontend/
    ├── index.html
    ├── styles/
    │   └── style.css
    └── scripts/
        └── app.js
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/dice-roller-app.git
cd dice-roller-app
```

2. Install backend dependencies:
```bash
cd backend
pip install -r requirements.txt
```

## Running the Application

### Start Backend Server

1. Open a terminal in the backend directory:
```bash
cd backend
set FLASK_APP=app.py
set FLASK_DEBUG=1
flask run
```
The backend will run at `http://localhost:5000`

### Start Frontend Server

1. Open a new terminal in the frontend directory:
```bash
cd frontend
python -m http.server 8000
```
The frontend will be available at `http://localhost:8000`

## Usage

1. Open your browser and navigate to `http://localhost:8000`
2. Enter the desired number of dice sides (minimum 2)
3. Enter the number of dice to roll (minimum 1)
4. Click "Roll Dice" to see the results
5. View individual roll results and total

## Development

- Backend changes will auto-reload when Flask debug mode is enabled
- Frontend changes require browser refresh
- Check browser console (F12) for debugging
- Flask server logs show API requests and errors

## Troubleshooting

- **Backend won't start:**
  - Check if port 5000 is available
  - Verify Python environment and dependencies
  - Check terminal for error messages

- **Frontend can't connect:**
  - Ensure both servers are running
  - Check browser console for errors
  - Verify CORS is enabled in backend

- **Invalid roll results:**
  - Verify input values meet requirements
  - Check browser console for API errors
  - Review backend validation logs

## License

MIT License - Feel free to use and modify as needed.