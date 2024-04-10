import { Link } from "react-router-dom";

const HowToPlay = () => {
  return (
    <div className="mt-12">
      <h1 className="text-center text-4xl font-extrabold text-white">
        How to <span className="app-logo">Play</span>
      </h1>
      <div className="flex mt-8 justify-between px-[150px]">
        <div>
          <div className="flex">
            <div className="border-2 border-black rounded-full w-20 h-20 mt-[50px] mb-[-20] ml-10 circle-custom flex justify-center items-center text-4xl">
              1
            </div>
            <div className="border-2 border-black rounded-2xl w-80 h-[150px] mb-[-40px] ml-10 box-small-custom">
              <p className="text-lg text-center font-semibold mt-2 mb-[-8]">
                Match Data
              </p>
              <div className="flex justify-between p-2 font-thin">
                <div>
                  <p>Batting Team : ____</p>
                  <p>Target : ____</p>
                  <p>Overs Completed : ____</p>
                  <p>Playing City : ____</p>
                </div>
                <div>
                  <p>Bowling Team : ____</p>
                  <p>Curr Score : ____</p>
                  <p>Wickets Out : ____</p>
                  <button className="border-2 border-black rounded-3xl px-2 mt-2 text-red-500">
                    Predict Probability
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="border-2 border-black rounded-3xl w-[500px] h-[180px] box-custom">
            <p className="p-2 mt-8 ml-8 text-2xl font-semibold">
              Fill the Form
            </p>
            <div className="px-16 mt-[-6] text-xl">
              <p>with the current match data</p>
              <p>Click the Predict Probability Button</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex">
            <div className="border-2 border-black rounded-full w-20 h-20 mt-[50px] mb-[-20] ml-10 circle-custom flex justify-center items-center text-4xl">
              2
            </div>
            <div className="border-2 border-black rounded-2xl w-80 h-[150px] mb-[-40px] ml-10 box-small-custom flex justify-center">
              <div className="p-2 mt-6 text-center">
                <p className="text-2xl text-center font-semibold">
                  Winning Probability
                </p>
                <div className="mt-2">
                  <p>Batting Team Name : Win %</p>
                  <p>Bowling Team Name : Win %</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-2 border-black rounded-3xl w-[500px] h-[180px] box-custom">
            <p className="p-2 mt-8 ml-8 text-2xl font-semibold">
              Prediction Result
            </p>
            <div className="px-16 mt-[-6] text-xl">
              <p>Displays the win percentage of both team</p>
              <p>according to the provided data</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <Link to="/predict">
          <button className=" border-2 border-black p-2 rounded-2xl px-8 text-2xl font-semibold text-black bg-red-300 hover:text-white  hover:shadow-lg hover:shadow-red-200 hover:transition-shadow hover:duration-300 hover:bg-red-500">
            Click To <span className="text-yellow-200">Play !</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HowToPlay;
