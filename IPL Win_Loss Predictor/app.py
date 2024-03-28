from flask import Flask, render_template, request
import pickle
import pandas as pd

app = Flask(__name__, static_folder='D:/Personal/Final Yr Proj/IPL Win_Loss Predictor/static')

teams = ['Sunrisers Hyderabad', 'Mumbai Indians', 'Royal Challengers Bangalore', 'Kolkata Knight Riders',
         'Kings XI Punjab', 'Chennai Super Kings', 'Rajasthan Royals', 'Delhi Capitals']

cities = ['Hyderabad', 'Bangalore', 'Mumbai', 'Indore', 'Kolkata', 'Delhi',
          'Chandigarh', 'Jaipur', 'Chennai', 'Cape Town', 'Port Elizabeth',
          'Durban', 'Centurion', 'East London', 'Johannesburg', 'Kimberley',
          'Bloemfontein', 'Ahmedabad', 'Cuttack', 'Nagpur', 'Dharamsala',
          'Visakhapatnam', 'Pune', 'Raipur', 'Ranchi', 'Abu Dhabi',
          'Sharjah', 'Mohali', 'Bengaluru']

pipe = pickle.load(open('pipe.pkl', 'rb'))


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/predict', methods=['GET'])
def predict():
    batting_team = None
    bowling_team = None
    result = None

    if request.method == 'GET':
        batting_team = request.form['batting_team']
        bowling_team = request.form['bowling_team']
        selected_city = request.form['selected_city']
        target = float(request.form['target'])
        score = float(request.form['score'])
        overs = float(request.form['overs'])
        wickets = float(request.form['wickets'])

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

    return render_template('index.html', teams=sorted(teams), cities=sorted(cities), result=result.tolist(),
                           batting_team=batting_team, win=round(win * 100), bowling_team=bowling_team,
                           loss=round(loss * 100), target=round(target), score=score, overs=overs, wickets_out= round(10 - wickets), score_op = round(score))


if __name__ == '__main__':
    app.run(debug=True)
