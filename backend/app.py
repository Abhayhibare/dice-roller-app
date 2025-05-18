from flask import Flask, request, jsonify
from flask_cors import CORS
from dice.roller import DiceRoller

app = Flask(__name__)
CORS(app)  # Enable CORS
dice_roller = DiceRoller()

@app.route('/roll', methods=['POST'])
def roll_dice():
    data = request.json
    sides = data.get('sides', 6)
    count = data.get('count', 1)
    
    # Add input validation
    if not isinstance(sides, int) or not isinstance(count, int):
        return jsonify({'error': 'Invalid input types'}), 400
    if sides < 2 or count < 1:
        return jsonify({'error': 'Invalid dice parameters'}), 400
        
    results = dice_roller.roll_dice(sides, count)
    return jsonify({'results': results})