import { bodyBannerURL } from "../utils/constants";
import RevRate from "./RevRate";
import { user1, user2, user3 } from "../utils/userAvatar";
import OffPartner from "./OffPartner";
import HowToPlay from "./HowToPLay";
import RatingBar from "./RatingBar";

const Body = () => {
  return (
    <div className="my-2">
      {/* Body Banner */}
      <div>
        <img
          src={bodyBannerURL}
          className="h-[600px] w-screen px-[180px]"
        ></img>
      </div>
      {/* Official Partner */}
      <OffPartner />
      {/* yellow line */}
      <div className="flex justify-center mt-6">
        <div className="border-2 border-yellow-500 w-[800px]"></div>
      </div>
      {/* It's easy to start playing in Fantasy XI */}
      <div className="flex justify-center mt-12">
        <div>
          <h1 className="text-center text-4xl font-extrabold text-white">
            It's easy to start playing on{" "}
            <span className="app-logo">Fantasy XI</span>
          </h1>
          <div className="w-[800px] mt-6">
            <h2 className="text-center text-2xl text-white font-thin">
              Enter into the thrilling world of Fantasy sports, a strategy-based
              online sports game wherein you can create a virtual team of real
              players playing in real life matches. Create your team to win
              points based on all the players' performance in a live game.
            </h2>
          </div>
        </div>
      </div>
      {/* yellow line */}
      <div className="flex justify-center mt-6">
        <div className="border-2 border-yellow-500 w-[800px]"></div>
      </div>
      {/* How to play */}
      <HowToPlay />
      {/* yellow line */}
      <div className="flex justify-center mt-6">
        <div className="border-2 border-yellow-500 w-[800px]"></div>
      </div>
      {/* Reviews & Ratings */}
      <p className="text-center mt-12 font-extrabold text-4xl text-white">
        Reviews & <span className="app-logo">Ratings</span>
      </p>
      <div className="flex justify-between px-14 mt-8">
        <RevRate
          name="Alex Singh"
          match="RCB vs CSK"
          winnings="1 Crore"
          review="When I started to play, I took my time to analyze players and match conditions. I also regularly studied match-ups and pitch conditions. You too can put your mind to work and play on Dream11."
          img={user1}
        />
        <RevRate
          name="Veronica Yadav"
          match="DDD vs SRH"
          winnings="1.5 Crore"
          review="I thought that I could achieve something using my cricket skills and knowledge. In 2018, I created my first team on Dream11 in a private contest, and I won around ₹10,000. After that, I gained full trust in Dream11."
          img={user2}
        />
        <RevRate
          name="Rink Singh"
          match="KKR vs GT"
          winnings="80 Lakhs"
          review="I started playing a year back and played regularly during the World Cup this year. I’ve always been interested in cricket, which helped me play my best and use my skills too!"
          img={user3}
        />
      </div>
      {/* Rating Bar */}
      <RatingBar />
    </div>
  );
};

export default Body;
