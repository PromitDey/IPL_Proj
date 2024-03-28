import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    batting_team: "",
    bowling_team: "",
    selected_city: "",
    target: "",
    score: "",
    overs: "",
    wickets_out: "",
  });
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setResult(data);
      console.log(data);
    } catch (error) {}
  };

  return (
    <div>
      <h1>IPL Win/Loss Predictor</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="batting_team">Select the batting team:</label>
        <select name="batting_team" id="batting_team" onChange={handleChange}>
          <option value="">Select</option>
          <option value="Sunrisers Hyderabad">Sunrisers Hyderabad</option>
          <option value="Mumbai Indians">Mumbai Indians</option>
          
        </select>

        <label htmlFor="bowling_team">Select the bowling team:</label>
        <select name="bowling_team" id="bowling_team" onChange={handleChange}>
          <option value="">Select</option>
          <option value="Sunrisers Hyderabad">Sunrisers Hyderabad</option>
          <option value="Mumbai Indians">Mumbai Indians</option>
          
        </select>

        <label htmlFor="selected_city">Select host city:</label>
        <select name="selected_city" id="selected_city" onChange={handleChange}>
          <option value="">Select</option>
          <option value="Kolkata">Kolkata</option>
          {/* Add options for cities */}
        </select>

        <label htmlFor="score">Score:</label>
        <input type="number" name="score" id="score" onChange={handleChange} />

        <label htmlFor="overs">Overs completed:</label>
        <input type="number" name="overs" id="overs" onChange={handleChange} />

        <label htmlFor="wickets_out">Wickets Out:</label>
        <input
          type="number"
          name="wickets_out"
          id="wickets_out"
          onChange={handleChange}
        />

        <label htmlFor="target">Target:</label>
        <input
          type="number"
          name="target"
          id="target"
          onChange={handleChange}
        />

        <button type="submit">Predict Probability</button>
      </form>

      {result && (
        <div>
          <h2>Prediction Result</h2>
          <p>Batting Team: {result.batting_team}</p>
          <p>Bowling Team: {result.bowling_team}</p>
          <p>Score by Batting Team: {result.score_op}</p>
          <p>Overs completed: {result.overs}</p>
          <p>Wickets Out: {result.wickets_out}</p>
          <p>Target: {result.target}</p>
          <p>Bowling Team : {result.bowling_team} </p>
          <p>Win Probability - {result.win_probability}%</p>
          <p>Loss Probability - {result.loss_probability}%</p>
        </div>
      )}
    </div>
  );
}

export default App;
