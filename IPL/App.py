from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import pandas as pd 

app = Flask(__name__)
CORS(app)

teams = ['Sunrisers Hyderabad', 'Mumbai Indians', 'Royal Challengers Bangalore', 'Kolkata Knight Riders',
         'Kings XI Punjab', 'Chennai Super Kings', 'Rajasthan Royals', 'Delhi Capitals']

cities = ['Hyderabad', 'Bangalore', 'Mumbai', 'Indore', 'Kolkata', 'Delhi',
          'Chandigarh', 'Jaipur', 'Chennai', 'Cape Town', 'Port Elizabeth',
          'Durban', 'Centurion', 'East London', 'Johannesburg', 'Kimberley',
          'Bloemfontein', 'Ahmedabad', 'Cuttack', 'Nagpur', 'Dharamsala',
          'Visakhapatnam', 'Pune', 'Raipur', 'Ranchi', 'Abu Dhabi',
          'Sharjah', 'Mohali', 'Bengaluru']

pipe = pickle.load(open('pipe.pkl', 'rb'))

result={}

@app.route('/')
def index():
    return 'Welcome to the IPL Predictor'


@app.route('/predict', methods=['POST', 'GET'])
def predict():

    global result

    if request.method == 'POST':
        data = request.json
        print("Request received successfully", data)

        batting_team = data['batting_team']
        bowling_team = data['bowling_team']
        selected_city = data['selected_city']
        target = float(data['target'])
        score = float(data['score'])
        overs = float(data['overs'])
        wickets = float(data['wickets_out'])
        wickets_out = float(data['wickets_out'])

        runs_left = target - score
        balls_left = 120 - (overs * 6)
        wickets = 10 - wickets
        crr = score / overs
        rrr = (runs_left * 6) / balls_left

        input_df = pd.DataFrame({'batting_team': [batting_team], 'bowling_team': [bowling_team], 'city': [selected_city],
                                 'runs_left': [runs_left], 'balls_left': [balls_left], 'wickets': [wickets],
                                 'total_runs_x': [target], 'crr': [crr], 'rrr': [rrr]})

        result = pipe.predict_proba(input_df)
        loss = result[0][0]
        win = result[0][1]

        # Return options for teams, cities, and prediction result
        result = {
            'batting_team': batting_team,
            'bowling_team': bowling_team,
            'selected_city': selected_city,
            'score_op': score,
            'overs': overs,
            'wickets_out': wickets_out,
            'target': target,
            'win_probability': round(win*100),
            'loss_probability': round(loss*100),
        }
        print(result)
        return jsonify(result)
    elif request.method == 'GET':
            return jsonify(result)
    else:
        return jsonify({'error': 'Method not allowed'}), 405
    


if __name__ == '__main__':
    app.run(debug=True)
