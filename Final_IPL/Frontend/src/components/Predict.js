import { useState } from "react";

const Predict = () => {
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
      <div>
        <p className="text-4xl font-extrabold text-center mt-12 text-white">
          IPL Win/Loss <span className="app-logo">Predictor</span>
        </p>
      </div>
      <div className="flex justify-center">
        <div className="rounded-[50px] bg-gray-500 w-[1000px] h-[1100px] mt-8 flex justify-center items-center shadow-lg shadow-black">
          <div className="rounded-[50px] bg-gray-400 w-[980px] h-[1080px] shadow-sm shadow-black">
            <form onSubmit={handleSubmit}>
              {/* box for batting and bowling team */}
              <div className="flex justify-between px-20 mx-2 mt-[100px]">
                <div className="space-y-2">
                  <label
                    className="text-2xl font-semibold"
                    htmlFor="batting_team"
                  >
                    Select the batting team
                  </label>
                  <div>
                    <select
                      className="w-[350px] h-[50px] rounded-lg shadow-sm hover:shadow-black hover:transition-shadow hover:duration-75 p-2"
                      name="batting_team"
                      id="batting_team"
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option value="Sunrisers Hyderabad">
                        Sunrisers Hyderabad
                      </option>
                      <option value="Mumbai Indians">Mumbai Indians</option>
                      <option value="Royal Challengers Bangalore">
                        Royal Challengers Bangalore
                      </option>
                      <option value="Kolkata Knight Riders">
                        Kolkata Knight Riders
                      </option>
                      <option value="Kings XI Punjab">Kings XI Punjab</option>
                      <option value="Chennai Super Kings">
                        Chennai Super Kings
                      </option>
                      <option value="Rajasthan Royals">Rajasthan Royals</option>
                      <option value="Delhi Capitals">Delhi Capitals</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    className="text-2xl font-semibold"
                    htmlFor="bowling_team"
                  >
                    Select the bowling team
                  </label>
                  <div>
                    <select
                      className="w-[350px] h-[50px] rounded-lg shadow-sm hover:shadow-black hover:transition-shadow hover:duration-75 p-2 "
                      name="bowling_team"
                      id="bowling_team"
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option value="Sunrisers Hyderabad">
                        Sunrisers Hyderabad
                      </option>
                      <option value="Mumbai Indians">Mumbai Indians</option>
                      <option value="Royal Challengers Bangalore">
                        Royal Challengers Bangalore
                      </option>
                      <option value="Kolkata Knight Riders">
                        Kolkata Knight Riders
                      </option>
                      <option value="Kings XI Punjab">Kings XI Punjab</option>
                      <option value="Chennai Super Kings">
                        Chennai Super Kings
                      </option>
                      <option value="Rajasthan Royals">Rajasthan Royals</option>
                      <option value="Delhi Capitals">Delhi Capitals</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* box for hosting city */}
              <div className="px-20 mx-2 mt-[50px]">
                <div className="space-y-2">
                  <label
                    className="text-2xl font-semibold"
                    htmlFor="selected_city"
                  >
                    Select host city
                  </label>
                  <div>
                    <select
                      className="w-full h-[50px] rounded-lg shadow-sm hover:shadow-black hover:transition-shadow hover:duration-75 p-2 "
                      name="selected_city"
                      id="selected_city"
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option value="Hyderabad">Hyderabad</option>
                      <option value="Bangalore">Bangalore</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Indore">Indore</option>
                      <option value="Kolkata">Kolkata</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Chandigarh">Chandigarh</option>
                      <option value="Jaipur">Jaipur</option>
                      <option value="Chennai">Chennai</option>
                      <option value="Cape Town">Cape Town</option>
                      <option value="Port Elizabeth">Port Elizabeth</option>
                      <option value="Durban">Durban</option>
                      <option value="Centurion">Centurion</option>
                      <option value="East London">East London</option>
                      <option value="Johannesburg">Johannesburg</option>
                      <option value="Kimberley">Kimberley</option>
                      <option value="Bloemfontein">Bloemfontein</option>
                      <option value="Ahmedabad">Ahmedabad</option>
                      <option value="Cuttack">Cuttack</option>
                      <option value="Nagpur">Nagpur</option>
                      <option value="Dharamsala">Dharamsala</option>
                      <option value="Visakhapatnam">Visakhapatnam</option>
                      <option value="Pune">Pune</option>
                      <option value="Raipur">Raipur</option>
                      <option value="Ranchi">Ranchi</option>
                      <option value="Abu Dhabi">Abu Dhabi</option>
                      <option value="Sharjah">Sharjah</option>
                      <option value="Mohali">Mohali</option>
                      <option value="Bengaluru">Bengaluru</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* box for target */}
              <div className="px-20 mx-2 mt-[50px]">
                <div className="space-y-2">
                  <label className="text-2xl font-semibold" htmlFor="target">
                    Target
                  </label>
                  <input
                    className="w-full h-[50px] rounded-lg shadow-sm hover:shadow-black hover:transition-shadow hover:duration-75 p-2 font-semibold"
                    placeholder="Numerical_value"
                    type="number"
                    name="target"
                    id="target"
                    onChange={handleChange}
                  />
                </div>
              </div>
              {/* box for curr score, wickets out, overs completed */}
              <div className="px-20 mx-2 mt-[50px]">
                <div className="flex justify-between">
                  {/* curr score box */}
                  <div className="space-y-2">
                    <label className="text-2xl font-semibold" htmlFor="score">
                      Curr Score
                    </label>
                    <div>
                      <input
                        className="w-[200px] h-[50px] rounded-lg shadow-sm hover:shadow-black hover:transition-shadow hover:duration-75 p-2 font-semibold"
                        type="number"
                        name="score"
                        id="score"
                        onChange={handleChange}
                        placeholder="Numerical_value"
                      />
                    </div>
                  </div>
                  {/* wickets out box */}
                  <div className="space-y-2">
                    <label
                      className="text-2xl font-semibold"
                      htmlFor="wickets_out"
                    >
                      Wickets Out
                    </label>
                    <div>
                      <input
                        className="w-[200px] h-[50px] rounded-lg shadow-sm hover:shadow-black hover:transition-shadow hover:duration-75 p-2 font-semibold"
                        type="number"
                        name="wickets_out"
                        id="wickets_out"
                        onChange={handleChange}
                        placeholder="Numerical-value"
                      />
                    </div>
                  </div>
                  {/* overs completed box */}
                  <div className="space-y-2">
                    <label className="text-2xl font-semibold" htmlFor="overs">
                      Overs Completed
                    </label>
                    <div>
                      <input
                        className="w-[200px] h-[50px] rounded-lg shadow-sm hover:shadow-black hover:transition-shadow hover:duration-75 p-2 font-semibold"
                        type="number"
                        name="overs"
                        id="overs"
                        onChange={handleChange}
                        placeholder="Numerical_value"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-[50px]">
                <button
                  type="submit"
                  className="border-2 border-red-400 rounded-3xl px-10 py-2 text-2xl font-semibold bg-slate-200  shadow-md hover:bg-red-500  hover:shadow-black hover:transition-shadow hover:duration-100 hover:text-yellow-300 hover:border-black"
                >
                  Predict Probability
                </button>
              </div>
            </form>
            {/* Result section */}
            {result && 
              <div className="px-20 mx-2 mt-[50px] flex justify-between">
                <div className="border-2 border-black rounded-3xl w-[350px] h-[250px] bg-slate-200">
                  <div className="p-5">
                    <p className="text-center text-2xl font-semibold">
                      Batting Team
                    </p>
                    <div className="mt-10 font-semibold text-xl px-5 space-y-5">
                      <p>Win % - {result.win_probability}%</p>
                      <p>Loss % - {result.loss_probability}%</p>
                    </div>
                  </div>
                </div>
                <div className="border-2 border-black rounded-3xl w-[350px] h-[250px] bg-slate-200">
                  <div className="p-5">
                    <p className="text-center text-2xl font-semibold">
                      Bowling Team
                    </p>
                    <div className="mt-10 font-semibold text-xl px-5 space-y-5">
                      <p>Win % - {result.loss_probability}%</p>
                      <p>Loss % - {result.win_probability}%</p>
                    </div>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Predict;
