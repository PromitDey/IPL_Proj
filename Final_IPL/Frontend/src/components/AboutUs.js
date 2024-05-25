import { FaLinkedin, FaGithub } from "react-icons/fa";
import { tm1, tm3 } from "../utils/teamMembers";
import tm2 from "../rawImg/tm2.png";
import tm4 from "../rawImg/tm4.png";
import { Link } from "react-router-dom/dist";

const AboutUs = () => {
  return (
    <div>
      <div className="mt-12">
        <p className="text-4xl font-extrabold text-white text-center">
          About <span className="app-logo">Us</span>
        </p>
        <div className="text-center mt-8 mx-[200px]">
          <p className="text-xl text-white">
            This project focuses on employing machine learning techniques for
            the prediction of Indian Premier League (IPL) match outcomes. By
            leveraging historical match data, including team and player
            statistics, match venues, and contextual factors, the study aims to
            develop predictive models capable of forecasting whether a team will
            win or lose a match. The project involves key steps such as data
            preprocessing, feature engineering, and the application of various
            machine learning algorithms. The ultimate goal is to provide a
            comprehensive analysis of the factors influencing IPL match results
            and to assess the efficacy of machine learning in enhancing
            predictive accuracy. The findings are expected to have implications
            for strategic decision-making within the IPL ecosystem and
            contribute to the broader field of sports analytics.
            <ul className="list-none mt-4">
              <span className="font-semibold">Technologies Used :</span>{" "}
              <li>Frontend - ReactJS, TailwindCSS</li>
              <li>Backend - Flask</li>
              <li>ML Model - Logistic Regression</li>
            </ul>
          </p>
        </div>
      </div>
      {/* yellow line */}
      <div className="flex justify-center mt-6">
        <div className="border-2 border-yellow-500 w-[800px]"></div>
      </div>
      <div className="mt-12">
        <div>
          <p className="text-center text-4xl font-extrabold text-white">
            Team <span className="app-logo">Members</span>
          </p>
        </div>
        {/* team Members cards */}
        <div className="flex justify-evenly mt-8 px-6">
          <div className="border-2 border-black rounded-3xl bg-white w-[335px] h-[500px] p-2 hover:shadow-md hover:shadow-white hover:transition-shadow hover:duration-300">
            <div className="flex justify-center">
              <img
                src={tm1}
                alt="suchanda"
                className="border-2 border-black h-[221px] w-[221px] rounded-3xl shadow-sm shadow-black"
              />
            </div>
            <div className="flex justify-center mt-4">
              <p className="list-none text-center">
                <li className="text-2xl font-medium">Suchanda Banerjee</li>
                <li className="font-light text-base">
                  Student at Asansol Engineering College
                </li>
              </p>
            </div>
            <div className="flex justify-center mt-10">
              <p className="text-center">
                <span className="font-semibold text-base">
                  Project Contribution -{" "}
                </span>
                Developed the Machine Learning model using Python
              </p>
            </div>
            <div className="mt-[65px] flex justify-center ">
              <div className="flex space-x-4 text-3xl ">
                <Link
                  to="https://www.linkedin.com/in/suchanda-banerjee-713a081a9/"
                  target="_blank"
                >
                  <FaLinkedin />
                </Link>
                <Link to="https://github.com/Suchanda-20" target="_blank">
                  <FaGithub />
                </Link>
              </div>
            </div>
          </div>
          <div className="border-2 border-black rounded-3xl bg-white w-[335px] h-[500px] p-2 hover:shadow-md hover:shadow-white hover:transition-shadow hover:duration-300">
            <div className="flex justify-center">
              <img
                src={tm2}
                alt="promit"
                className="border-2 border-black h-[221px] w-[221px] rounded-3xl shadow-sm shadow-black"
              />
            </div>
            <div className="flex justify-center mt-4">
              <p className="list-none text-center">
                <li className="text-2xl font-medium">Promit Dey</li>
                <li className="font-light text-base">
                  Frontend Developer | ReactJS | Cloud
                </li>
              </p>
            </div>
            <div className="flex justify-center mt-10">
              <p className="text-center">
                <span className="font-semibold text-base">
                  Project Contribution -{" "}
                </span>
                Developed the front-end for the application, and connected the
                front-end with back-end with python notebook.
              </p>
            </div>
            <div className="mt-4 flex justify-center ">
              <div className="flex space-x-4 text-3xl">
                <Link
                  to="https://www.linkedin.com/in/promitdey097/"
                  target="_blank"
                >
                  <FaLinkedin />
                </Link>
                <Link to="https://github.com/PromitDey" target="_blank">
                  <FaGithub />
                </Link>
              </div>
            </div>
          </div>
          <div className="border-2 border-black rounded-3xl bg-white w-[335px] h-[500px] p-2 hover:shadow-md hover:shadow-white hover:transition-shadow hover:duration-300">
            <div className="flex justify-center">
              <img
                src={tm3}
                alt="sanket"
                className="border-2 border-black h-[221px] w-[221px] rounded-3xl shadow-sm shadow-black"
              />
            </div>
            <div className="flex justify-center mt-4">
              <p className="list-none text-center">
                <li className="text-2xl font-medium">Sanket Bakshi</li>
                <li className="font-light text-base">
                  Btech'24 @AEC | Front end developer | AI ML enthusiast |
                  Python | C | JAVA | SQL
                </li>
              </p>
            </div>
            <div className="flex justify-center mt-4">
              <p className="text-center">
                <span className="font-semibold text-base">
                  Project Contribution -{" "}
                </span>
                Developed the Machine Learning model using Python
              </p>
            </div>
            <div className="mt-[65px] flex justify-center ">
              <div className="flex space-x-4 text-3xl">
                <Link
                  to="https://www.linkedin.com/in/sanket-bakshi-215bb724a/"
                  target="_blank"
                >
                  <FaLinkedin />
                </Link>
                <Link to="https://github.com/SanketBakshi007" target="_blank">
                  <FaGithub />
                </Link>
              </div>
            </div>
          </div>
          <div className="border-2 border-black rounded-3xl bg-white w-[335px] h-[500px] p-2 hover:shadow-md hover:shadow-white hover:transition-shadow hover:duration-300">
            <div className="flex justify-center">
              <img
                src={tm4}
                alt="upasak"
                className="border-2 border-black h-[221px] w-[221px] rounded-3xl shadow-sm shadow-black"
              />
            </div>
            <div className="flex justify-center mt-4">
              <p className="list-none text-center">
                <li className="text-2xl font-medium">
                  Upasak Sharma Choudhury
                </li>
                <li className="font-light text-base">
                  Student at Asansol Engineering College
                </li>
              </p>
            </div>
            <div className="flex justify-center mt-10">
              <p className="text-center">
                <span className="font-semibold text-base">
                  Project Contribution -{" "}
                </span>
                Developed the frontend for the application, and connected the
                frontend with backend with python notebook.
              </p>
            </div>
            <div className="mt-4 flex justify-center ">
              <div className="flex space-x-4 text-3xl">
                <Link
                  to="https://www.linkedin.com/in/upasak-sharma-choudhury-606a20219/"
                  target="_blank"
                >
                  <FaLinkedin />
                </Link>
                <Link to="" target="_blank">
                  <FaGithub />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
